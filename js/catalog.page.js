import {categories, productsSort  } from "./API.js";
import {generateProductHtml } from "./product.js";


const HtmlCatalog = document.getElementsByClassName('main__catalog')[0];

///Output product in catalog
const CatalogOutPut = async (sort) => {
    let catalogHTML = ``;
    const productList = await productsSort(sort);
    for(const product of productList) {
        catalogHTML += generateProductHtml (product);
    }
    HtmlCatalog.innerHTML = catalogHTML;
}



// Product Sort
const sort = document.getElementById('sort');
sort.addEventListener('change',() => {
    CatalogOutPut(sort.value);
})

console.log(CatalogOutPut().then())