export  const  generateProductHtml = (product) =>`
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
                </div>`;
