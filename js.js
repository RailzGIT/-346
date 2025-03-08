document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт 'Абстрактні Ілюзії' готовий до взаємодії!");

    // Анімація при наведенні на зображення
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.addEventListener("mouseenter", () => img.style.transform = "scale(1.1)");
        img.addEventListener("mouseleave", () => img.style.transform = "scale(1)");
    });

    // Обробка форми зворотного зв’язку
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        formMessage.textContent = "Дякуємо за повідомлення! Ми скоро з вами зв’яжемося.";
        form.reset();
    });
});
