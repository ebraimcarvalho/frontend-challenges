(function (doc) {
  'use script';

  let $email = doc.querySelector('[data-js="email"]');
  let $form = doc.querySelector('form');

  $form.addEventListener('submit', checkEmail, false);

  function checkEmail(e) {
    e.preventDefault();

    let emailValue = $email.value;

    if(!isValidEmail(emailValue))
       return $form.classList.add('form--error');
      
    $form.classList.remove('form--error');
    let textSuccess = doc.createElement('p');
    textSuccess.textContent = 'Email OK!';
    textSuccess.classList.add('form--success');
    $form.appendChild(textSuccess);
  }

  function isValidEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
  }

})(document);