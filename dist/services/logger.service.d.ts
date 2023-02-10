import 'winston-daily-rotate-file';
export declare class LoggerService {
    private loggerInfo;
    private loggerError;
    private loggerWarn;
    private loggerAll;
    constructor();
    createLoggers(): void;
    replaceConsole(): void;
    log(message: string): void;
    error(message: string): void;
    warn(message: string): void;
    debug(message: string): void;
    verbose(message: string): void;
}
