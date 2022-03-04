// Get the button and attach a click event to remove color.
const removeButton = document.querySelector('#removeButton');
removeButton.addEventListener('click', removeColor);

// Get the select object to access the color.
let colorSelection = document.querySelector('#colorSelect');

// Loop through the option list to find the color and remove it from the option list.
function removeColor() {
    for(let i=0; i<colorSelection.length; i++) {
        if(colorSelection.options[i].value === colorSelection.value) {
            colorSelection.remove(i);
        }
    }
}