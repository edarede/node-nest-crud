"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
require("winston-daily-rotate-file");
let LoggerService = class LoggerService {
    constructor() {
        this.createLoggers();
        this.replaceConsole();
    }
    createLoggers() {
        const textFormat = winston_1.format.printf((log) => {
            return `${log.timestamp} - [${log.level.toUpperCase().charAt(0)}] ${log.message}`;
        });
        const dateFormat = winston_1.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        });
        this.loggerInfo = winston_1.createLogger({
            level: 'info',
            format: winston_1.format.combine(dateFormat, textFormat),
            transports: [
                new winston_1.transports.DailyRotateFile({
                    filename: 'log/info/info-%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    maxFiles: '7d'
                })
            ]
        });
        this.loggerError = winston_1.createLogger({
            level: 'error',
            format: winston_1.format.combine(dateFormat, textFormat),
            transports: [
                new winston_1.transports.DailyRotateFile({
                    filename: 'log/error/error-%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    maxFiles: '7d'
                })
            ]
        });
        this.loggerWarn = winston_1.createLogger({
            level: 'warn',
            format: winston_1.format.combine(dateFormat, textFormat),
            transports: [
                new winston_1.transports.DailyRotateFile({
                    filename: 'log/warn/warn-%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    maxFiles: '7d'
                })
            ]
        });
        this.loggerAll = winston_1.createLogger({
            format: winston_1.format.combine(dateFormat, textFormat),
            transports: [
                new winston_1.transports.DailyRotateFile({
                    filename: 'log/all/all-%DATE%.log',
                    datePattern: 'YYYY-MM-DD',
                    maxFiles: '7d'
                }),
                new winston_1.transports.Console()
            ]
        });
    }
    replaceConsole() {
        console.log = (message, params) => {
            if (params) {
                this.loggerInfo.info(message + " " + JSON.stringify(params));
                this.loggerAll.info(message + " " + JSON.stringify(params));
            }
            else {
                this.loggerInfo.info(message);
                this.loggerAll.info(message);
            }
        };
        console.error = (message, params) => {
            if (params) {
                this.loggerError.error(message + " " + JSON.stringify(params));
                this.loggerAll.error(message + " " + JSON.stringify(params));
            }
            else {
                this.loggerError.error(message);
                this.loggerAll.error(message);
            }
        };
        console.warn = (message, params) => {
            if (params) {
                this.loggerWarn.warn(message + " " + JSON.stringify(params));
                this.loggerAll.warn(message + " " + JSON.stringify(params));
            }
            else {
                this.loggerWarn.warn(message);
                this.loggerAll.warn(message);
            }
        };
    }
    log(message) {
        this.loggerInfo.info(message);
        this.loggerAll.info(message);
    }
    error(message) {
        this.loggerError.error(message);
        this.loggerAll.error(message);
    }
    warn(message) {
        this.loggerWarn.warn(message);
        this.loggerAll.warn(message);
    }
    debug(message) { }
    verbose(message) { }
};
LoggerService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], LoggerService);
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map