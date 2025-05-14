import { Timer, WorkoutList } from "../model/Model.js"
import { View } from "../view/View.js"

export class Controller {
    constructor() {
        this.timer = new Timer();
        this.workoutList = new WorkoutList();
        this.view = new View();
    }
    initialize() {
        document.getElementById("start").addEventListener("click", () => {
            this.startWorkout();
        });
        document.getElementById("add").addEventListener("click", () => {
            this.workoutList.addExercise({ exercise: this.view.textBox.value });
            this.view.clearTextBox();
            this.workoutList.showList();
        });
        document.getElementById("remove").addEventListener("click", () => {
            this.workoutList.removeExercise();
            this.workoutList.showList();
        });
    }
    startWorkout() {
        this.view.hideInputs();
        this.runTimer(0);
    }
    runTimer(currentExercise) {
        if (currentExercise === this.workoutList.exerciseList.length) {
            this.endWorkout();
            return;
        }
        this.timer.time = this.timer.maxTime;
        this.view.setAnnouncement(this.workoutList.exerciseList[currentExercise]);
        this.view.updateTimer(this.timer.time--);
        const interval = setInterval(() => {
            this.view.updateTimer(this.timer.time--);
            if (this.timer.time === -1) {
                clearInterval(interval);
                this.runTimer(++currentExercise);
            }
        }, 1000);
    }
    endWorkout() {
        this.view.endWorkout();
    }
} 