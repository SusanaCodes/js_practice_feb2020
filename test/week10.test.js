const {sumDigits,createRange} = require ("../challenges/week10");

describe("sumDigits", () => {
    test("it returns the sum of all its digits", () => {
        expect(sumDigits(4)).toBe(4);
        expect(sumDigits(341)).toBe(8);
        expect(sumDigits(3257890)).toBe(34);
        expect(sumDigits(0)).toBe(0);
        expect(sumDigits(99)).toBe(18);
    });
});


describe("createRange", () => {
    test("creates a range of numbers as an array. It received a start, an end and a step. Step is the gap between numbers in the range. Numbers are inclusive", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
        expect(createRange(5, 35, 5)).toEqual([5, 10, 15, 20, 25, 30, 35]);
        expect(createRange(0, 8, 2)).toEqual([0, 2, 4, 6, 8]);
        expect(createRange(30, 50, 10)).toEqual([30, 40, 50]);
        expect(createRange(14, 15, 1)).toEqual([14,15]);

    }); test("If step is not provided, assume the step is 1", () => {
        expect(createRange(3, 11)).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11]);
        expect(createRange(38, 42)).toEqual([38, 39, 40, 41, 42]);
    });

});
