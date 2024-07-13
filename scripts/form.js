// ------------FOOTER JS
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const modPara = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);

modPara.innerHTML = `Last Modification: ${oLastModif}`

// ARRAY
const products = [
    {
        "id": "fc-1888",
        "name": "flux capacitor",
        "avg-rating": 4.5
    },
    {
        "id": "fc-2050",
        "name": "power laces",
        "avg-rating": 4.7
    },
    {
        "id": "fs-1987",
        "name": "time circuits",
        "avg-rating": 3.5
    },
    {
        "id": "ac-2000",
        "name": "low voltage reactor",
        "avg-rating": 3.9
    },
    {
        "id": "jj-1969",
        "name": "warp equalizer",
        "avg-rating": 5.0
    }
];

const productSelect = document.querySelector("#products");

// Function to capitalize each word in the product's name
function capitalizeString(string) {
    const words = string.split(" ");
    return words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(" ");
};

// ------------FOR EACH LOOP POPULATING SELECT
products.forEach(product => {
    const option = document.createElement("option");
    option.innerHTML = `<option value="${product.name}">${capitalizeString(product.name)}</option>`;
    productSelect.appendChild(option);
});


