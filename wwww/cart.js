const home = document.querySelector(".main-page");
const shop = document.querySelector(".shop-page")

home.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "/index.html";
    history.pushState(null, null, window.location.href);
})

shop.addEventListener("click", function(event){
    event.preventDefault();
    window.location.href = "./shop.html"
})


function displayCart() {
    const cartItemsDiv = document.getElementById('cartItems');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsDiv.innerHTML = "";  

    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>your cart is empty</p>';
    } else {
        cart.forEach((item, index) => {
            const productDiv = document.createElement('div');
            productDiv.innerHTML = `
                <h3>${item.name}</h3>
                <p>price: £${item.price}</p>
                <button id="buy">Buy</button>
            `;
            cartItemsDiv.appendChild(productDiv);

          
        });
    }
}
displayCart();

// Получаем все элементы с классом 'buy'
document.querySelectorAll("#buy").forEach(function(buyButton) {
    // Добавляем обработчик события для каждого элемента
    buyButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "./card.html";
    });
});
