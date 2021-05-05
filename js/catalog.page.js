import {categories, productsSort, products  } from "./API.js";
import {generateProductHtml } from "./product.js";


const HtmlCatalog = document.getElementsByClassName('main__catalog')[0];

/Output product in catalog
const CatalogOutPut = async (sort) => {
    let catalogHTML = ``;
    const productList = await productsSort(sort);
    for(const product of productList) {
        catalogHTML += generateProductHtml (product);
    }
    // return catalogHTML
    HtmlCatalog.innerHTML = catalogHTML;
}


const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
    const inputText = searchInput.value.toUpperCase();
    products().then((result) => {
        const filteredProducts = result.filter((item) => item.title.toUpperCase().includes(inputText) != -1);
        HtmlCatalog.innerHTML = generateProductHtml(filteredProducts)
        }
    )
})





// Product Sort
const sort = document.getElementById('sort');
sort.addEventListener('change',() => {
    CatalogOutPut(sort.value);
})

console.log(CatalogOutPut().then())