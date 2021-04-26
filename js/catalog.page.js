import { products } from "./API.js";
import {generateProdact} from "./product.js";

export const fillUpCatalog = async () => {
    const productList = await products();
    let productHTML = ``;
    const catalog = document.getElementsByClassName('main__catalog')[0];
    for(const product of productList) {
        productHTML += generateProdact(product);
    }
    catalog.innerHTML = productHTML;
};

fillUpCatalog();