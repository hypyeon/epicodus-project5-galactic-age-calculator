import './css/styles.scss';
import AgeCalculator from './js/calculator';

function ages() {
    const current = document.getElementById("currentAge").value;
    const past = document.getElementById("pastAge").value;
    const future = document.getElementById("futureAge").value;
    const ageMap = new Map();
    ageMap.set("current", current);
    ageMap.set("past", past);
    ageMap.set("future", future);
    return ageMap;
}
function formHandler() {
    const form = document.querySelector("form");
    
    const mercuryNow = document.getElementById("mercury-now");
    const mercurySince = document.getElementById("mercury-since");
    const mercuryUntil = document.getElementById("mercury-until");
    
    const venusNow = document.getElementById("venus-now");
    const venusSince = document.getElementById("venus-since");
    const venusUntil = document.getElementById("venus-until");

    const marsNow = document.getElementById("mars-now");
    const marsSince = document.getElementById("mars-since");
    const marsUntil = document.getElementById("mars-until");

    const jupiterNow = document.getElementById("jupiter-now");
    const jupiterSince = document.getElementById("jupiter-since");
    const jupiterUntil = document.getElementById("jupiter-until");

    const explanation = document.getElementById("explanation");
    
    form.addEventListener("submit", e => {
        e.preventDefault();
        const ageMap = ages();
        const currentAge = ageMap.get("current");
        const pastAge = ageMap.get("past");
        const futureAge = ageMap.get("future");
        const newAge = new AgeCalculator(currentAge);
        const pastAgeMap = newAge.yearsSincePast(pastAge);
        const futureAgeMap = newAge.yearsUntilFuture(futureAge);
        
        mercuryNow.innerText = newAge.calculate('Mercury');
        mercurySince.innerText = pastAgeMap['Mercury'];
        mercuryUntil.innerText = futureAgeMap['Mercury'];
        
        venusNow.innerText = newAge.calculate('Venus');
        venusSince.innerText = pastAgeMap['Venus'];
        venusUntil.innerText = futureAgeMap['Venus'];

        marsNow.innerText = newAge.calculate('Mars');
        marsSince.innerText = pastAgeMap['Mars'];
        marsUntil.innerText = futureAgeMap['Mars'];

        jupiterNow.innerText = newAge.calculate('Jupiter');
        jupiterSince.innerText = pastAgeMap["Jupiter"];
        jupiterUntil.innerText = futureAgeMap["Jupiter"];

        explanation.classList.remove("hidden");
    });
}

window.onload = () => {
    formHandler();
};