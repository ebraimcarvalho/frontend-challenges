function add(num1, num2) {
  return num1 + num2;
}

const form = document.querySelector('form');
const form1 = 2;
const name = document.querySelector('#name');
const payment = document.querySelector('#payment');
const time = document.querySelector('#time');
const renderResponse = document.querySelector('#renderResponse');

// form.addEventListener('submit', simulate, false);

function simulate(e) {
  e.preventDefault();
  checkInput();
}

module.exports = {
  form1,
  name,
  payment,
  time,
  renderResponse,
  add
}