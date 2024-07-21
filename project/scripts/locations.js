// -------------- ALL -------------- //
var locationsList = [];
var lassiList = [];
let lassiBox = document.getElementById("lassi-box");
var overList = [];
let overBox = document.getElementById("over-box");
var otherList = [];
let otherBox = document.getElementById("other-box");

// Fecth JSON file and fill array with objects
const getList = async () => {
    const response = await fetch("./scripts/locations.json");
    if (response.ok) {
        locationsList = await response.json();
        // console.log(locationsList);

        splitList(locationsList);
        loadSave(lassiList, 'lassi');
        loadSave(overList, 'over');
        loadSave(otherList, 'other');
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


// Load saved local storage and populate page with default content
function loadSave(list, continent, active) {
    let savedLocal = localStorage.getItem(`${continent}`);
    var location = {}; // Initializing "location" variable as an object.

    if (savedLocal == "undefined" || !savedLocal) {
        location = list[0]; // Default if local storage hasn't been set.
    }
    else if (active) {
        location = list[active];
        console.log(`Location: ${location}`);
    }
    else { // This is the problem...
        savedLocal = parseInt(savedLocal.replace(/['"]+/g, ''));
        location = list[savedLocal];
        console.log(`Location: ${location}`);
    }
    if (continent == "lassi") {
        populateContent(location, lassiBox);
    }
    else if (continent == "over") {
        populateContent(location, overBox);
    }
    else if (continent == "other") {
        populateContent(location, otherBox);
    }

};

// Populate content with induvidual species information
function populateContent(saved, continent) {
    continent.innerHTML = `<h1>${saved.name}</h1> <h4>${saved.pronounciation}</h4> <img src='${saved.image}' alt='${saved.name} Splash Image.' loading='lazy'> ${saved.p}`;
};

// Save active species to local storage
function save(active, continent) {
    localStorage.setItem(continent, JSON.stringify(active));
};
// -------------- LASSI -------------- //
const lassiLabels = document.querySelectorAll(".lassi-menu");
// Making On-Click Event Listeners for every image menu button
for (let i = 0; i < lassiLabels.length; i++) {
    if (lassiLabels[i].nodeName.toLowerCase() == 'label') {

        lassiLabels[i].addEventListener("click", () => { // EVENT LISTENER

            let location = lassiLabels[i].querySelector("input[name='lassi-select']");
            console.log(location);
            let active = location.value;
            console.log(active);

            save(active, "lassi"); // Save clicked location to local storage as the active species, so on next page load it will remain the same.
            loadSave(lassiList, "lassi", active); // Switch out #lassi-box content with active location
        });
    };
};


// -------------- OVERGROWTH -------------- //
const overLabels = document.querySelectorAll(".over-menu");
// Making On-Click Event Listeners for every image menu button
for (let i = 0; i < overLabels.length; i++) {
    if (overLabels[i].nodeName.toLowerCase() == 'label') {

        overLabels[i].addEventListener("click", () => { // EVENT LISTENER

            let location = overLabels[i].querySelector("input[name='over-select']");
            console.log(location);
            let active = location.value;
            console.log(active);

            save(active, "over"); // Save clicked location to local storage as the active location, so on next page load it will remain the same.
            loadSave(overList, "over", active); // Switch out #over-box content with active location.
        });
    };
};
// -------------- OTHER -------------- //
const otherLabels = document.querySelectorAll(".other-menu");
// Making On-Click Event Listeners for every image menu button
for (let i = 0; i < otherLabels.length; i++) {
    if (otherLabels[i].nodeName.toLowerCase() == 'label') {

        otherLabels[i].addEventListener("click", () => { // EVENT LISTENER

            let location = otherLabels[i].querySelector("input[name='other-select']");
            console.log(location);
            let active = location.value;
            console.log(active);

            save(active, "other"); // Save clicked location to local storage as the active location, so on next page load it will remain the same.
            loadSave(otherList, "other", active); // Switch out #other-box content with active location.
        });
    };
};

getList(); // Intial page load
