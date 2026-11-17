const products = [
    {
        name: "Palace White T-Shirt",
        price: 900,
        category: "Футболки",
        size: ["M"],
        image: "images/product6.jpg"
    },
    {
        name: "Palace Black T-Shirt",
        price: 900,
        category: "Футболки",
        size: ["L"],
        image: "images/product1.jpg"
    },
    {
        name: "Sleeveless Top",
        price: 1200,
        category: "Майки",
        size: ["S"],
        image: "images/product2.jpg"
    },
    {
        name: "Maison Margiela Paris Black Hoodie",
        price: 1700,
        category: "Худи",
        size: ["M", "L"],
        image: "images/product3.jpg"
    },
    {
        name: "Black Wide Leg Jeans",
        price: 1200,
        category: "Джинсы",
        size: ["M"],
        image: "images/product4.jpg"
    },
    {
        name: "Bape Black T-Shirt",
        price: 900,
        category: "Футболки",
        size: ["M"],
        image: "images/product5.jpg"
    },
// ===== ШАПКИ =====
    { name: "GRVTY VISIONS Beanie", price: 650, category: "Шапки", size: ["One Size"], image: "images/hat1.jpg" },
    { name: "Syna World Beanie", price: 650, category: "Шапки", size: ["One Size"], image: "images/hat4.jpg" },
    { name: "Hellstar Beanie Black", price: 650, category: "Шапки", size: ["One Size"], image: "images/hat3.jpg" },
    { name: "Hellstar Beanie White", price: 650, category: "Шапки", size: ["One Size"], image: "images/hat2.jpg" },
    { name: "Union Jack Knit Beanie Blue", price: 650, category: "Шапки", size: ["One Size"], image: "images/hat7.jpg" },
    { name: "Union Jack Knit Beanie Black", price: 650, category: "Шапки", size: ["One Size"], image: "images/hat6.jpg" },
    { name: "Cortez Beanie Grey", price: 650, category: "Шапки", size: ["One Size"], image: "images/hat5.jpg" },
    { name: "Syna World Beanie", price: 650, category: "Шапки", size: ["One Size"], image: "images/hat9.jpg" },
    { name: "Mea Culpa Beanie", price: 650, category: "Шапки", size: ["One Size"], image: "images/hat8.jpg" },

// ===== ОЧКИ =====
    { name: "Chrome Hearts Gold-Black", price: 900, category: "Очки", size: ["One Size"], image: "images/glasses1.jpg" },
    { name: "Chrome Hearts Grey-Black", price: 900, category: "Очки", size: ["One Size"], image: "images/glasses2.jpg" },

// ===== КАРДИГАНЫ BAPE =====
    { name: "BAPE Cardigan White", price: 1500, category: "Кардиганы", size: ["L"], image: "images/cardigan1.jpg" },
    { name: "BAPE Cardigan Black", price: 1500, category: "Кардиганы", size: ["XL"], image: "images/cardigan2.jpg" },

// ===== BROKEN PLANET =====
    { name: "Broken Planet Pants Black", price: 1700, category: "Штаны", size: ["M"], image: "images/pants2.jpg" },
    { name: "Broken Planet Pants Grey", price: 1700, category: "Штаны", size: ["S"], image: "images/pants1.jpg" },

// ===== ДЖИНСЫ FASHION =====
    { name: "Fashion Jeans Black", price: 1600, category: "Джинсы", size: ["L"], image: "images/pants3.jpg" },
    { name: "Fashion Jeans Grey", price: 1600, category: "Джинсы", size: ["L"], image: "images/pants5.jpg" },
    { name: "Fashion Jeans Blue", price: 1600, category: "Джинсы", size: ["M"], image: "images/pants4.jpg" },

// ===== ПУХОВИКИ =====
    { name: "SUVENE Puffer Black", price: 2800, category: "Куртки", size: ["L", "XL"], image: "images/jacket2.jpg" },
    { name: "SUVENE Puffer White", price: 2800, category: "Куртки", size: ["M"], image: "images/jacket1.jpg" },
    { name: "Polo Ralph Lauren Navy", price: 3100, category: "Куртки", size: ["M"], image: "images/jacket3.jpg" },
    { name: "C.P. Company Puffer White", price: 3250, category: "Куртки", size: ["L"], image: "images/jacket4.jpg" },
    { name: "C.P. Company Puffer Black", price: 3250, category: "Куртки", size: ["XL"], image: "images/jacket5.jpg" },

// ===== КОФТЫ C.P. COMPANY =====
    { name: "C.P. Company Sweatshirt White", price: 2100, category: "Кофты", size: ["L"], image: "images/hoodie1.jpg" },
    { name: "C.P. Company Sweatshirt Black", price: 2100, category: "Кофты", size: ["M"], image: "images/hoodie2.jpg" },

// ===== КОСТЮМЫ ESSENTIALS =====
    { name: "ESSENTIALS Suit Grey", price: 2500, category: "Костюмы", size: ["M", "XL"], image: "images/suit2.jpg" },
    { name: "ESSENTIALS Suit Black", price: 2500, category: "Костюмы", size: ["L"], image: "images/suit1.jpg" }
];
const container = document.getElementById("products");
let cart = [];
function showProducts() {
    container.innerHTML = "";
    products.forEach((product, index) => {
        container.innerHTML += `
        <div class="product">
           <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.category}</p>

            <label>Размер:</label>
            <select id="size-${index}">
${product.size.map(size => `<option value="${size}">${size}</option>`).join("")}
</select>

    <strong>${product.price.toLocaleString("ru-RU")} сом</strong>
    <button onclick="addToCart(${index})">В корзину</button>
</div>
    `;
    });
}
    function addToCart(index) {
        const selectedSize = document.getElementById(`size-${index}`).value;
        cart.push({
            ...products[index],
            selectedSize: selectedSize
        });

        alert("Товар добавлен в корзину!");
        updateCart();
    }
function updateCart() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    let cartBox = document.getElementById("cart");

    if (!cartBox) {
        cartBox = document.createElement("div");
        cartBox.id = "cart";
        document.body.appendChild(cartBox);
    }

    cartBox.innerHTML = `
    <h2>🛒 Моя корзина</h2>
    <p>Товаров: ${cart.length}</p>

    ${cart.map(item => `
       <p>${item.name} — размер: ${item.selectedSize} — ${item.price.toLocaleString("ru-RU")} сом</p>
    `).join("")}

    <h3>Итого: ${total.toLocaleString("ru-RU")} сом</h3>

    <button onclick="cart = []; updateCart();">
Очистить корзину
</button>

<button onclick="checkout()">
Оформить заказ
</button>
`;
}

function checkout() {
    if (cart.length === 0) {
        alert("Корзина пуста!");
        return;
    }
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    const message = `
Здравствуйте! Хочу оформить заказ:

${cart.map(item => item.name + " — размер: " + item.selectedSize + " — " + item.price + " сом").join("\n")}

Итого: ${total} сом
`;
    const phone = "996755055740";

    window.open(
        "https://wa.me/" + phone + "?text=" + encodeURIComponent(message),
        "_blank"
    );
}
document.getElementById("searchInput").addEventListener("input", function() {
    const search = this.value.toLowerCase();
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(search)
    );

    container.innerHTML = "";

    filtered.forEach((product) => {
        const productIndex = products.indexOf(product);
        container.innerHTML += `
    <div class="product">
       <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.category}</p>

        <label>Размер:</label>
        <select id="size-${productIndex}">
            ${product.size.map(size =>
            `<option value="${size}">${size}</option>`
        ).join("")}
        </select>

        <strong>${product.price.toLocaleString("ru-RU")} сом</strong>

        <button onclick="addToCart(${productIndex})">
            В корзину
        </button>
    </div>
`;
    });
});
showProducts();