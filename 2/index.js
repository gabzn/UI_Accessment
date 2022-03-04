// Get the button and attach an event to it.
const countButton = document.querySelector('#getOptions');
countButton.addEventListener('click', getOptions);

// Get the select object to access all the colors.
let colorSelection = document.querySelector('#colorSelect');

// Loop through the dropdown list to get the colors and display them.
function getOptions() {
    let options = [];
    let displayMessage = '';

    for(let i=0; i<colorSelection.length; i++) {
        options.push(colorSelection.options[i].text);
    }

    displayMessage = displayMessage.concat(options);
    alert(`There's ${colorSelection.length} options including ${displayMessage}.`);
}