import AgeCalculator from "../src/js/calculator";

describe('AgeCalculator', () => {
    test('should correctly calculate current age in Mercury to fixed 2 decimals', () => {
        const ageInMercury = new AgeCalculator(40);
        expect(ageInMercury.calculate('Mercury')).toEqual(166.66);
    });
})