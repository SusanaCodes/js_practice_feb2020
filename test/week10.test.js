const {sumDigits} = require ("../challenges/week10");

describe("sumDigits", () => {
    // test("it throws an error if not passed a number", () => {
    //     expect(() => {
    //         sumDigits();
    //     }).toThrow("number is required");

    //     expect(() => {
    //         sumDigits("foo");
    //     }).toThrow("number is required");

    // });

    test("it returns the sum of all its digits", () => {
        expect(sumDigits(4)).toBe(4);
        expect(sumDigits(341)).toBe(8);
        expect(sumDigits(3257890)).toBe(34);
        expect(sumDigits(0)).toBe(0);
        expect(sumDigits(99)).toBe(18);
    });
});

