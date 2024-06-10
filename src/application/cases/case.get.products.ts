
import { HTTP_CODES_RESPONSE } from "../../utils/http/http.code.response";
import { Utils } from "../../utils/utils";
import { CaseGetProductsPort } from "../ports/cases/case.get.products.port";

export const caseUseGetProducts = (): CaseGetProductsPort => async (
    dependencies
) => {
    const {
        mongoDBProductRepository
    } = dependencies;
    try {
        let products = await mongoDBProductRepository.getProducts();
        if(Utils.isEmpty(products)){
            throw new Error(HTTP_CODES_RESPONSE.DATA_NOT_FOUND.code);
        }
        return products;
    } catch (error) {
        throw error;
    }
}