export function isLate(dueDate: Date): boolean {
    return new Date() > dueDate;
}