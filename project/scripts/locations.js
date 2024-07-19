// -------------- ALL -------------- //
var locationsList = [];
var lassiList = [];
var overList = [];
var otherList = [];

// Fecth JSON file and fill array with objects
const getList = async () => {
    const response = await fetch("./scripts/locations.json");
    if (response.ok) {
        locationsList = await response.json();
        // console.log(locationsList);

        splitList(locationsList);
    }
};
// Split the array of objects into three different arrays
function splitList(list) {
    for (let i = 0; i < 5; i++) {
        lassiList.push(list[i])
    };
    // console.log(lassiList)
    for (let i = 5; i < 10; i++) {
        overList.push(list[i])
    };
    // console.log(overList)
    for (let i = 10; i < 15; i++) {
        otherList.push(list[i])
    };
    // console.log(otherList)
}
function populateContent(box, location) {
    box.innerHTML = `<h1>${location.name}</h1> <h4>${location.pronounciation}</h4> <img src='${location.image}' alt='${location.name} Splash Image.'> ${location.p}`;
}
getList();
// -------------- LASSI -------------- //
let lassiBox = document.getElementById("lassi-box");

console.log(lassiList[0]);
// populateContent(lassiBox, lassiList[0])

// -------------- OVERGROWTH -------------- //

// -------------- OTHER -------------- //



