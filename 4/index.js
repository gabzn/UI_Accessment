window.addEventListener('resize', printNewSize);

const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function printNewSize() {
    heightOutput.textContent = window.innerHeight + 'px';
    widthOutput.textContent = window.innerWidth + 'px';
}