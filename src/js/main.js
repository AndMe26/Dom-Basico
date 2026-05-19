// --- TUS PRÁCTICAS AQUÍ ABAJO ---
console.log("DOM Playground listo para practicar 🚀")

// Contandor En pantalla
const counterDisplay = document.getElementById("counter-display")

//Botones
const btnincrement = document.getElementById("increment")
const btndecrement = document.getElementById("decrement")
const btnreset = document.getElementById("reset")

let counter = 0;

function updateDisplay() {

    counterDisplay.innerText = counter;

    if (counter < 0) {
        counterDisplay.style.color = 'red';
    } else {
        counterDisplay.style.color = '';
    }
}


btnincrement.addEventListener('click', () => {

    counter++;
    updateDisplay();

});

btndecrement.addEventListener('click', () => {

    counter--;
    updateDisplay();

});

btnreset.addEventListener('click', () => {

    counter = 0;
    updateDisplay();

});


//Gestion de lista 

const input = document.getElementById("item-input")
const button = document.getElementById("add-item")
const list = document.getElementById("dynamic-list")

button.addEventListener("click", () => {

    const text = input.value.trim();

    if (text === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";

    deleteBtn.addEventListener("click", () => {

        li.remove();
    });


    li.appendChild(span);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";

});

// Modo oscuro 

const buttonDark = document.getElementById("toggle-dark");

buttonDark.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");                                // classList es una lista de sus clases CSS
    const isDark = document.body.classList.contains("dark-mode");

    buttonDark.textContent = isDark ? "Modo Claro" : "Modo Oscuro";
});

// Inputs en vivo y atributos

const nameInput = document.getElementById("name-input");
const nameText = document.getElementById("user-name");
const avatarImage = document.getElementById("profile-img");

nameInput.addEventListener("input", () => {
    const currentName = nameInput.value.trim();

    if (currentName === "") {
        nameText.textContent = "Invitado";
    } else {
        nameText.textContent = currentName;
    }

    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentName || "Invitado")}`;   // encodeURIComponent — convierte texto para que sea válido en una URL
    avatarImage.setAttribute("src", avatarUrl) //setAttribute — cambia el valor de un atributo HTML
})