const form = document.querySelector('form');
const name = document.querySelector('#name');
const payment = document.querySelector('#payment');
const time = document.querySelector('#time');
const renderResponse = document.querySelector('#renderResponse');

form.addEventListener('submit', simulate, false);

function simulate(e) {
  e.preventDefault();
  checkInput();
}

function checkInput() {
  if(isNaN(payment.value)) {
    payment.classList.add('error');
    payment.nextElementSibling.innerHTML = `Que isso meu patrão? Just Numbers here, ok?`;
  } else {
    payment.classList.remove('error');
    payment.nextElementSibling.innerHTML = ``;
    calculate();
  }
}

function calculate() {
  fetch('https://api.mathjs.org/v4/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({ "expr": `${payment.value} * (((1 + 0.00517) ^ ${time.value * 12} - 1) / 0.00517)` })
  })
  .then(response => response.json())
  .then(data => {
    renderResult(data.result);
  });
}

function renderResult(value) {
  var payMonth = Number(payment.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  value = Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  let markup = `
  <div class="response">
  <p class="response__text">Olá ${name.value}, juntando ${payMonth} todo mês, você terá ${value} em ${time.value} ${time.value <= 1 ? 'ano' : 'anos'}, a uma taxa de 0.517% ao mês!</p>
  <button id="responseButton" class="response__button">Simular novamente</button>
  </div>
  `
  renderResponse.innerHTML = markup;
  const responseButton = document.querySelector('#responseButton');
  backIndex(responseButton);
}

function backIndex(button) {
  button.addEventListener('click', () => {
    window.location.href="./index.html"
  })
}

function add(num1, num2) {
  return num1 + num2;
}

module.exports = {
  simulate,
  checkInput,
  calculate,
  renderResult,
  backIndex,
  add
}