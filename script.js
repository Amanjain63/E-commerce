// Simple cart functionality
let cart = [];

// Function to add a product to the cart
function addToCart(product) {
    cart.push(product);
    alert(`${product.name} has been added to your cart!`);
    updateCartCount();
}

// Function to remove a product from the cart
function removeFromCart(product) {
    cart = cart.filter(item => item.name !== product.name);
    alert(`${product.name} has been removed from your cart!`);
    updateCartCount();
}

// Function to update the cart count in the UI
function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

// Function to display cart items on the cart page
function displayCartItems() {
    const cartContainer = document.getElementById("cart-items");
    if (cartContainer) {
        cartContainer.innerHTML = ""; // Clear existing items
        cart.forEach(item => {
            const itemDiv = document.createElement("div");
            itemDiv.className = "cart-item";
            itemDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price}</p>
                <button onclick='removeFromCart(${JSON.stringify(item)})'>Remove</button>
            `;
            cartContainer.appendChild(itemDiv);
        });
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        const totalDiv = document.createElement("div");
        totalDiv.innerHTML = `<h3>Total: $${total.toFixed(2)}</h3>`;
        cartContainer.appendChild(totalDiv);
    }
}

// Event listener for the checkout form
document.getElementById("checkout-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for your purchase!");
    // Here you would typically handle the checkout process
});

// Event listener for the contact form
document.getElementById("contact-form")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for your message! We will get back to you soon.");
        // Here you would typically handle the message sending process
        this.reset(); // Reset the form
    } else {
        alert("Please fill in all fields.");
    }
});

// Function to initialize the product detail page
function initProductDetail() {
    const product = {
        name: "Product 1",
        price: 19.99
    };
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `$${product.price}`;
    document.getElementById("add-to-cart").onclick = function() {
        addToCart(product);
    };
}

// Call this function on the product detail page
if (window.location.pathname.endsWith("product-detail.html")) {
    initProductDetail();
}

// Call this function on the cart page to display items
if (window.location.pathname.endsWith("cart.html")) {
    displayCartItems();
    updateCartCount();
}