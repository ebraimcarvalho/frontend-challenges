<?php

function pegaValor($valor) {
    return isset($_POST[$valor]) ? $_POST[$valor] : '';
}

function validaEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function enviaEmail($de, $assunto, $mensagem, $para, $email_servidor) {
    $headers = "From: $email_servidor\r\n" .
               "Reply-To: $de\r\n" .
               "X-Mailer: PHP/" . phpversion() . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $body = "Nome: ".$name. "\r\n" .
            "CPF: ".$cpf. "\r\n" .
            "Telefone: ".$phone. "\r\n" .
            "Email: ".$de. "\r\n";
  
  mail($para, $assunto, nl2br($body), $headers);
}

$email_servidor = "contato-site@gbtel.com.br";
$para = "contato@gbtel.com.br";
$de = pegaValor("email");
$name = pegaValor("name");
$phone = pegaValor("phone");
$cpf = pegaValor("cpf");
$assunto = "Contato - GBTEL";

if ($name && validaEmail($de) && $phone) {
  enviaEmail($de, $assunto, $para, $email_servidor);
  $pagina = "mail_ok.php#contact";
} else {
  $pagina = "mail_error.php#contact";
}

header("location:$pagina");

?>
