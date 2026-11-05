import { describe, it, expect } from "vitest";
import { calculateGrade } from "./grade";

describe("calculateGrade", () => {

    it("should return A for scores 90 and above", () => {
        expect(calculateGrade([90, 95, 100])).toEqual({
            percentage: 95,
            letter: "A"
        });
    });

    it("should return B for scores between 80 and 89", () => {
        expect(calculateGrade([80, 85, 85])).toEqual({
            percentage: 250 / 3,
            letter: "B"
        });
    });

    it("should return C for scores between 70 and 79", () => {
        expect(calculateGrade([70, 75, 75]).letter).toBe("C");
    });

    it("should return D for scores between 60 and 69", () => {
        expect(calculateGrade([60, 65, 65]).letter).toBe("D");
    });

    it("should return F for scores below 60", () => {
        expect(calculateGrade([40, 50, 55]).letter).toBe("F");
    });
});