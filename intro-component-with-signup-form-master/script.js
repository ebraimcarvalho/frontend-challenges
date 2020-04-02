(function(doc) {
  'use strict';

  console.log('hello world!');
  let inputs = doc.querySelectorAll('.form__input');
  let form = doc.querySelector('form');

  form.addEventListener('submit', checkForm, false);

  function checkForm(e) {
    e.preventDefault();
    Array.prototype.forEach.call(inputs, function(input) {
      if(input.value == '') {
        input.parentNode.classList.add('form__control--error');
      } else {
        input.parentNode.classList.remove('form__control--error');
      }
    });
    console.log(inputs[2])
  }

  Array.prototype.forEach.call(inputs, function(input) {
    input.addEventListener('', validateInput, false);
  });

  function validateInput(e) {
    e.preventDefault();
    console.log('input click!');
  }
})(document);