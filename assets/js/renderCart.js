import { patitos } from "../db/patitosdb.js";
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
                <span class="cart__price">€${patito.price}</span>
            </div>
            <div class="cart_item__counter">
                <div class="cart_item__menos">
                    <img src="../assets/icons/menos.svg" alt="-" />
                </div>
                <!-- Añadir funcionalidad para mostrar cantidad de patitos unicos. -->
                <span>${selectedQuantities[patito.id]}</span>
                <div class="cart_item__plus">
                    <img src="../assets/icons/plus.svg" alt="+" />
                </div>
            </div>
        </div>
    `
});



// === CHECKOUT CONTAINER ===
let totalPrice = 0

filteredItems.forEach((patito) => {
    totalPrice += patito.price;
})

totalPrice = totalPrice.toFixed(2);

const checkoutContainer = document.querySelector('.cart__checkout_container');

checkoutContainer.innerHTML += `
    <h2>Resumen</h2>
    <div class="cart__checkout_row">
        <span>Subtotal:</span>
        <span>€${totalPrice}</span>
    </div>
    <div class="cart__checkout_row">
        <span>Envío:</span>
        <span style="color: green;">Gratis</span>
    </div>
    <div class="cart__checkout_separator"></div>
    <div  class="cart__checkout_row cart__checkout_total">
        <span>Total:</span>
        <span>€${totalPrice}</span>
    </div>

    <div class="cart__checkout_buttons">
        <a class="cart__back_button" href="../../pages/compra_realizada.html">
            <div class="button_checkout_back">
                Volver
            </div>
        </a>
        <a class="cart__checkout_button" href="../../pages/compra_realizada.html">
            <div class="button_checkout">
                Comprar
            </div>
        </a>
    </div>
`


//  UNA COSA