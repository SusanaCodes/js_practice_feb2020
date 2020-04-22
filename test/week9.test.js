const {sumMultiples,isValidDNA} = require("../challenges/week9");

describe("sumMultiples", () => {
    test ("it throws an error if not passed an array", () =>{
        expect(()=>{
            sumMultiples();
        }).toThrow("arr is required");

        expect(()=>{
            sumMultiples("foo");
        }).toThrow("an Array is required");

        expect(()=>{
            sumMultiples(4);
        }).toThrow("an Array is required");
    });

    test("it return the sum of any numbers that are a multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });


    test("it works okay with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });

    test("return 0 if there are no multiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("it returns false if string contains other than C, G, T or A", () => {
        const result = isValidDNA("BCTV");
        const expected = false;
        expect(result).toBe(expected);
    });
    test("it returns true if string contains C, G, T or A only", () => {
        const result = isValidDNA("CGATCATGC");
        const expected = true;
        expect(result).toBe(expected);
    });
    test("it shouldn't be case sensitive", () => {
        const result = isValidDNA("cagGTGaagtc");
        const expected = true;
        expect(result).toBe(expected);
    });
});
