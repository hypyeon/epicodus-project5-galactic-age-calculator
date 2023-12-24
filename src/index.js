import './css/styles.scss';
import AgeCalculator from './js/calculator';

function getAge(id) {
    return document.getElementById(id).value;
}
function updatePlanetInfo(current, since, until, ageCalculator, planet) {
    current.innerText = ageCalculator.calculate(planet);
    since.innerText = ageCalculator.yearsSincePast()[planet];
    until.innerText = ageCalculator.yearsUntilFuture()[planet];
}
function formHandler() {
    const form = document.querySelector("form");

    const planetElements = {
        Mercury: {
            now: document.getElementById("mercury-now"),
            since: document.getElementById("mercury-since"),
            until:document.getElementById("mercury-until")
        },
        Venus: {
            now: document.getElementById("venus-now"),
            since: document.getElementById("venus-since"),
            until: document.getElementById("venus-until")
        },
        Mars: {
            now: document.getElementById("mars-now"),
            since: document.getElementById("mars-since"),
            until: document.getElementById("mars-until")
        },
        Jupiter: {
            now: document.getElementById("jupiter-now"),
            since: document.getElementById("jupiter-since"),
            until: document.getElementById("jupiter-until")
        }
    };

    const explanation = document.getElementById("explanation");
    
    form.addEventListener("submit", e => {
        e.preventDefault();

        const currentAge = getAge("currentAge");
        const pastAge = getAge("pastAge");
        const futureAge = getAge("futureAge");

        const ageCalculator = new AgeCalculator(currentAge, pastAge, futureAge);

        for (const planet in planetElements) {
            updatePlanetInfo(
                planetElements[planet].now,
                planetElements[planet].since,
                planetElements[planet].until,
                ageCalculator,
                planet
            );
        }

        explanation.classList.remove("hidden");
    });
}

window.onload = formHandler;