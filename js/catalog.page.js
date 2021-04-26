import { products } from "./API.js";
import {generateProdact} from "./product.js";

products().then(productList => {
    let productHTML = ``;
    const catalog = document.getElementsByClassName('main__catalog')[0];
    for(const product of productList) {
        productHTML += generateProdact(product);
    }
    catalog.innerHTML = productHTML;
});
