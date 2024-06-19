// Book of Mormon - Top 10 Javascript

// Declaring variables 
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');

// Add Chapter Event "On Click"
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        // Creating the delete button on listed items
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        // Delete Button Event
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        // Clear the input
        input.value = '';
    }
    // Focus on the input
    input.focus();
});

