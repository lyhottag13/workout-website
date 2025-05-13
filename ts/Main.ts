import { Timer } from "./Timer.js";

const timer = new Timer();
console.log("cool");
document.addEventListener("click", () => {
    timer.startTimer();
}, { once: true });