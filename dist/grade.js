"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateGrade(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);
    const percentage = total / scores.length;
    let letter;
    if (percentage >= 90) {
        letter = "A";
    }
    else if (percentage >= 80) {
        letter = "B";
    }
    else if (percentage >= 70) {
        letter = "C";
    }
    else if (percentage >= 60) {
        letter = "D";
    }
    else {
        letter = "F";
    }
    return { percentage, letter };
}
console.log(calculateGrade([90, 85, 95]));
