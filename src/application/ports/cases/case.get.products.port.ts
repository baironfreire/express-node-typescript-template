import { Product } from "../../../domain/models/product/product.model";
import { ProductRepositoryPort } from "../repository/product.repository.port";

export type DependenciesType = {
    mongoDBProductRepository: ProductRepositoryPort
};

export type CaseGetProductsPort = (
    dependencies: DependenciesType
) => Promise<Array<Product>>;