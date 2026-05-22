console.log("connected")
import { patitos } from "../db/patitosdb.js";

const productsList = document.querySelector(".products__list");

patitos.forEach((patito) => {
    productsList.innerHTML += `
        <div class="product__card">
            <img class="product__image" src="${patito.image}" alt="${patito.name}" />
            <div class="product_card__content">
                <h3 class="product__title">${patito.title}</h3>
                <p class="product__description">${patito.description}</p>
                <span class="product__price">€${patito.price}</span>
            </div>
            <a href="./detail.html">
                <div id="product_button" class="button_action_secondary">
                    Ver
                </div>
            </a>
        </div>
    `;
});