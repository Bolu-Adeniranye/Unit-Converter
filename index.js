/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("quantity")
let lengthOutput = document.getElementById("length-output")
let volumeOutput = document.getElementById("volume-output")
let massOutput = document.getElementById("mass-output")


convertBtn.addEventListener("click",function(){
    renderLength(inputEl)
    // renderVolume(inputEl)
    // renderMass(inputEl)
})

function renderLength(convertNum) {
    convertNum = parseFloat(convertNum); // Convert input to float
    let lengthOutput = (convertNum * 3.281).toFixed(3); // Multiply and then fix to 3 decimal places
    return lengthOutput;
}
