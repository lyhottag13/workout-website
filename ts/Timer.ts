export class Timer {
    private time: number;
    private timer: HTMLDivElement;
    constructor() {
        this.time = 30;
        this.timer = document.getElementById("timer") as HTMLDivElement;
    }
    startTimer() {
        setInterval(() => {
            this.timer.textContent = `${this.time--}`;
        }, 1000);
    }
}