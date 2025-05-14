export class Timer {
    constructor() {
        this.maxTime = 10;
        this.time = this.maxTime;
        this.timer = document.getElementById("timer-text");
    }
    setMaxTime(maxTime) {
        this.maxTime = maxTime;
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
        if (this.exerciseList.length === 0) {
            return;
        }
        this.exerciseList.splice(index, 1);
        document.querySelectorAll("li")[index].remove();
    };
    addExercise({ index = this.exerciseList.length, exercise }) {
        if (exercise.length === 0) {
            alert("Enter a valid name!");
            return;
        }
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