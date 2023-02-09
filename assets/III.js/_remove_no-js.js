// #Remove_no-js

// 1. Constante para guardar a referência do html
// 2. Remove a classe ".no-js" do :root
const NO_JS = document.querySelector("html"); /* [1] */
NO_JS.classList.remove("no-js"); /* [2] */

