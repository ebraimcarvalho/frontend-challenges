// fetch('http://www.mocky.io/v2/5bc3b9cc30000012007586b7')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error))

import data from './data.js';

data.sort(sortBySequence);

function sortBySequence(a, b) {
  return a.sequence < b.sequence ? -1 : a.sequence > b.sequence ? 1 : 0;
}

const $allPromotions = document.querySelector('[data-js="all-promotions"]');
const $newCustomers = document.querySelector('[data-js="new-customers"]');
const $div = document.querySelector('#render');

function initEvents() {
  window.addEventListener('load', renderAll, false);
  $allPromotions.addEventListener('click', renderAll, false);
  $newCustomers.addEventListener('click', renderNew, false);
}

function renderAll() {
  reset();
  render(data);
}

function reset () {
  $div.innerHTML = '';
}

function render(list) {
  for(let i = 0; i < list.length; i++) {
    createElements(list[i])
  }
}

function renderNew() {
  let filter = data.filter(item => {
    return item.onlyNewCustomers === true;
  });
  reset();
  render(filter);
}

function createElements(item) {
  const $divCard = document.createElement('div');
  const $img = document.createElement('img');
  const $h3 = document.createElement('h3');
  const $p = document.createElement('p');
  const $divButton = document.createElement('div');
  const $button1 = document.createElement('button');
  const $button2 = document.createElement('button');

  $divCard.setAttribute('class', 'card');
  $img.setAttribute('src', item.heroImageUrl);
  $h3.textContent = item.name;
  $p.textContent = item.description;
  $button1.textContent = item.termsAndConditionsButtonText;
  $button2.textContent = item.joinNowButtonText;

  $divCard.appendChild($img);
  $divCard.appendChild($h3);
  $divCard.appendChild($p);
  $divButton.appendChild($button1);
  $divButton.appendChild($button2);
  $divCard.appendChild($divButton);
  $div.appendChild($divCard);
}

initEvents();