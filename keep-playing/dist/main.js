const form = document.getElementById('btn-form');
const span = document.getElementById('span-check');
const email = document.getElementById('email');

const formMobile = document.getElementById('btn-form-mobile');
const spanMobile = document.getElementById('span-check-mobile');
const emailMobile = document.getElementById('email-mobile');
form.addEventListener('click', checkForm, false);
formMobile.addEventListener('click', checkFormMobile, false);

// form.ajax({
//   url : "mail_send.php",
//   type : 'post',
//   data : {
//     nome : "Maria Fernanda",
//     salario :'3500'
//   },
//   beforeSend : function(){
//     $("#resultado").html("ENVIANDO...");
//   }
// })
// .done(function(msg){
//   $("#resultado").html(msg);
// })
// .fail(function(jqXHR, textStatus, msg){
//   alert(msg);
// }); 

function checkForm(e) {
  e.preventDefault()
  console.log(!!email.value)
  if(!email.value) {
    span.classList.remove("d-none")
  } else {
    span.classList.add('d-none')
    e.returnValue = true;
    form.submit()
    window.location.href="./mail-ok.html"
  }  
}

function checkFormMobile(e) {
  e.preventDefault()
  if(!emailMobile.value) {
    spanMobile.classList.remove("d-none")
  } else {
    spanMobile.classList.add('d-none')
    e.returnValue = true
    form.submit()
    window.location.href="./mail-ok.html"
  }  
}