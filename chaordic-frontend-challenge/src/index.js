// import './getDataAndRender';
// import './validateForm';

const divMain = document.querySelector('.main');
const divRender = document.querySelector('#container-products');
let markup = '';
let divButton = document.createElement('div');
let url = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1';

function getData() {
  fetch(url).then(data => data.json()).then(data => {
    console.log(data);
    renderProducts(data);
  });
}

function renderProducts(data) {
  data.products.forEach(item => {
    markup += `
    <div class="product">
      <div class="product__div-img">
        <img src="http:${item.image}" alt="${item.name}" class="product__img">
      </div>
      <h5 class="product__name">${item.name}</h5>
      <p class="product__description">
        ${item.description}
      </p>
      <p class="product__old-price">De: R$${item.oldPrice},00</p>
      <h4 class="product__new-price">Por: R$${item.price},00</h4>
      <p class="product__payment">ou ${item.installments.count}x de R$${item.installments.value.toFixed(2).toString().replace('.', ',')}</p>
      <button id="${item.id}" class="product__btn-purchase">Comprar</button>
    </div>
    `;
  });
  divRender.innerHTML = markup;
  renderButtonMore(data);
};

function renderButtonMore(data) {
  divButton.innerHTML = `
    <button id="btn__list-more" class="main__list-more">Ainda mais produtos aqui!</button>
  `;
  divMain.appendChild(divButton);

  const btnListMore = document.querySelector('#btn__list-more');
  btnListMore.addEventListener('click', () => {
    fetch(`https:${data.nextPage}`).then(data => data.json()).then(data => {
      console.log(data)
      renderProducts(data)
    });
  });
}

getData();

const form = document.querySelector('[data-js="form"]');
const inputName = document.querySelector('[data-js="input-name"]');
const inputEmail = document.querySelector('[data-js="input-email"]');
const controlName = document.querySelector('.controlName');
const controlEmail = document.querySelector('.controlEmail');

form.addEventListener('submit', checkForm, true);

function checkForm(e) {
  e.preventDefault();
  checkNameInput();
  checkEmailInput();  
}

function checkNameInput() {
  if (inputName.value == '') {
    controlName.innerHTML = 'Campo Nome precisa ser preenchido';
    inputName.classList.add('form__input--error');
  } else {
    controlName.innerHTML = 'Thanks!';
    inputName.classList.remove('form__input--error');
    inputName.classList.add('form__input--success');
  }
}

function checkEmailInput() {
  if(inputEmail.value == '') {
    controlEmail.innerHTML = 'Campo Email precisa ser preenchido';
    inputEmail.classList.add('form__input--error');
  } else if(!checkEmail(inputEmail.value)) {
    controlEmail.innerHTML = 'O campo de email deve conter um email válido!';
    inputEmail.classList.add('form__input--error');
  } else {
    controlEmail.innerHTML = 'Seu amigo receberá as novidades em breve!';
    inputEmail.classList.remove('form__input--error');
    inputEmail.classList.add('form__input--success');
  }
}

function checkEmail(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(String(email).toLowerCase());
}