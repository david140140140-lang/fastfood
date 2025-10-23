// Додайте ваш JavaScript код тут
document.getElementById('order-btn').addEventListener('click', function() {
    alert('Дякуємо за замовлення! Наш менеджер зв’яжеться з вами 💛');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Ваше повідомлення надіслано!');
    this.reset();
});

let cartCount = 0;
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;
    });
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
