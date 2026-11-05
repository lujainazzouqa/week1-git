import { describe, it, expect } from "vitest";
import { isLate } from "./dueDate";

describe("isLate", () => {

    it("should return true for a past due date", () => {
        const date = new Date("2020-01-01");
        expect(isLate(date)).toBe(true);
    });

    it("should return false for a future due date", () => {
        const date = new Date("2030-01-01");
        expect(isLate(date)).toBe(false);
    });

    it("should return true for a date one day ago", () => {
        const date = new Date(Date.now() - 24 * 60 * 60 * 1000);
        expect(isLate(date)).toBe(true);
    });
});