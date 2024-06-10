import { Product } from "../../../domain/models/product/product.model";

export interface ProductRepositoryPort {
    getProductById(id:string): Promise<Product>;
    getProducts(): Promise<Array<Product>>;
};