(function (doc) {
  'use strict';

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

  getApi();
  function initApp(data) {
    console.log(data);
  }
})(document);