import { patitos } from "../db/patitosdb.js";

const patitoSeleccionado = localStorage.getItem("patitoSeleccionado");

const patito = patitos[patitoSeleccionado];

const detailContainer = document.querySelector(".detail__container");

detailContainer.innerHTML += `
<img class="detail__image" src="${patito.image}" alt="${patito.name}" />
                <div class="detail__content">
                    <div class="detail__special">
                        Edición special
                    </div>
                    <h1>${patito.name}</h1>
                    <h3>€${patito.price}</h3>
                    <div class="detail__description_container">
                        <p>${patito.description}</p>
                    </div>
                    <p class="detail__in_stock_info"><i>¡Solo quedan ${patito.stock} en stock!</i></p>
                    <div class="detail__characteristics">
                        <div class="charasteristics__item">
                            <span class="material-symbols-outlined charasteristics__icon" data-icon="tsunami">tsunami</span>
                            <span class="charasteristics__text">100% Sumergible</span>
                        </div>
                        <div class="charasteristics__item">
                            <span class="material-symbols-outlined charasteristics__icon" data-icon="eco">eco</span>
                            <span class="charasteristics__text">Material Eco</span>
                        </div>
                        <div class="charasteristics__item">
                            <span class="material-symbols-outlined charasteristics__icon" data-icon="local_shipping">local_shipping</span>
                            <span class="charasteristics__text">Envió 24/48h</span>
                        </div>
                        <div class="charasteristics__item">
                            <span class="material-symbols-outlined charasteristics__icon" data-icon="verified">verified</span>
                            <span class="charasteristics__text">Garantía Duck</span>
                        </div>
                    </div>

                    
                    // ANADIR UN BOTON "ANADIR A CARRITO" POR AQUI

                </div>
`



