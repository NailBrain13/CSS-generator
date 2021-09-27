const inputTopLeft = document.getElementById('top-left-range'),
  inputTopRight = document.getElementById('top-right-range'),
  inputBottomLeft = document.getElementById('bottom-left-range'),
  inputBottomRight = document.getElementById('bottom-right-range');

const resultTopLeft = document.getElementById('result-top-left-range'),
  resultTopRight = document.getElementById('result-top-right-range'),
  resultBottomLeft = document.getElementById('result-bottom-left-range'),
  resultBottomRight = document.getElementById('result-bottom-right-range');

const inputs = document.querySelectorAll('.input');
// console.log(inputs);
const cube = document.getElementById('cube');
const btn = document.getElementById('btn');
const total = document.getElementById('total-result');

const color = document.getElementById('cube-color-range');
const colorName = document.getElementById('result-color');
const btnColor = document.getElementById('btn-color');

const changeColor = () => {
  colorName.innerHTML = `#${color.value}`;
  cube.style.backgroundColor = '#' + color.value;
};

const changeRadius = () => {
  resultTopLeft.innerHTML = inputTopLeft.value + 'px';
  resultTopRight.innerHTML = inputTopRight.value + 'px';
  resultBottomLeft.innerHTML = inputBottomLeft.value + 'px';
  resultBottomRight.innerHTML = inputBottomRight.value + 'px';

  cube.style.borderRadius =
    inputTopLeft.value +
    'px ' +
    inputTopRight.value +
    'px ' +
    inputBottomRight.value +
    'px ' +
    inputBottomLeft.value +
    'px ';
};

const getResult = () => {
  total.innerHTML =
    inputTopLeft.value +
    'px ' +
    inputTopRight.value +
    'px ' +
    inputBottomRight.value +
    'px ' +
    inputBottomLeft.value +
    'px ';
};

for (value of inputs) {
  value.addEventListener('input', changeRadius);
}

color.addEventListener('input', changeColor);

btn.addEventListener('click', getResult);
