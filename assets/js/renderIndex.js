import { patitos } from "../db/patitosdb.js";
console.log("connected")

const productsList = document.querySelector(".products__list");

patitos.slice(0, 4).forEach((patito) => {
    const imagePath = patito.image.replace("../assets/", "./assets/");
    productsList.innerHTML += `
        <div class="product__card">
            <img class="product__image" src="${imagePath}" alt="${patito.name}" />
            <div class="product_card__content">
                <h3 class="product__title">${patito.title}</h3>
                <p class="product__description">${patito.description}</p>
                <span class="product__price">€${patito.price}</span>
            </div>
            <a href="./pages/detail.html">
                <div id="product_button" class="button_action_secondary">
                    Ver
                </div>
            </a>
        </div>
    `;
});