const inputEl = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const divBoxEl = document.querySelector('#boxes');

btnCreate.addEventListener('click', onCreateBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function onCreateBoxes(event) {
  const amount = inputEl.value;
  let fragment = new DocumentFragment;
  
  for (let i = 1; i <= amount; i++) {
    const createDivEl = document.createElement('div');
    const value = ((20 + divBoxEl.childElementCount * 10)+ i * 10);
    createDivEl.style.width = `${value}px`;
    createDivEl.style.height = `${value}px`;
    createDivEl.style.backgroundColor = getRandomHexColor();

    fragment.appendChild(createDivEl);
  };
    divBoxEl.appendChild(fragment);
};

function destroyBoxes() {
  inputEl.value = '';
  divBoxEl.innerHTML = '';
  };

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  };