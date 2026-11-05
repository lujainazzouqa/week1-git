type GradeResult = {
    percentage: number;
    letter: string;
};

export function calculateGrade(scores: number[]): GradeResult  {
    const total = scores.reduce((sum, score) => sum + score, 0);
    const percentage = total / scores.length;

    let letter: string;

    if (percentage >= 90) {
        letter = "A";
    } else if (percentage >= 80) {
        letter = "B";
    } else if (percentage >= 70) {
        letter = "C";
    } else if (percentage >= 60) {
        letter = "D";
    } else {
        letter = "F";
    }

    return { percentage, letter };
}

