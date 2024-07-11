// Book of Mormon - Top 10 Javascript

// Declaring variables 
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChaptersList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// --Add Chapter Event "On Click"
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        // Clear the input
        input.value = '';
    }
    // Focus on the input
    input.focus();
});

function displayList(item) {
    // Creating list items and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button')
    // Declaring content
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    // Attaching del button to list item
    li.append(deleteButton);
    // Append item to list
    list.append(li);
    // Delete Button Event
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}; // my husband is singing and monolouging loudly in the shower and i CANT FOCUS AAa

// --SET CHAPTER LOCAL STORAGE
function setChapterList() {
    localStorage.setItem(("myFavBOMList"), JSON.stringify(chaptersArray));
};
// --GET CHAPTER LIST FROM LOCAL STORAGE
function getChaptersList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
};
// Delete chapter from array
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
};