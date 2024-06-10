import { ProductRepositoryPort } from "../../../application/ports/repository/product.repository.port";
import { Product } from "../../../domain/models/product/product.model";

export class ProductRepository implements ProductRepositoryPort {

    async getProductById(_id:string): Promise<Product> {
        try{
            return new Product('2', 'Portatil', 'Mac Book', 3000000,20);
        }catch(error){
            throw error;
        }
    }

    async getProducts(): Promise<Product[]> {
        let products:Array<Product> = [];
        const product = new Product('18', 'Portatil', 'Mac Book', 3000000,20)
        try{
            products.push(product);
            return products;
        }catch(error){
            throw error;
        }
    }
    
}