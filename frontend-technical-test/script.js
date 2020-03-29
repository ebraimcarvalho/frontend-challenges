(function (doc, win) {
  'use strict';

  let eventDiv = doc.querySelector('[data-js="event"]');
  let buttonMenu = doc.querySelector('.header__icon-menu');

  function getApi() {
    let api = `http://www.mocky.io/v2/59f08692310000b4130e9f71`;

    fetch(api)
      .then(function (response) {
        let data = response.json();
        return data;
      })
      .then(function (data) {
        initApp(data);
      })
  }

  function initApp(data) {
    renderEvents(data);
  }

  function renderEvents(data) {
    var docFragm = doc.createDocumentFragment();
    console.log('loaded', data);
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
          <div class="event__market-${j+1}">
            <h3 class="event__market-type">${data[i].markets[j].name}</h3>`;
            for (let k = 0, selectionsLength = data[i].markets[j].selections.length; k < selectionsLength; k++) {
              divEventMarket.innerHTML += `
                <button class="market__select-${j}">
                  ${data[i].markets[j].selections[k].name} <br/>
                  ${data[i].markets[j].selections[k].price}
                </button>
              </div>
          `;
          }
          divRender.appendChild(divEventMarket);         
        }        
        docFragm.appendChild(divRender);
        eventDiv.appendChild(docFragm);
      }      
    }
    
  }

  getApi();

})(document, window);