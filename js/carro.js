// carro.js

document.addEventListener("DOMContentLoaded", () => {
    displayCartItems();

    // Agregar event listener al botón para vaciar el carrito
    document.getElementById('clear-cart-button').addEventListener('click', clearCart);
});

// Función para mostrar los elementos del carrito
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
        return;
    }

    cartItemsContainer.innerHTML = ''; // Limpiar contenido previo

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <div class="cart-item-name">${item.nombre}</div>
            <div class="cart-item-quantity">Cantidad: ${item.cantidad}</div>
            <div class="cart-item-price">Precio: $${item.precio * item.cantidad}</div>
            <button class="delete-item-btn" onclick="removeCartItem(${index})">Eliminar</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

// Función para eliminar un producto del carrito
function removeCartItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length > index) {
        cart.splice(index, 1); // Eliminar el producto del array
        localStorage.setItem('cart', JSON.stringify(cart)); // Actualizar el carrito en localStorage
        displayCartItems(); // Refrescar la vista
    }
}

// Función para vaciar todo el carrito
function clearCart() {
    localStorage.removeItem('cart'); // Eliminar el carrito del localStorage
    displayCartItems(); // Refrescar la vista
}
