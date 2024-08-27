// carta.js

// Función para aumentar la cantidad
function increaseQuantity(button) {
    const input = button.previousElementSibling;
    input.value = parseInt(input.value) + 1;
}

// Función para disminuir la cantidad
function decreaseQuantity(button) {
    const input = button.nextElementSibling;
    if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
    }
}

// Función para agregar al carrito
function addToCart(productName, price) {
    const promoItem = event.target.parentElement;
    const quantityInput = promoItem.querySelector('.quantity-input');
    const quantity = parseInt(quantityInput.value);

    // Obtener el carrito actual del localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Verificar si el producto ya existe en el carrito
    const existingProductIndex = cart.findIndex(item => item.nombre === productName);

    if (existingProductIndex >= 0) {
        // Si el producto ya existe, incrementar la cantidad
        cart[existingProductIndex].cantidad += quantity;
    } else {
        // Si no existe, agregar el nuevo producto
        cart.push({
            nombre: productName,
            precio: price,
            cantidad: quantity
        });
    }
    
    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Mostrar mensaje de confirmación flotante
    showConfirmationMessage();
}

// Función para mostrar mensaje de confirmación flotante
function showConfirmationMessage() {
    const messageElement = document.getElementById('confirmation-message');
    messageElement.style.display = 'block'; // Mostrar el mensaje
    setTimeout(() => {
        messageElement.style.display = 'none'; // Ocultar el mensaje después de 2 segundos
    }, 2000);
}
