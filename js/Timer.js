export class Timer {
    constructor() {
        this.time = 30;
        this.timer = document.getElementById("timer");
    }
    startTimer() {
        setInterval(() => {
            this.timer.textContent = `${this.time--}`;
        }, 1000);
    }
}
