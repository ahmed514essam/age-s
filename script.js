const day = document.querySelector(".da");
const month = document.querySelector(".mo");
const year = document.querySelector(".ya");

const dayCalc = document.getElementById("dd");
const monthCalc = document.getElementById("mm");
const yearCalc = document.getElementById("yy");

const imge = document.querySelector("img");

const date = new Date();
let dayEntered = date.getDate();
let monthEntered = date.getMonth() + 1;
let yearEntered = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function validation() {
    const input = document.querySelectorAll("input");
    let valid = true;
}
function handleSubmit(e) {
    e.preventDefault();
    if (validation()) {
        if (day.value > dayEntered) {
            dayEntered = dayEntered + months[monthEntered - 1];
            monthEntered = monthEntered - 1;
        }
        if (month.value > monthEntered) {
            monthEntered = monthEntered + 12;
            yearEntered = yearEntered - 1;
        }
        const dd = dayEntered - day.value;
        const mm = monthEntered - month.value;
        const yy = yearEntered - year.value;

        dayCalc.innerHTML = dd;
        monthCalc.innerHTML = mm;
        yearCalc.innerHTML = yy;
    }
}
imge.addEventListener("submit", handleSubmit);


