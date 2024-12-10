const counterInput = document.querySelector(".input");
const doniBot = document.querySelector("#doni");
const btnMinus = document.querySelector(".minus");
const btnplyus = document.querySelector(".plyus");

let counter = 0; // Global hisoblagich
let counterText; // Hisoblagich qiymatini ko'rsatish uchun

doniBot.addEventListener("submit", (event) => {
    event.preventDefault();

    if (counterInput.value) {
        // Agar hisobot allaqachon mavjud bo'lsa, o'chiradi
        if (counterText) counterText.remove();

        // Hisoblagichni kiritilgan qiymatga o'rnatadi
        counter = Number(counterInput.value);

        // Yangi hisoblagich elementini yaratish
        counterText = document.createElement("h1");
        counterText.textContent = counter;
        document.body.appendChild(counterText);

        counterText.className = "doni";
        counterInput.value = "";
    } else {
        alert("Please enter a number");
    }
});

// Hisoblagichni kamaytirish tugmasi
btnMinus.addEventListener("click", () => {
    if (counterText) {
        counter--;
        counterText.textContent = counter;
    } else {
        alert("Please enter a number first!");
    }
});

// Hisoblagichni oshirish tugmasi
btnplyus.addEventListener("click", () => {
    if (counterText) {
        counter++;
        counterText.textContent = counter;
    } else {
        alert("Please enter a number first!");
    }
});



