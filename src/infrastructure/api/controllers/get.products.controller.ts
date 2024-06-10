import { Request, Response } from "express";
import { CaseGetProductsPort, DependenciesType } from "../../../application/ports/cases/case.get.products.port";
import * as responseHandler from "../../../utils/http/response.handler";

export const getProductsController = (
    caseUseGetProducts: CaseGetProductsPort
) => async(
    _req: Request,
    res: Response,
    dependecies: DependenciesType,
    _context: any
) => {
    try {
        return res.json(responseHandler.success(await caseUseGetProducts(
            dependecies
        )))
    } catch (error) {
        const httpError = responseHandler.handlerError(error);
        return res.status(httpError.statusCode).json(JSON.parse(httpError.message))
    }
}