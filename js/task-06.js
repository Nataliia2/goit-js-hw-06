const inputEl = document.querySelector('#validation-input');
const checkNumber = +inputEl.dataset.length;

inputEl.addEventListener('blur', onFocusInput);

function onFocusInput(event) {
    if (event.currentTarget.value.length === checkNumber) {
        inputEl.classList.remove('invalid');
        return inputEl.classList.add('valid');
    }
    inputEl.classList.remove('valid');
    return inputEl.classList.add('invalid');
}