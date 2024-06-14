/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn");
const inputEl = document.getElementById("quantity");
const lengthOutput = document.getElementById("length-output");
const volumeOutput = document.getElementById("volume-output");
const massOutput = document.getElementById("mass-output");

convertBtn.addEventListener("click", function() {
    const inputValue = inputEl.value;
    renderLength(inputValue);
    renderVolume(inputValue);
    renderMass(inputValue);
});

function renderLength(convertNum) {
    convertNum = parseFloat(convertNum); // Convert input to float
    let lengthResult = (convertNum * 3.281).toFixed(3); // Multiply and then fix to 3 decimal places
    let reverselengthResult = (convertNum / 3.281).toFixed(3); // Divide and then fix to 3 decimal places
    lengthOutput.textContent = `${convertNum}m = ${lengthResult} feet | ${convertNum} feet = ${reverselengthResult}m`;
}

function renderVolume(convertNum) {
    convertNum = parseFloat(convertNum); // Convert input to float
    let volumeResult = (convertNum * 0.264).toFixed(3); // Multiply and then fix to 3 decimal places
    let reversevolumeResult = (convertNum / 0.264).toFixed(3); // Divide and then fix to 3 decimal places
    volumeOutput.textContent = `${convertNum}L = ${volumeResult} gallons | ${convertNum} gallons = ${reversevolumeResult}L`;
}

function renderMass(convertNum) {
    convertNum = parseFloat(convertNum); // Convert input to float
    let massResult = (convertNum * 2.204).toFixed(3); // Multiply and then fix to 3 decimal places
    let reversemassResult = (convertNum / 2.204).toFixed(3); // Divide and then fix to 3 decimal places
    massOutput.textContent = `${convertNum} Kg = ${massResult} lb | ${convertNum} lb = ${reversemassResult} Kg`;
}
