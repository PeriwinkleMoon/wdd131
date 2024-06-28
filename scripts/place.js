// GET DATES CODE for Footer
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const modPara = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);

modPara.innerHTML = `Last Modification: ${oLastModif}`
// --------------------------

// GETTING WIND CHILL for li
const wind = 9;
const temp = 54;

function calculateWindChill(v, t) {
    let result = Math.round(35.74 + 0.6215 * t - 35.75 * (v ** 0.16) + 0.4275 * t * (v ** 0.16)); // Windchill formula
    console.log(result); // Checking result
    result = Math.round((result - 32) * 5 / 9); // Converting to Celcius for regional accuracy
    console.log(result); // Checking result
    return result; // Return result
};

const windChill = document.getElementById("windChill");
windChill.innerHTML = calculateWindChill(wind, temp);
