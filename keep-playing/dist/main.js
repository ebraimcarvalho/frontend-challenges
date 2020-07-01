const form = document.getElementById('btn-form');
const span = document.getElementById('span-check');
const email = document.getElementById('email');

const formMobile = document.getElementById('btn-form-mobile');
const spanMobile = document.getElementById('span-check-mobile');
const emailMobile = document.getElementById('email-mobile');
form.addEventListener('click', checkForm, false);
formMobile.addEventListener('click', checkFormMobile, false);

function checkForm(e) {
  e.preventDefault()
  console.log(!!email.value)
  if(!email.value) {
    span.classList.remove("d-none")
  } else {
    span.classList.add('d-none')
    window.location.href="./mail-ok.html"
  }  
}

function checkFormMobile(e) {
  e.preventDefault()
  if(!emailMobile.value) {
    spanMobile.classList.remove("d-none")
  } else {
    spanMobile.classList.add('d-none')
    window.location.href="./mail-ok.html"
  }  
}