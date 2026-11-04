function isLate(dueDate: Date): boolean {
    return new Date() > dueDate;
}

const deadline = new Date("2026-11-10");

console.log(isLate(deadline));