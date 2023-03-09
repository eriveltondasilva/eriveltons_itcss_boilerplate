// #DARK MODE

// *Variáveis:
const HTML = document.documentElement;
const MODE_DARK = document.querySelector(".js-dark-mode");

// *Eventos:
MODE_DARK.addEventListener("click", () => {
  changeMode();
  saveMode();
});

// *Funções:
// Adicionar ou remove a classe "dark" do ":root" para ativar ou desativar o modo dark
function changeMode() {
  HTML.classList.toggle("dark");
}

// Salvar ou remover dark-mode do localStorage
function saveMode() {
  let mode_dark = HTML.classList.contains("dark");

  if (mode_dark) {
    localStorage.setItem("dark-mode", "on");
    return;
  }
  localStorage.removeItem("dark-mode");
}

// Carregar dark mode(função autodeclarada!)
(function loadMode() {
  const DARK_MODE = localStorage.getItem("dark-mode");

  if (DARK_MODE) {
    changeMode();
  }
})();

