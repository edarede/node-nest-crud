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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_dto_1 = require("./dto/product.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    createProduct(res, createProductDTO) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.productService.createProduct(createProductDTO);
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Product Successfully Created',
                product
            });
        });
    }
    getProducts(res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield this.productService.getProducts();
            return res.status(common_1.HttpStatus.OK).json(products);
        });
    }
    getProduct(res, productID) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.productService.getProduct(productID);
            if (!product)
                throw new common_1.NotFoundException('Product does not exist!');
            return res.status(common_1.HttpStatus.OK).json(product);
        });
    }
    deleteProduct(res, productID) {
        return __awaiter(this, void 0, void 0, function* () {
            const productDeleted = yield this.productService.deleteProduct(productID);
            if (!productDeleted)
                throw new common_1.NotFoundException('Product does not exist!');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Product Deleted Successfully',
                productDeleted
            });
        });
    }
    updateProduct(res, createProductDTO, productID) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedProduct = yield this.productService.updateProduct(productID, createProductDTO);
            if (!updatedProduct)
                throw new common_1.NotFoundException('Product does not exist!');
            return res.status(common_1.HttpStatus.OK).json({
                message: 'Product Updated Successfully',
                updatedProduct
            });
        });
    }
};
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Res()), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createProduct", null);
__decorate([
    common_1.Get('/'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    common_1.Get('/:productID'),
    __param(0, common_1.Res()), __param(1, common_1.Param('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProduct", null);
__decorate([
    common_1.Delete('/delete'),
    __param(0, common_1.Res()), __param(1, common_1.Query('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    common_1.Put('/update'),
    __param(0, common_1.Res()), __param(1, common_1.Body()), __param(2, common_1.Query('productID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, product_dto_1.CreateProductDTO, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
ProductController = __decorate([
    common_1.Controller('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map