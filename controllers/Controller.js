import { Timer, WorkoutList } from "../model/Model.js"
import { View } from "../view/View.js"

export class Controller {
    constructor() {
        this.timer = new Timer();
        this.workoutList = new WorkoutList();
        this.view = new View();
        this.selectedExercise;
    }
    initialize() {
        document.getElementById("start").addEventListener("click", () => {
            this.startWorkout();
        });
        document.getElementById("add").addEventListener("click", () => {
            this.workoutList.addExercise({ index: this.selectedExercise, exercise: this.view.textBox.value });
            this.view.clearTextBox();
            this.workoutList.showList();
            this.selectedExercise = undefined;
        });
        document.getElementById("remove").addEventListener("click", () => {
            this.workoutList.removeExercise(this.selectedExercise);
            this.selectedExercise = undefined;
        });
        document.querySelector("ol").addEventListener("pointerdown", this.handleExerciseClick.bind(this));
    }
    handleExerciseClick(event) {
        this.view.resetExerciseListColor();
        const target = event.target;
        target.style.backgroundColor = "blue";
        this.selectedExercise = Array.from(document.querySelector("ol").children).indexOf(target);
    }
    startWorkout() {
        this.view.hideInputs();
        this.timer.setMaxTime(document.getElementById("time-box").value);
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