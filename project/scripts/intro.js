// ---INTRODUCTION TO EDEMIA JAVASCRIPT - By Ella Moon

// Footer JS copied from getdates.js
const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

const modPara = document.querySelector("#lastModified");
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);

modPara.innerHTML = `Last Modification: ${oLastModif}`

// Hamburger menu
const headnav = document.querySelector(".main-nav");
const hambutton = document.querySelector("#hamburger");

hambutton.addEventListener("click", () => {
    headnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});

// ----------SPECIES PAGE----------

// const speciesButton = document.querySelectorAll(".select-icon");

// function activateSub(id) {

// }
// for (var i = 0 ; i < speciesButton.length; i++) {
//     speciesButton[i].addEventListener('click' , showComment , false ) ;
//  }


