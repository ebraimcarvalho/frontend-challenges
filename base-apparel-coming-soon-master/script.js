(function (doc) {
  'use script';

  let $email = doc.querySelector('[data-js="email"]');
  let $form = doc.querySelector('form');

  $form.addEventListener('submit', checkEmail, false);

  function checkEmail(e) {
    e.preventDefault();
    let emailValue = $email.value;

    if(!isValidEmail(emailValue)) {
      $form.classList.remove('form--success');
      $form.classList.add('form--error');
    } else {      
      $form.classList.remove('form--error');
      $form.classList.add('form--success');
      $email.value = '';
    }
  }

  function isValidEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  }

})(document);