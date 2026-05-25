import { patitos } from "../db/patitosdb.js";
console.log("renderCart: connected")

const cartList = document.querySelector(".cart__list");


// Por aqui debemos añadir funcionalidad para elegir patitos por mostrar en carrito.
const selectedQuantities = {
    4: 1,
    3: 2,
    7: 4
};

const selectedIds = new Set(Object.keys(selectedQuantities).map(Number));
const filteredItems = patitos.filter(patito => selectedIds.has(patito.id));

filteredItems.forEach((patito) => {
    
    cartList.innerHTML += `
        <div class="cart__card">
            <img class="cart__image" src="${patito.image}" alt="${patito.name}" />
            <div class="cart_card__content">
                <h3 class="cart__title">${patito.title}</h3>
                <p class="cart__description">${patito.description}</p>
                <span class="cart__price">€${patito.price}</span>
            </div>
            <div class="cart_item__counter">
                <div class="cart_item__plus">
                    <img src="../assets/icons/plus.svg" alt="+" />
                </div>
                <!-- Añadir funcionalidad para mostrar cantidad de patitos unicos. -->
                <span>${selectedQuantities[patito.id]}</span>
                <div class="cart_item__menos">
                    <img src="../assets/icons/menos.svg" alt="-" />
                </div>
            </div>
        </div>
    `
});

