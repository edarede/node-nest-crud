import { Model } from "mongoose";
import { Product } from "./interfaces/product.interface";
import { CreateProductDTO } from "./dto/product.dto";
export declare class ProductService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    getProducts(): Promise<Product[]>;
    getProduct(productID: string): Promise<Product>;
    createProduct(createProductDTO: CreateProductDTO): Promise<Product>;
    deleteProduct(productID: string): Promise<any>;
    updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<Product>;
}
