export class Timer {
    constructor() {
        this.maxTime = 10;
        this.time = this.maxTime;
        this.timer = document.getElementById("timer-text");
    }
}
export class WorkoutList {
    constructor() {
        this.div = document.getElementById("exercise-text");
        this.exerciseList = [];
    }
    clearList() {
        this.div.innerHTML = "";
    };
    removeExercise(index = this.exerciseList.length - 1) {
        this.exerciseList.splice(index, 1);
    };
    addExercise({ index = this.exerciseList.length, exercise }) {
        this.exerciseList.splice(index, 0, exercise);
    };
    showList() {
        this.clearList();
        this.exerciseList.forEach((exercise) => {
            const newItem = document.createElement("li");
            newItem.textContent = exercise;
            this.div.appendChild(newItem);
        });
    };
}