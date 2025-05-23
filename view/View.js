export class View {
    constructor() {
        this.textBox = document.getElementById("exercise-box");
        this.timer = document.getElementById("timer-text");
        this.announcement = document.getElementById("announcement-text");
    }
    hideInputs() {
        document.getElementById("inputs").style.visibility = "hidden";
    }
    updateTimer(time) {
        this.timer.textContent = time;
    }
    endWorkout() {
        this.timer.textContent = "";
        this.announcement.textContent = "Finished!";
    }
    setAnnouncement(announcement) {
        this.announcement.textContent = announcement;
    }
    clearTextBox() {
        this.textBox.value = "";
    }
    resetExerciseListColor() {
        document.querySelectorAll("li").forEach(element => {
            element.style.backgroundColor = "rgb(182, 182, 182)";
        });
    }
}