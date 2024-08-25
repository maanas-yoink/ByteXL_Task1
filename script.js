const minInput = document.getElementById('min');
const maxInput = document.getElementById('max');
const generateButton = document.getElementById('generate');
const resultParagraph = document.getElementById('result');

generateButton.addEventListener('click', (e) => {
    e.preventDefault();
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);
    if (min == " " || max==" ") {
        alert('Please enter all the fields');
        return;
    }
    if (min >= max) {
        alert('Minimum value should be less than maximum value');
        return;
    }
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    resultParagraph.innerHTML = `Random Number: <span>${randomNumber}</span>`;
});
