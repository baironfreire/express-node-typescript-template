import { ProductRepository } from "../src/infrastructure/db/product/product.repository";
import { DependenciesType }  from "../src/application/ports/cases/case.get.products.port";
import { caseUseGetProducts } from "../src/application/cases/case.get.products";
import { getProductsController } from "../src/infrastructure/api/controllers/get.products.controller";
import { NextFunction, Request, RequestHandler, Response } from "express";

const dependencies: DependenciesType = {
    mongoDBProductRepository: new ProductRepository()
};
const adapter  = getProductsController(caseUseGetProducts());

const build: (
    controllerFunc: (req: Request, res: Response, next: NextFunction) => Promise<any>
) => RequestHandler[] = (
    controllerFunc: (req: Request, res: Response, next: NextFunction) => Promise<any>
): RequestHandler[] => {
    return [
       async (
        req: Request, 
        res: Response, 
        next: NextFunction
       ) => {
        await controllerFunc(req, res, next);
       }
    ]
}

export const GetProductsHttpHandler = build(async(req, res, _next)=> adapter(req, res, dependencies, null));