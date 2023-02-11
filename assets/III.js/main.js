// #Dark Mode:

// -Constantes:

const HTML = document.querySelector("html");
const MODE_DARK = document.querySelector(".js-dark-mode");


// -Eventos:

MODE_DARK.addEventListener("click", () => {
    changeMode();
    saveMode();
});


// -Funções:

// Adicionar ou remove a classe "dark" do ":root" para ativar ou desativar o modo dark
function changeMode() {
    HTML.classList.toggle("dark");
};


// Salvar ou remover dark-mode do localStorage
function saveMode() {
    if ($("html").hasClass("dark")) {
        localStorage.setItem("dark-mode", "on");
    } else {
        localStorage.removeItem("dark-mode")
    };
};


// Carregar dark mode
function loadMode() {
    const DARK_MODE = localStorage.getItem("dark-mode");

    if (DARK_MODE) {
        changeMode();
    }
};

loadMode();


// #

