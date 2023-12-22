import AgeCalculator from "../src/js/calculator";

describe('AgeCalculator', () => {
    test('should correctly calculate current age in Mercury to fixed 2 decimals', () => {
        const ageInMercury = new AgeCalculator(40);
        expect(ageInMercury.calculate('Mercury')).toEqual(166.66);
    });
    test('should correctly calculate current age in Venus to fixed 2 decimals', () => {
        const ageInVenus = new AgeCalculator(40);
        expect(ageInVenus.calculate('Venus')).toEqual(64.51);
    });
    test('should correctly calculate current age in Mars to fixed 2 decimals', () => {
        const ageInMars = new AgeCalculator(40);
        expect(ageInMars.calculate('Mars')).toEqual(21.27);
    });
})