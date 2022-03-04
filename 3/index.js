// The volumn of a sphere is : V = 4/3 * PI * Radius to the power of 3.
const radiusButton = document.querySelector('#radiusButton');
radiusButton.addEventListener('click', calculateVolumn);

const radiusInput = document.querySelector('#radius');

function calculateVolumn() {
    if(!radiusInput.value)  alert('Enter a radius!');
    else {
        let volumn = (4 / 3) * Math.PI * Math.pow(radiusInput.value, 3);
        alert(`The volumn is ${volumn.toFixed(2)}.`);
    }
}