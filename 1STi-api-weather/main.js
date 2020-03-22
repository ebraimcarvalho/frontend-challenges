const $ = require('jquery');
const CryptoJS = require('crypto-js');
const axios = require('axios');

(function(win, doc) {
  'use strict';

  var $inputCity = doc.querySelector('[data-js="inputCity"]');
  var $tbody = doc.querySelector('[data-js="tbody"]');
  var $previsionCard = doc.querySelector('[data-js="previsionCard"]')
  window.onload = getCapitals();
  $inputCity.addEventListener('change', getCityData, true);

  function getCapitals() {
    const capitals = ['Rio de Janeiro', 'São Paulo', 'Belo Horizonte', 'Brasília', 'Belém', 
      'Salvador', 'Curitiba', 'Fortaleza', 'Manaus', 'João Pessoa'
    ];

    capitals.forEach(capital => getApi(capital));
  }

  function getApi(city) {
    var query = {'location': city, 'format': 'json', 'u': 'c'};

    // "https://weather-ydn-yql.media.yahoo.com/forecastrss?location=Rio%20de%20Janeiro&format=json&u=c"
    // "OAuth oauth_consumer_key="dj0yJmk9b2dPcHR5ZFhtdXlxJmQ9WVdrOU16ZHlaSGQwTXpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTI4",oauth_nonce="fvw2utewxi",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1584844026",oauth_version="1.0",oauth_signature="eBIc9jxQxyxl6K/7mVB5xdVBqOU=""
    // 37rdwt32

    var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
    var app_id = '37rdwt32';
    var method = 'GET';
    var consumer_key = 'dj0yJmk9b2dPcHR5ZFhtdXlxJmQ9WVdrOU16ZHlaSGQwTXpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTI4';
    var consumer_secret = 'ab49497e6e7861b5e38cb22bed2acd1d44fb3735';
    var concat = '&';
    var oauth = {
      'oauth_consumer_key': consumer_key,
      'oauth_nonce': Math.random().toString(36).substring(2),
      'oauth_signature_method': 'HMAC-SHA1',
      'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
      'oauth_version': '1.0'
    };

    var merged = {
      ...query,
      ...oauth
    }

    // Note the sorting here is required
    var merged_arr = Object.keys(merged).sort().map(function(k) {
      return [k + '=' + encodeURIComponent(merged[k])];
    });

    var signature_base_str = method
      + concat + encodeURIComponent(url)
      + concat + encodeURIComponent(merged_arr.join(concat));

    var composite_key = encodeURIComponent(consumer_secret) + concat;
    var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
    var signature = hash.toString(CryptoJS.enc.Base64);

    oauth['oauth_signature'] = signature;

    var auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
      return [k + '="' + oauth[k] + '"'];
    }).join(',');
        
    const instance = axios.create({
      baseURL: 'https://weather-ydn-yql.media.yahoo.com/forecastrss',
      timeout: 3000,
      headers: {
        'Authorization': auth_header,
        'X-Yahoo-App-Id': app_id 
      }
    });

    instance.get(`${url}?${$.param(query)}`).then(function ({ data }) {
      createItem(data);
    });

    function createItem(data) {
      console.log(data);
      var tr = doc.createElement('tr');
      var tdMin = doc.createElement('td');
      var tdMax = doc.createElement('td');
      var tdCity = doc.createElement('td');

      tdMin.textContent = `${data.forecasts[0].low}º`;
      tdMax.textContent = `${data.forecasts[0].high}º`;
      tdCity.textContent = `${data.location.city}`;

      tr.appendChild(tdMin);
      tr.appendChild(tdMax);
      tr.appendChild(tdCity);
      $tbody.appendChild(tr);
    }
  }

  function getCityData() {
    var city = $inputCity.value;
    // getApi(city);
    var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
    var method = 'GET';
    var app_id = '37rdwt32';
    var consumer_key = 'dj0yJmk9b2dPcHR5ZFhtdXlxJmQ9WVdrOU16ZHlaSGQwTXpJbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTI4';
    var consumer_secret = 'ab49497e6e7861b5e38cb22bed2acd1d44fb3735';
    var concat = '&';
    var query = {'location': city, 'format': 'json', 'u': 'c'};
    var oauth = {
        'oauth_consumer_key': consumer_key,
        'oauth_nonce': Math.random().toString(36).substring(2),
        'oauth_signature_method': 'HMAC-SHA1',
        'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
        'oauth_version': '1.0'
    };

    var merged = {
      ...query,
      ...oauth
    }

    // Note the sorting here is required
    var merged_arr = Object.keys(merged).sort().map(function(k) {
      return [k + '=' + encodeURIComponent(merged[k])];
    });
    var signature_base_str = method
      + concat + encodeURIComponent(url)
      + concat + encodeURIComponent(merged_arr.join(concat));

    var composite_key = encodeURIComponent(consumer_secret) + concat;
    var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
    var signature = hash.toString(CryptoJS.enc.Base64);

    oauth['oauth_signature'] = signature;
    var auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
      return [k + '="' + oauth[k] + '"'];
    }).join(',');

    const instance = axios.create({
      baseURL: 'https://weather-ydn-yql.media.yahoo.com/forecastrss',
      timeout: 3000,
      headers: {
        'Authorization': auth_header,
        'X-Yahoo-App-Id': app_id 
      }
    });

    instance.get(`${url}?${$.param(query)}`).then(function ({data}) {
      createCardItem(data);
      $inputCity.value = '';
    });

    function createCardItem(data) {
      $previsionCard.innerHTML = '';
      console.log(data);
      var divCard = doc.createElement('div');
      var paragraph = doc.createElement('p');
      var h3 = doc.createElement('h3');
      var paragraph2 = doc.createElement('p');
      var paragraph3 = doc.createElement('p');
      var separator = doc.createElement('hr');
      var divDays = doc.createElement('div');

      paragraph.innerText = `${data.location.city}, ${data.location.region} - ${data.location.country}`;
      h3.innerText = `${data.current_observation.condition.temperature}ºC ${data.current_observation.condition.text}`;
      paragraph2.innerHTML = `<span>Min: ${data.forecasts[0].low}º</span> <span>Máx: ${data.forecasts[0].high}º</span>`;
      paragraph3.innerHTML = `<span>Vento: ${data.current_observation.wind.speed}km/h</span> <span>Humidade: ${data.current_observation.atmosphere.humidity}%</span>`;
      divDays.innerHTML = `
        <div><h5>${data.forecasts[1].day}</h5><span>${data.forecasts[1].low}º</span> <span>${data.forecasts[1].high}º</span></div>
        <div><h5>${data.forecasts[2].day}</h5><span>${data.forecasts[2].low}º</span> <span>${data.forecasts[2].high}º</span></div>
        <div><h5>${data.forecasts[3].day}</h5><span>${data.forecasts[3].low}º</span> <span>${data.forecasts[3].high}º</span></div>
        <div><h5>${data.forecasts[4].day}</h5><span>${data.forecasts[4].low}º</span> <span>${data.forecasts[4].high}º</span></div>
        <div><h5>${data.forecasts[5].day}</h5><span>${data.forecasts[5].low}º</span> <span>${data.forecasts[5].high}º</span></div>
      `

      divCard.appendChild(paragraph);
      divCard.appendChild(h3);
      divCard.appendChild(paragraph2);
      divCard.appendChild(paragraph3);
      divCard.appendChild(separator);
      divCard.appendChild(divDays);
      divCard.setAttribute('class', 'divShow');
      divDays.setAttribute('class', 'divDays');
      console.log(divCard);

      $previsionCard.appendChild(divCard);
    }
  }

})(window, document);