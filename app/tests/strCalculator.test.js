import { StringCalculator } from "../js/strCalculator";

var strCalc;

beforeAll(() => {
    strCalc = new StringCalculator();
})
describe('String Calculator', () => {

    test('for empty string returns 0', () => {
        expect(strCalc.add("")).toBe(0);
    }) 

    test('for 1 returns 1', () => {
        expect(strCalc.add("1")).toBe(1);
    })

    test('"1,2" == 3', () => {
        expect(strCalc.add("1,2")).toBe(3);
    })

    test('"1,2,10,20" == 33', () => {
        expect(strCalc.add("1,2,10,20")).toBe(33);
    })

    test('Negatives not allowed -1,-20', () => {
        expect(() => strCalc.add("-1,2,-20,2,0")).toThrow(/Negatives not allowed. -1,-20/);
    })

    test('Negatives not allowed -20', () => {
        expect(() => strCalc.add("1,2,-20,2,0")).toThrow(/Negatives not allowed. -20/);
    })

    test('Negatives not allowed -1,-40,-2', () => {
        expect(() => strCalc.add("-1,2,-40,-2,0")).toThrow(/Negatives not allowed. -1,-40,-2/);
    })

    test('"1/n,20" == 21', () => {
        expect(strCalc.add("1/n,20")).toBe(21);
    })

    test('"1\n2,1002" == 3 ', () => {
        expect(strCalc.add("1\n2,1002")).toBe(3);
    })

    test('"1\n2,1000" == 1003', () => {
        expect(strCalc.add("1\n2,1000")).toBe(1003);
    })

    test('"//[***]\n1***2***3" == 6', () => {
        expect(strCalc.add("//[***]\n1***2***3")).toBe(6);
    })

    test('"//[*][%]\n1*2%3" == 6', () => {
        expect(strCalc.add("//[*][%]\n1*2%3")).toBe(6);
    })

    test('"//[**][%%]\n1**2%%3" == 6', () => {
        expect(strCalc.add("//[**][%%]\n1**2%%3")).toBe(6);
    })

    test('"1/n2,3" == 6', () => {
        expect(strCalc.add("1/n2,3")).toBe(6);
    })

})

