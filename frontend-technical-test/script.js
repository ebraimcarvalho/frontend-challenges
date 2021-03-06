(function (doc) {
  'use strict';

  let eventDiv = doc.querySelector('[data-js="event"]');

  function getApi() {
    let api = `https://www.mocky.io/v2/59f08692310000b4130e9f71`;

    fetch(api)
      .then(function (response) {
        let data = response.json();
        return data;
      })
      .then(function (data) {
        initApp(data);
        initEvents();
      })
  }

  function initApp(data) {
    console.log('loaded', data);
    runDataAndRender(data);
  }

  function runDataAndRender(data) {
    var docFragm = doc.createDocumentFragment();
    for (let i = 0, dataLength = data.length; i < dataLength; i++) { //Percorre todo array
      if (data[i].markets.length > 0) { //Entra apenas no array que tem markets
        var divRender = doc.createElement('div');
        divRender.setAttribute('class', 'event__option');
        divRender.innerHTML += `
          <div class="event__title">
            <span class="event__title-name">${data[i].name}</span>
          </div>
        `;
        for (let j = 0, marketsLength = data[i].markets.length; j < marketsLength; j++) { //Percorre os markets
          var divEventMarket = doc.createElement('div');
          divEventMarket.setAttribute('class', 'event__market');
          divEventMarket.innerHTML += `
          <div class="event__market-${j + 1}">
            <h3 class="event__market-type">${data[i].markets[j].name}</h3>`;

          var buttonsDiv = doc.createElement('div');
          buttonsDiv.setAttribute('class', 'event__buttons');

          for (let k = 0, selectionsLength = data[i].markets[j].selections.length; k < selectionsLength; k++) {  //Percorre as opções para selecionar
            buttonsDiv.innerHTML += `
                <button class="market__select" name="${data[i].markets[j].selections[k].name}" price="${data[i].markets[j].selections[k].price}" eventType="${data[i].markets[j].name}">
                  ${data[i].markets[j].selections[k].name} <br/>
                  ${data[i].markets[j].selections[k].price}
                </button>
          `;
          }
          divEventMarket.appendChild(buttonsDiv);
          divRender.appendChild(divEventMarket);
        }
        docFragm.appendChild(divRender);
        eventDiv.appendChild(docFragm);
      }
    }
  }

  function initEvents() {
    let containerPrincipal = doc.querySelector('[data-js="container-principal"]');
    let showCart = doc.querySelector('[data-js="show-cart"]');
    let showCartIconX = doc.querySelector('[data-js="show-cart__icon-x"]');
    let buttonMenu = doc.querySelector('.header__icon-menu');
    let buttons = doc.querySelectorAll('button');

    buttonMenu.addEventListener('click', showCartAndOpacity, false);

    function showCartAndOpacity() {
      showCart.style.display = 'block';
      containerPrincipal.classList.add('bg-opacity');
    };

    Array.prototype.forEach.call(buttons, function (button) {
      button.addEventListener('click', function () {
        let eventType = button.getAttribute('eventType');
        let price = button.getAttribute('price');
        showCartAndOpacity();
        showCart.innerHTML += `
          <div class="show-cart__select">
            <h4 class="select__name">${button.name} ${eventType}</h4>
            <h3 class="select__price">${price}</h3>
            <button class="delete">Delete</button>
          </div>
        `;
        let showCartIconX = doc.querySelector('[data-js="show-cart__icon-x"]');
        showCartIconX.addEventListener('click', showContainerPrincipal, false);

        function showContainerPrincipal() {
          showCart.style.display = 'none';
          containerPrincipal.classList.remove('bg-opacity');
        };

        let deleteButton = doc.querySelectorAll('.delete');
        Array.prototype.forEach.call(deleteButton, function (deleteButton) {
          deleteButton.addEventListener('click', function () {
            deleteButton.parentNode.remove();
          })
        })
      }, false);
    });

    showCartIconX.addEventListener('click', showContainerPrincipal, false);

    function showContainerPrincipal() {
      showCart.style.display = 'none';
      containerPrincipal.classList.remove('bg-opacity');
    };
  }

  getApi();

})(document);