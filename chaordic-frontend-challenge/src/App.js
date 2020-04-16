export const hello = () => 'Hello World!';

export const add = (num1, num2) => {
  return (typeof num1 === 'number' && typeof num2 === 'number') ? num1 + num2 : null;
};

export const removeSNames = names => {
  return names.filter(name => name.toLowerCase().charAt(0) !== 's');
};

const divMain = document.querySelector('.main');
const divRender = document.querySelector('#container-products');
let divButton = document.createElement('div');
let url = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1';
function getData() {
  fetch(url).then(data => data.json()).then(data => {
    console.log(data);
    renderProducts(data);
  });
}

function renderProducts(data) {
  let markup = '';
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