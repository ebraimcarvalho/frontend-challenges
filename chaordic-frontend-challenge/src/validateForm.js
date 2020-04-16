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