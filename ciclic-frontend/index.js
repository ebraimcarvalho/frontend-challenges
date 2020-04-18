const form = document.querySelector('form');
const name = document.querySelector('#name');
const payment = document.querySelector('#payment');
const time = document.querySelector('#time');

form.addEventListener('submit', simulate, false);

function simulate(e) {
  e.preventDefault();
  console.log(name.value, payment.value, time.value);
  fetch('http://api.mathjs.org/v4/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ "expr": `${payment.value} * (((1 + 0.00517) ^ ${time.value * 12} - 1) / 0.00517)` })
  })
  .then(response => response.json())
  .then(data => console.log(data.result))  
}