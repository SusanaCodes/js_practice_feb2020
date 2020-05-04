const {sumDigits,createRange,getScreentimeAlertList,hexToRGB,findWinner} = require ("../challenges/week10");

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

describe("getScreentimeAlertList", () => {
    test(" it returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        const user = [

            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                    { date: "2019-06-01", usage: { twitter: 100, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                    { date: "2019-06-01", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 101 } },
                ]
            },
            {
                username: "Rosita_2000",
                name: "Rosa Perez",
                screenTime: [
                    { date: "2019-06-06", usage: { Pinterest: 40, whatsApp: 20, facebook: 0 } },
                    { date: "2019-06-08", usage: { Pinterest: 20, whatsApp: 13, facebook: 0 } },
                    { date: "2019-06-12", usage: { Pinterest: 0, whatsApp: 34, facebook: 0 } },
                    { date: "2019-06-20", usage: { Pinterest: 234, whatsApp: 4, facebook: 0 } },
                ]
            },
        ]

        expect(getScreentimeAlertList(user, '2019-05-04')).toEqual(["beth_1234"]);
        expect(getScreentimeAlertList(user, '2019-06-01')).toEqual(["beth_1234", "sam_j_1989"]);
        expect(getScreentimeAlertList(user, '2019-06-13')).toEqual([]);
        expect(getScreentimeAlertList(user, '2019-06-10')).toEqual([]);
        expect(getScreentimeAlertList(user, '2019-06-20')).toEqual(["Rosita_2000"]);

    });
});
   
describe ("hexToRGB", () => {
    test("This function will receive a hexadecimal color code in the format #FF1133 and transform it into an RGB code", () => {
        expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
        expect(hexToRGB("#0033ff")).toEqual("rgb(0,51,255)");
        expect(hexToRGB("#FFFFFF")).toEqual("rgb(255,255,255)");
        expect(hexToRGB("#00FF00")).toEqual("rgb(0,255,0)");
        expect(hexToRGB("#C0C0C0")).toEqual("rgb(192,192,192)");
        expect(hexToRGB("#000080")).toEqual("rgb(0,0,128)");
        expect(hexToRGB("#03f")).toEqual("rgb(0,51,255)");
    });
});

describe("findWinner", () => {
    test("It returns 'X' if player X has won", () => {
        expect(findWinner([["X", "0", null], ["X", null, "0"],["X", null, "0"]])).toBe("X");
    });
    test("It returns '0' if player 0 has won", () => {
        expect(findWinner([["0", "0", null],["0", null, "0"],["0", null, "0"]])).toBe("0")
    });
    test("It returns null if player 0 has won", () => {
        expect(findWinner([["X", "0", null],["0", null, "0"],["0", null, "0"]])).toBe(null)
    });
});