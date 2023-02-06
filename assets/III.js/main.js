// #Dark Mode:

// function(): mudar para dark-mode
function changeMode() {
    $("body").toggleClass("dark-mode");
};

// function(): salvar ou remover dark-mode
function saveMode() {
    if ($("body").hasClass("dark-mode")) {
        localStorage.setItem("dark-mode", 1);
    } else {
        localStorage.removeItem("dark-mode");
    };
};

// function(): Carregar dark mode
function loadMode() {
    const darkMode = localStorage.getItem("dark-mode");

    if (darkMode) {
        changeMode();
    };
};


// #
$("#change-mode").click(() => {
    changeMode();
    saveMode();
});

loadMode();