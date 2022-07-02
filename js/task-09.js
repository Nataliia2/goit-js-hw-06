
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = rgb2hex(bodyEl.style.backgroundColor);
  }
  
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

  function rgb2hex(rgb) {
    var rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);

    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
};