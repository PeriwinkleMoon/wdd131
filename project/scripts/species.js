let lassiBox = document.getElementById("species-box");
var speciesList = [];

// Fecth JSON file and fill array with objects
const getList = async () => {
    const response = await fetch("./scripts/species.json");
    if (response.ok) {
        speciesList = await response.json();
        console.log(speciesList)
        loadSave(speciesList);
    }
};
// Load saved local storage and populate page with default content
function loadSave(list, activeSpecies) {
    let savedSpecies = localStorage.getItem('savedSpecies');
    var species = {}; // Initializing "species" variable as an object.

    if (savedSpecies == "undefined" || !savedSpecies) {
        species = list.uso; // Default if local storage hasn't been set.
    }
    else if (activeSpecies) {
        species = list[activeSpecies];
        console.log(`species: ${species}`);
    }
    else { // This is the problem...
        savedSpecies = savedSpecies.replace(/['"]+/g, ''); // Removes the extra quotation marks in the string.
        species = list[savedSpecies];
        console.log(`species: ${species}`);
    }
    populateContent(species);
};

// Populate content with induvidual species information
function populateContent(savedSpecies) {
    lassiBox.innerHTML = `<h1>${savedSpecies.name}</h1> <h4>${savedSpecies.pronounciation}</h4> <img src='${savedSpecies.image}' alt='${savedSpecies.name} Splash Image.'> ${savedSpecies.p}`;
};

// Save active species to local storage
function save(active) {
    localStorage.setItem("savedSpecies", JSON.stringify(active));
};

const radioLabels = document.querySelectorAll(".select-menu");
// Making On-Click Event Listeners for every image menu button
for (let i = 0; i < radioLabels.length; i++) {
    if (radioLabels[i].nodeName.toLowerCase() == 'label') {

        radioLabels[i].addEventListener("click", () => { // EVENT LISTENER

            let species = radioLabels[i].querySelector(".species-select");
            let activeSpecies = species.value;
            console.log(activeSpecies);

            save(activeSpecies); // Save clicked species to local storage as the active species, so on next page load it will remain the same.
            loadSave(speciesList, activeSpecies); // Switch out #species-box content with active species
        });
    };
};

getList(); // Intial page load
