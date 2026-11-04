"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLate(dueDate) {
    return new Date() > dueDate;
}
const deadline = new Date("2026-11-10");
console.log(isLate(deadline));
