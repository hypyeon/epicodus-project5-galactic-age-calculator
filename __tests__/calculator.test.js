import AgeCalculator from "../src/js/calculator";

describe('AgeCalculator', () => {
    test('should correctly calculate current age to ages in 4 planets in 2 fixed decimals', () => {
        const ageToConvert = new AgeCalculator(40);
        expect(ageToConvert.calculate('Mercury')).toEqual(166.66);
        expect(ageToConvert.calculate('Venus')).toEqual(64.51);
        expect(ageToConvert.calculate('Mars')).toEqual(21.27);
        expect(ageToConvert.calculate('Jupiter')).toEqual(3.37);
    });
})