import AgeCalculator from "../src/js/calculator";

describe('AgeCalculator', () => {
    test('should correctly calculate current age to ages in 4 planets in 2 fixed decimals', () => {
        const ageToConvert = new AgeCalculator(40);
        expect(ageToConvert.calculate('Mercury')).toEqual(166.66);
        expect(ageToConvert.calculate('Venus')).toEqual(64.51);
        expect(ageToConvert.calculate('Mars')).toEqual(21.27);
        expect(ageToConvert.calculate('Jupiter')).toEqual(3.37);
    });
    test('should create a map with keys as names of 4 planets and values as years of ages convered from earth age in 2 decimal points', () => {
        const newAge = new AgeCalculator(30, 10, 50);
        expect(newAge.ageMapBuilder(20)).toEqual(
            {
                Mercury: 83.33,
                Venus: 32.25,
                Mars: 10.63,
                Jupiter: 1.68
            }
        )
    })
    test('should create a map with keys as names of 4 planets and values as years of ages convered from earth current age and past age difference', () => {
        const earthAge = new AgeCalculator(30, 10, 50);
        expect(earthAge.yearsSincePast()).toEqual(
            {
                Mercury: 83.33,
                Venus: 32.25,
                Mars: 10.63,
                Jupiter: 1.68
            }
        )
    });
    test('should create a map with keys as names of 4 planets and values as years of ages convered from earth current age and future age difference', () => {
        const earthAge = new AgeCalculator(30, 10, 50);
        expect(earthAge.yearsUntilFuture()).toEqual(
            {
                Mercury: 83.33,
                Venus: 32.25,
                Mars: 10.63,
                Jupiter: 1.68
            }
        )
    });
})