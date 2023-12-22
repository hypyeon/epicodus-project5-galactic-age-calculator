export default class AgeCalculator {
    constructor(earthAge) {
        this.earthAge = earthAge;
        this.planetAgeRatio = {
            Mercury: 0.24,
            Venus: 0.62,
            Mars: 1.88,
            Jupiter: 11.86
        }
    }
    calculate(planet) {
        const result = this.earthAge / this.planetAgeRatio[planet];
        return Math.floor(result * 100) / 100;
    }
    yearsSincePast(pastAge) {

    }
    yearsUntilFuture(futureAge) {

    }
}