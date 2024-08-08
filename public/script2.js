// Toggle list visibility
function toggleIngredients(listId) {
    const ingredientsList = document.getElementById(listId);
    ingredientsList.style.display = (ingredientsList.style.display === 'none' || ingredientsList.style.display === '') ? 'block' : 'none';
}

// Navigate to home page
function goHome() {
    console.log('goHome function triggered'); 
    window.location.href = 'index.html'; 
}

// Add item to cart
function addToCart(dishName, imgSrc) {
    const cart = document.querySelector('.cd-cart');
    const cartList = document.getElementById('cart-items');
    
    // Check if item is already in the cart
    const existingItem = Array.from(cartList.children).find(item => 
        item.querySelector('.cd-cart__details h3').textContent === dishName
    );
    
    if (existingItem) {
        alert('This item is already in the cart.');
        return;
    }

    if (cart.classList.contains('cd-cart--empty')) {
        cart.classList.remove('cd-cart--empty');
    }
    
    const cartItem = `
        <li class="cd-cart__product">
            <img src="${imgSrc}" alt="${dishName}" class="cart-item-img">
            <div class="cd-cart__details">
                <h3 class="truncate">${dishName}</h3>
                <div class="cd-cart__actions">
                    <a href="#0" class="cd-cart__delete-item" onclick="removeFromCart(this)">Delete</a>
                </div>
            </div>
        </li>
    `;
    cartList.insertAdjacentHTML('beforeend', cartItem);
    
    updateCartCount();
}

// Update cart item count
function updateCartCount() {
    const cartCount = document.querySelector('.cd-cart__count li');
    if (cartCount) {
        const cartItems = document.getElementById('cart-items').children.length;
        cartCount.textContent = cartItems;
    }
}

// Toggle cart visibility
function toggleCart() {
    const cart = document.querySelector('.cd-cart');
    cart.classList.toggle('cd-cart--open');
}

// Remove item from cart
function removeFromCart(link) {
    const cartItem = link.closest('.cd-cart__product');
    cartItem.remove();
    updateCartCount();
}

// Toggle sidebar visibility
function toggleSidebar() {
    const recipeSidebar = document.getElementById('recipe-sidebar');
    recipeSidebar.classList.toggle('open');
}

// Close sidebar
function closeSidebar() {
    const recipeSidebar = document.getElementById('recipe-sidebar');
    recipeSidebar.classList.remove('open');
}

// Set up event listeners
document.addEventListener('DOMContentLoaded', function() {
    const cartTrigger = document.getElementById('cart-trigger');
    const closeCart = document.querySelector('.cd-cart__close-btn');
    const sidebarCloseBtn = document.querySelector('.recipe-sidebar .close-btn');

    cartTrigger.addEventListener('click', toggleCart);
    closeCart.addEventListener('click', function () {
        document.querySelector('.cd-cart').classList.remove('cd-cart--open');
    });

    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', closeSidebar);
    }
});
