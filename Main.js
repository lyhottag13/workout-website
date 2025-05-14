import { Controller } from "./controllers/Controller.js";
const controller = new Controller();
controller.initialize();
window.onload = () => {
    reset();
};
function reset() {
    const inputs = document.querySelectorAll("input");
    inputs[0].value = "";
    inputs[1].value = 30;
}

