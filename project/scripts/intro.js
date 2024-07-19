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

// TRIVIA
function capitalizeFirstLetter(string) {
    string = string.replace(/['"]+/g, '');
    return string.charAt(0).toUpperCase() + string.slice(1);
};

function formSubmit() {
    // Founding Question
    const founding = document.getElementById("founding");
    let answer = founding.value;
    if (answer == "2016-10-13") {
        localStorage.setItem("founding", JSON.stringify(true));
    }
    else {
        localStorage.setItem("founding", JSON.stringify(false));
    };
    // Queen Question
    const usoQueen = document.getElementById("uso-queen");
    queenValue = usoQueen.value;
    localStorage.setItem('qValue', JSON.stringify(queenValue));
    if (queenValue == "sk") {
        localStorage.setItem("queen", JSON.stringify(true));
        localStorage.setItem("gal", JSON.stringify(false));
    }
    else if (queenValue == "gal") {
        localStorage.setItem("queen", JSON.stringify(true));
        localStorage.setItem("gal", JSON.stringify(true));
    }
    else {
        localStorage.setItem("queen", JSON.stringify(false));
        localStorage.setItem("gal", JSON.stringify(false));
    };
    // Diet Question
    const diet = document.querySelector('input[name="magic-diet"]:checked');
    dietValue = diet.value;
    localStorage.setItem('dValue', JSON.stringify(dietValue));
    if (dietValue == "tb") {
        localStorage.setItem("diet", JSON.stringify(true));
    }
    else {
        localStorage.setItem("diet", JSON.stringify(false));
    };
    // Crystalid Question
    const crystalid = document.querySelector('input[name="crystalid"]:checked');
    answer = crystalid.value;
    if (answer == "uso" || answer == "snipe") {
        localStorage.setItem("crystalid", JSON.stringify(true));
    }
    else {
        localStorage.setItem("crystalid", JSON.stringify(false));
    };
    // Uso Question
    const usoQuestion = document.getElementById("uso-question");
    answer = usoQuestion.value;
    if (answer.toUpperCase() == "METAMORPHOSIS" || answer.toUpperCase() == "META") {
        localStorage.setItem("uso", JSON.stringify(true));
    }
    else {
        localStorage.setItem("uso", JSON.stringify(false));
    };
    // Country Question
    const countryQuestion = document.getElementById("country-question");
    answer = countryQuestion.value;
    if (answer == "fabrem") {
        localStorage.setItem("country", JSON.stringify(true));
    }
    else {
        localStorage.setItem("country", JSON.stringify(false));
    };
    // Dictator Question
    const dictatorQuestion = document.querySelector("input[name='queen-name']:checked");
    answer = dictatorQuestion.value;
    if (answer == "bastet") {
        localStorage.setItem("dictator", JSON.stringify(true));
    }
    else {
        localStorage.setItem("dictator", JSON.stringify(false));
    };
    // Landlocked Question
    const landlockedQuestion = document.querySelector("input[name='tof']:checked");
    answer = landlockedQuestion.value;
    if (answer == "false") {
        localStorage.setItem("landlocked", JSON.stringify(true));
    }
};

function answerLoad() {
    // ------Founding answer
    const foundingAnswer = document.getElementById("founding-answer")
    let a = localStorage.getItem('founding');
    if (a == "true") {
        foundingAnswer.classList.toggle("correct");
        foundingAnswer.innerHTML = `<p><b>Correct!</b> October 13th, 2016 is the day we named Edemia.</p>`
    }
    else {
        foundingAnswer.classList.toggle("incorrect");
        foundingAnswer.innerHTML = `<p><b>Incorrect!</b> October 13th, 2016 is the day we named Edemia.</p>`
    }
    // ------Uso Queen answer
    let b = localStorage.getItem('queen');
    let j = localStorage.getItem('qValue');
    let c = localStorage.getItem('gal');
    const usoQueenAnswer = document.getElementById("uso-queen-answer")
    if (c == "true") {
        usoQueenAnswer.classList.toggle("correct");
        usoQueenAnswer.innerHTML = `<p>My rise to power will be slow, but inevitable.</p>`
    }
    else if (b == "true") {
        usoQueenAnswer.classList.toggle("correct");
        usoQueenAnswer.innerHTML = `<p><b>Correct!</b> Ren (SK) currently holds the title of Uso Queen</p>`
    }
    else {
        usoQueenAnswer.classList.toggle("incorrect");
        usoQueenAnswer.innerHTML = `<p><b>Incorrect!</b> ${capitalizeFirstLetter(j)} is not the uso queen, Ren (SK) is!</p>`
    }
    // ------Diet answer
    const dietAnswer = document.getElementById("diet-answer")
    let d = localStorage.getItem('diet');
    let k = localStorage.getItem('dValue');
    if (d == "true") {
        dietAnswer.classList.toggle("correct");
        dietAnswer.innerHTML = `<p><b>Correct!</b> Temple Beast diets primarily consist of ambient magic.</p>`
    }
    else {
        dietAnswer.classList.toggle("incorrect");
        dietAnswer.innerHTML = `<p><b>Incorrect!</b> ${capitalizeFirstLetter(k)} don't eat magic. <i>Temple Beast</i> diets primarily consist of ambient magic.</p>`
    }
    // ------Crystalid answer
    let e = localStorage.getItem('crystalid');
    const crystalidAnswer = document.getElementById("crystalid-answer")
    if (e == "true") {
        crystalidAnswer.classList.toggle("correct");
        crystalidAnswer.innerHTML = `<p><b>Correct!</b> Uso and Snipes are both crystalid species</p>`
    }
    else {
        crystalidAnswer.classList.toggle("incorrect");
        crystalidAnswer.innerHTML = `<p><b>Incorrect!</b> Uso and Snipes are both crystalid species</p>`
    }
    // ------Uso answer
    const usoAnswer = document.getElementById("uso-answer");
    let f = localStorage.getItem('uso');
    if (f == "true") {
        usoAnswer.classList.toggle("correct");
        usoAnswer.innerHTML = `<p><b>Correct!</b> An usogi becomes any usogami through the process of <i>Metamorphasis</i>.</p>`
    }
    else {
        usoAnswer.classList.toggle("incorrect");
        usoAnswer.innerHTML = `<p><b>Incorrect!</b> An usogi becomes any usogami through the process of <i>Metamorphasis</i>.</p>`
    }
    // ------Country answer
    const countryAnswer = document.getElementById("country-answer");
    let g = localStorage.getItem('country');
    if (g == "true") {
        countryAnswer.classList.toggle("correct");
        countryAnswer.innerHTML = `<p><b>Correct!</b> Fabrem was named on the same day we named Edemia itself. Making it the first!</p>`
    }
    else {
        countryAnswer.classList.toggle("incorrect");
        countryAnswer.innerHTML = `<p><b>Incorrect!</b> Fabrem was the first country we named.</p>`
    }
    // ------Dictator answer
    const dictatorAnswer = document.getElementById("dictator-answer");
    let h = localStorage.getItem('dictator');
    if (h == "true") {
        dictatorAnswer.classList.toggle("correct");
        dictatorAnswer.innerHTML = `<p><b>Correct!</b> Bastet is (or should I say <i>was</i>) the "immortal god-queen" of Rictos.</p>`
    }
    else {
        dictatorAnswer.classList.toggle("incorrect");
        dictatorAnswer.innerHTML = `<p><b>Incorrect!</b> Bastet is the name of Rictos's longest ruler.</p>`
    }
    // ------Landlocked answer
    const landlockedAnswer = document.getElementById("landlocked-answer");
    let i = localStorage.getItem('landlocked');
    if (i == "true") {
        landlockedAnswer.classList.toggle("correct");
        landlockedAnswer.innerHTML = `<p><b>Correct!</b> Carasil is an island nation. There's no way that's landlocked.</p>`
    }
    else {
        landlockedAnswer.classList.toggle("incorrect");
        landlockedAnswer.innerHTML = `<p><b>Incorrect!</b> Carasil is an island nation. There's no way that's landlocked.</p>`
    }
};
