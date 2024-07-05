// Footer JS copied from getdates.js
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const modPara = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);

modPara.innerHTML = `Last Modification: ${oLastModif}`

// Hamburger menu
const headnav = document.querySelector(".main-navigation");
const hambutton = document.querySelector("#hamburger");

hambutton.addEventListener("click", () => {
    headnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

// Temples
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Jordan River",
        location: "South Jordan, Utah, United States",
        dedicated: "1981, November, 16",
        area: 148236,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/400x250/CWD_070ac208-d163-4faa-8123-c583b099c319.jpg"
    },
    {
        templeName: "Columnus Ohio",
        location: "Columbus, Ohio, United States",
        dedicated: "1999, September, 4",
        area: 10700,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbus-ohio/400x250/columbus-temple-lds-406110-wallpaper.jpg"
    },
    {
        templeName: "Ogden Utah",
        location: "Ogden, Utah, United States",
        dedicated: "1972, January, 18",
        area: 112132,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ogden-utah/400x250/ogden-utah-temple-1300442-wallpaper.jpg"
    },
    {
        templeName: "Winter Quarters",
        location: "Omaha, Nebraska, United States",
        dedicated: "2001, April, 22",
        area: 16000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/winter-quarters-nebraska/400x250/winter-quarters-nebraska-temple-detail-772766.jpg"
    },
    {
        templeName: "Star Valley Wyoming",
        location: "Afton, Wyoming, United States",
        dedicated: "2016, October, 30",
        area: 18609,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/star-valley-wyoming/400x250/star-valley-wyoming-temple-1795141-wallpaper.jpg"
    },
];

function TempleCards(temples) {
    const templeGrid = document.querySelector("#album-grid");
    templeGrid.innerHTML = "";
    temples.forEach(temple => {
        const templeCard = document.createElement("section");

        templeGrid.appendChild(templeCard);
        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p><b>Location:</b> ${temple.location}</p>
            <p><b>Dedicated:</b> ${temple.dedicated}</p>
            <p><b>Size:</b> ${temple.area} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy">`
    });
};

// Extract year from dedication string
function GetYear(date) {
    let array = date.split(",");
    let year = array[0];
    return parseInt(year);
};
// Filter to temples built before 1900
function OldSort(temples) {
    return temples.filter((temple) => GetYear(temple.dedicated) < 1900);
};
// Filter to temples built after 200
function NewSort(temples) {
    return temples.filter((temple) => GetYear(temple.dedicated) > 2000);
};
// Filter to temples largerer than 90,000 sq ft
function LargeSort(temples) {
    return temples.filter((temple) => temple.area > 90000);
};
// Filter to temples smaller than 10,000 sq ft
function SmallSort(temples) {
    return temples.filter((temple) => temple.area < 10000);
};
const aHome = document.getElementById("home");
const aOld = document.getElementById("old");
const aNew = document.getElementById("new");
const aLarge = document.getElementById("large");
const aSmall = document.getElementById("small");

aHome.addEventListener("click", () => { TempleCards(temples) });
aOld.addEventListener("click", () => { TempleCards(OldSort(temples)) });
aNew.addEventListener("click", () => { TempleCards(NewSort(temples)) });
aLarge.addEventListener("click", () => { TempleCards(LargeSort(temples)) });
aSmall.addEventListener("click", () => { TempleCards(SmallSort(temples)) });

TempleCards(temples);
