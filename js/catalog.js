import { products } from "./API.js";

export const fillUpCatalog = async () => {
    const productList = await products();
    let productHTML = ``;
    const catalog = document.getElementsByClassName('main__catalog')[0];
    for(const product of productList) {
        productHTML += `
                <div class="catalog__product">
                    <div class="catalog__photo">
                        <img src="img/prodact01.jpg"/>
                    </div>

                    <div class="catalog__title">
                        Processor Intel Core™ i5-8400 2,8 Ghz 9 MB LGA 1151 BOX
                    </div>

                    <div class="catalog__price">
                        $6 RRP
                        $4 COST
                        25% ($2)
                    </div>
                </div>
               `;
    }
    catalog.innerHTML = productHTML;
};

fillUpCatalog();