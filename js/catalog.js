import { products } from "./API.js";

export const fillUpCatalog = async () => {
    const productList = await products();
    let productHTML = ``;
    const catalog = document.getElementsByClassName('main__catalog')[0];
    for(const product of productList) {
        productHTML += `
                <div class="catalog__product">
                    <div class="catalog__photo">
                        <img src="${product.image}" />
                    </div>

                    <div class="catalog__title">
                        ${product.title}
                    </div>

                    <div class="catalog__price">
                        ${product.price}$
                    </div>
                </div>
               `;
    }
    catalog.innerHTML = productHTML;
};

fillUpCatalog();