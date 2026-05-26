console.log("connected")
import { patitos } from "../db/patitosdb.js";

const productsList = document.querySelector(".products__list");

patitos.forEach((patito, index) => {
    productsList.innerHTML += `
        <div class="product__card">
            <img class="product__image" src="${patito.image}" alt="${patito.name}">
            <div class="product__card__content">
                <h3 class="product__title">${patito.title}</h3>
                <p class="product__description">${patito.description}</p>
                <span class="product__price">€${patito.price}</span>
            </div>

            <a href="./detail.html" class="product__link" data-index="${index}">
                <div id="product_button" class="button_action_secondary">
                    Ver
                </div>
            </a>
        </div>
    `;
});

const productLinks = document.querySelectorAll(".product__link");

productLinks.forEach((link) => {
    link.addEventListener("click", () => {
        localStorage.setItem("patitoSeleccionado", link.dataset.index);
    });
});

