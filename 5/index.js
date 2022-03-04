const inputForm = document.querySelector('#inputForm');
const imageInput = document.querySelector('#imageUpload');
const imageTag = document.querySelector('#imageTag');

// Get all the elements in the table.
const tableFirst = document.querySelector('#tableFirst');
const tableLast = document.querySelector('#tableLast');
const tableEmail = document.querySelector('#tableEmail');
const tablePhone = document.querySelector('#tablePhone');
const tableImage = document.querySelector('#tableImage');

// The image data url will be set once it's uploaded.
let imageDataURL = "";

imageInput.addEventListener('change', () => {
    const chosenImage = imageInput.files[0];
    
    if(chosenImage) {
        const imageReader = new FileReader();
        imageTag.style.display = 'block';

        imageReader.addEventListener('load', () => {
            imageDataURL = imageReader.result;
            imageTag.setAttribute('src', imageReader.result);
        });
        
        imageReader.readAsDataURL(chosenImage);
    }
    
})

inputForm.addEventListener('submit', e => {
    e.preventDefault();

    const firstName = inputForm.elements['firstName'].value;
    const lastName = inputForm.elements['lastName'].value;
    const email = inputForm.elements['email'].value;
    const phone = inputForm.elements['phone'].value;

    tableFirst.innerHTML = firstName;
    tableLast.innerHTML = lastName;
    tableEmail.innerHTML = email;
    tablePhone.innerHTML = phone;

    tableImage.style.display = 'block';
    tableImage.setAttribute('src', imageDataURL);
})