// Book of Mormon - Top 10 Javascript

// Declaring variables 
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('ul');
;

// Add Chapter Event "On Click"
button.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        // Creating list items and delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button')
        // Declaring content
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        // Attaching del button to list item
        li.append(deleteButton);
        // Append item to list
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

