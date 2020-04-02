(function(doc) {
  'use strict';

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
    if (!checkEmail(inputs[2].value)) {
      inputs[2].parentNode.classList.add('form__control--error');
    };
  }

  function checkEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  }

})(document);