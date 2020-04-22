const {sumMultiples,isValidDNA,getComplementaryDNA,isItPrime} = require("../challenges/week9");

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
        const result = isValidDNA("BCET");
        const expected = false;
        expect(result).toBe(expected);
    });
    test("it returns true if string contains C, G, T or A only", () => {
        const result = isValidDNA("CCGGTTAAATCATGC");
        const expected = true;
        expect(result).toBe(expected);
    });

});

describe("getComplementaryDNA", () => {
    test("it returns GACT when passed CTGA", () => {
        const result = getComplementaryDNA("CTGA");
        const expected = "GACT";
        expect(result).toEqual(expected)
    });
    test("it returns AGTC when passed TCAG", () => {
        const result = getComplementaryDNA("TCAG");
        const expected = "AGTC";
        expect(result).toEqual(expected)
    });
});

describe("isItPrime", () => {
    test("it return  true if the number is prime", () => {
        const result = isItPrime([7]);
        const expected = true;
        expect(result).toBe(expected);
    });
    test("it return  true if the number is prime", () => {
        const result = isItPrime([83]);
        const expected = true;
        expect(result).toBe(expected);
    });

    test("it return false if the number is not prime", () => {
        const result = isItPrime([24]);
        const expected = false;
        expect(result).toBe(expected);
    });

    test("it return false if the number is not prime", () => {
        const result = isItPrime([100]);
        const expected = false;
        expect(result).toBe(expected);
    });

});