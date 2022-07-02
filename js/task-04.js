const actions = document.querySelectorAll('#counter button');
const decrementButton = actions[0];
const incrementButton = actions[1];
const valueEl = document.querySelector('#value');

decrementButton.addEventListener('click', onDecrementButtonClick);
incrementButton.addEventListener('click', onIncrementButtonClick)

let counterValue = 0;

function onDecrementButtonClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
   
}
function onIncrementButtonClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}