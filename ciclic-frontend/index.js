const form = document.querySelector('form');
const name = document.querySelector('#name');
const payment = document.querySelector('#payment');
const time = document.querySelector('#time');
const renderResponse = document.querySelector('#renderResponse');

form.addEventListener('submit', simulate, false);

function simulate(e) {
  e.preventDefault();
  console.log(Number(payment.value));
  if(isNaN(payment.value)) {
    payment.classList.add('error');
    console.log('Não é a mamãe!')
    return
  } else {
    payment.classList.remove('error')
    calculate();
  }
}

function calculate() {
  fetch('http://api.mathjs.org/v4/', {
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
  <p class="response__text">Olá ${name.value}, juntando ${payMonth} todo mês, você terá ${value} em ${time.value} anos.</p>
  <button id="responseButton" class="response__button">Simular novamente</button>
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