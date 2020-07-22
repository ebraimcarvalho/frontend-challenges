<?php

// Trocar os valores abaixo

$emailenvio = 'atendimento@aldotoschi.com.br';
$assunto = 'Formulário Site Aldo Toschi';
$url = 'http://www.aldotoschi.com.br/';

// Mude até aqui apenas
if(isset($_POST['nome'])) {
$nome = $_POST['nome'];
$email = $_POST['email'];
$telefone = $_POST['telefone'];
$mensagem = $_POST['mensagem'];
// $presencial = $_POST['presencial'];
// $teleatendimento = $_POST['teleatendimento'];
$selectDay = $_POST['select-day'];
$selectMonth = $_POST['select-month'];
$selectHour = $_POST['select-hour'];
$body = "$mensagem\n\n---------------\n\n$nome\n$telefone\n$email\n\n---------------\n\nDia: $selectDay\nMês: $selectMonth\nHorário: $selectHour";
} else {
  $email = $_POST['email'];
  $body = "Email: \n$email";
}

// if ($_POST['leaveblank'] != '' or $_POST['dontchange'] != 'http://') {

//   echo "Não foi possível enviar o e-mail. Tente novamente ou entre em contato com " . $emailenvio;
//   echo "<meta HTTP-EQUIV='Refresh' CONTENT='10;URL=" . $url . "'>";

// } else if (isset($_POST['email'])) {

if (isset($_POST['email'])) {
require ('./PHPMailer/PHPMailerAutoload.php');

$mail = new PHPMailer;
$mail->CharSet = 'UTF-8';
$mail->WordWrap = 70;
$mail->addAddress($emailenvio);

$mail->From = $email;
// $mail->FromName = $nome || $email;
$mail->AddReplyTo($email);
$mail->Subject = $assunto;

$mail->Body = $body;

if(!$mail->send()) {
  echo "Não foi possível enviar o e-mail. Tente novamente ou entre em contato com " . $emailenvio;
  echo "<meta HTTP-EQUIV='Refresh' CONTENT='10;URL=" . $url . "'>";
} else {
  echo "E-mail enviado com sucesso!";
  echo "<meta HTTP-EQUIV='Refresh' CONTENT='2;URL=" . $url . "'>";
}
}
?>