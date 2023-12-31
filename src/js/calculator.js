export default class AgeCalculator {
    constructor(earthAge, pastAge, futureAge) {
        this.earthAge = earthAge;
        this.pastAge = pastAge;
        this.futureAge = futureAge;
        this.planetAgeRatio = {
            Mercury: 0.24,
            Venus: 0.62,
            Mars: 1.88,
            Jupiter: 11.86
        };
    }
    calculate(planet) {
        const result = this.earthAge / this.planetAgeRatio[planet];
        return Math.floor(result * 100) / 100;
    }
    ageMapBuilder(ageDifference) {
        const ageMap = new Map();
        for (const planet in this.planetAgeRatio) {
            const convertedAge = ageDifference / this.planetAgeRatio[planet];
            const toFixed = Math.floor(convertedAge * 100) / 100; 
            ageMap.set(planet, toFixed);
        }
        return Object.fromEntries(ageMap);
    }
    yearsSincePast() {
        const ageDifference = this.earthAge - this.pastAge;
        return this.ageMapBuilder(ageDifference);
    }
    yearsUntilFuture() {
        const ageDifference = this.futureAge - this.earthAge;
        return this.ageMapBuilder(ageDifference);
    }
}