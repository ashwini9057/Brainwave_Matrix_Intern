// Function to show sections dynamically
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => {
        section.style.display = "none";
    });
    document.getElementById(sectionId).style.display = "block";
}

// Handle login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username && password) {
        alert("Login Successful!");
        showSection('home'); // Redirect to home after login
    } else {
        alert("Please enter username and password.");
    }
});

// Function to show categories when "Shop Now" is clicked
function showCategories() {
    showSection('categories');
}

// Function to show products based on selected category
function showCategory(category) {
    showSection('products');
    
    let productsHTML = "";
    if (category === "male") {
        productsHTML = `
            <h3>👕 Men's Fashion</h3>
            <div class="product-container">
                <div class="product" onclick="viewProduct(1, 'T-Shirt', 'images/tshirt.jpg', 20)">
                    <img src="images/tshirt.jpg" alt="T-Shirt">
                    <h3>T-Shirt</h3>
                    <p>$20</p>
                </div>
                <div class="product" onclick="viewProduct(2, 'Jeans', 'images/jeans.jpg', 40)">
                    <img src="images/jeans.jpg" alt="Jeans">
                    <h3>Jeans</h3>
                    <p>$40</p>
                </div>
                <div class="product" onclick="viewProduct(3, 'Leather Jacket', 'images/leather_jacket.jpg', 80)">
                    <img src="images/leather_jacket.jpg" alt="Leather Jacket">
                    <h3>Leather Jacket</h3>
                    <p>$80</p>
                </div>
                <div class="product" onclick="viewProduct(4, 'Sneakers', 'images/sneakers.jpg', 50)">
                    <img src="images/sneakers.jpg" alt="Sneakers">
                    <h3>Sneakers</h3>
                    <p>$50</p>
                </div>
                <div class="product" onclick="viewProduct(5, 'Formal Shirt', 'images/formal_shirt.jpg', 35)">
                    <img src="images/formal_shirt.jpg" alt="Formal Shirt">
                    <h3>Formal Shirt</h3>
                    <p>$35</p>
                </div>
                <div class="product" onclick="viewProduct(6, 'Hoodie', 'images/hoodie.jpg', 45)">
                    <img src="images/hoodie.jpg" alt="Hoodie">
                    <h3>Hoodie</h3>
                    <p>$45</p>
                </div>
                <div class="product" onclick="viewProduct(7, 'Sports Shoes', 'images/sports_shoes.jpg', 60)">
                    <img src="images/sports_shoes.jpg" alt="Sports Shoes">
                    <h3>Sports Shoes</h3>
                    <p>$60</p>
                </div>
                <div class="product" onclick="viewProduct(8, 'Sunglasses', 'images/sunglasses.jpg', 25)">
                    <img src="images/sunglasses.jpg" alt="Sunglasses">
                    <h3>Sunglasses</h3>
                    <p>$25</p>
                </div>
            </div>
        `;
    } else if (category === "female") {
        productsHTML = `
            <h3>👗 Women's Fashion</h3>
            <div class="product-container">
                <div class="product" onclick="viewProduct(9, 'Dress', 'images/dress.jpg', 50)">
                    <img src="images/dress.jpg" alt="Dress">
                    <h3>Dress</h3>
                    <p>$50</p>
                </div>
                <div class="product" onclick="viewProduct(10, 'Skirt', 'images/skirt.jpg', 30)">
                    <img src="images/skirt.jpg" alt="Skirt">
                    <h3>Skirt</h3>
                    <p>$30</p>
                </div>
                <div class="product" onclick="viewProduct(11, 'High Heels', 'images/high_heels.jpg', 60)">
                    <img src="images/high_heels.jpg" alt="High Heels">
                    <h3>High Heels</h3>
                    <p>$60</p>
                </div>
                <div class="product" onclick="viewProduct(12, 'Handbag', 'images/handbag.jpg', 70)">
                    <img src="images/handbag.jpg" alt="Handbag">
                    <h3>Handbag</h3>
                    <p>$70</p>
                </div>
                <div class="product" onclick="viewProduct(13, 'Jumpsuit', 'images/jumpsuit.jpg', 55)">
                    <img src="images/jumpsuit.jpg" alt="Jumpsuit">
                    <h3>Jumpsuit</h3>
                    <p>$55</p>
                </div>
                <div class="product" onclick="viewProduct(14, 'Earrings', 'images/earrings.jpg', 20)">
                    <img src="images/earrings.jpg" alt="Earrings">
                    <h3>Earrings</h3>
                    <p>$20</p>
                </div>
                <div class="product" onclick="viewProduct(15, 'Scarf', 'images/scarf.jpg', 25)">
                    <img src="images/scarf.jpg" alt="Scarf">
                    <h3>Scarf</h3>
                    <p>$25</p>
                </div>
                <div class="product" onclick="viewProduct(16, 'Perfume', 'images/perfume.jpg', 40)">
                    <img src="images/perfume.jpg" alt="Perfume">
                    <h3>Perfume</h3>
                    <p>$40</p>
                </div>
            </div>
        `;
    }
    
    document.getElementById("products").innerHTML = productsHTML;
}

// Function to view product details
function viewProduct(id, name, img, price) {
    showSection('product-details');
    document.getElementById('product-img').src = img;
    document.getElementById('product-name').textContent = name;
    document.getElementById('product-price').textContent = `$${price}`;

    // Store product data for cart
    document.getElementById('product-img').dataset.id = id;
    document.getElementById('product-img').dataset.price = price;
    document.getElementById('product-img').dataset.name = name;
}

// Cart functionality
let cart = [];

function addToCart() {
    let id = document.getElementById('product-img').dataset.id;
    let name = document.getElementById('product-img').dataset.name;
    let price = parseFloat(document.getElementById('product-img').dataset.price);

    cart.push({ id, name, price });
    updateCart();
}

function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;

    let total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('cart-total').textContent = `Total: $${total}`;

    let cartItemsHTML = "";
    cart.forEach((item, index) => {
        cartItemsHTML += `<li>${item.name} - $${item.price} <button onclick="removeFromCart(${index})">❌</button></li>`;
    });
    document.getElementById('cart-items').innerHTML = cartItemsHTML;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}
