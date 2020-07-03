<?php
// Trocar os valores abaixo

$emailenvio = 'contato-form@keeponplaying.com.br';
$assunto = 'Contato Site Keep On Playing';
$url = 'https://keeponplaying.com.br/';

// Mude até aqui apenas

$nome = $_POST['name'];
$email = $_POST['email'];
$telefone = $_POST['phone'];

$body = "Mensagem enviada a partir do site <br> Nome do Contato : <strong>".$nome."</strong><br>" . "<br>CONTATOS: <br>Email: ".$email."<br>Telefone:".$phone;

if ($_POST['leaveblank'] != '') {

  echo "Não foi possível enviar o e-mail. Tente novamente ou entre em contato com " . $emailenvio;

} else if (isset($_POST['email'])) {

require ('./PHPMailer/PHPMailerAutoload.php');

$mail = new PHPMailer;
 $mail->IsSMTP();
 $mail->CharSet = 'UTF-8';
 $mail->Host = "smtp.keeponplaying.com.br"; // Servidor SMTP
 $mail->SMTPSecure = false; // conexão segura com TLS
 $mail->Port = 587; 
 $mail->SMTPAuth = true; // Caso o servidor SMTP precise de autenticação
 $mail->SMTPAutoTLS = false;
 $mail->Username = "contato-form@keeponplaying.com.br"; // SMTP username
 $mail->Password = "adri2811kop"; // SMTP password
 $mail->Sender = "contato-form@keeponplaying.com.br";
 $mail->From = $email; // From
 $mail->FromName = $nome ; // Nome de quem envia o email
 $mail->AddAddress($emailenvio, $nome); // Email e nome de quem receberá //Responder
 $mail->WordWrap = 50; // Definir quebra de linha
 $mail->IsHTML = true ; // Enviar como HTML
 $mail->CharSet = 'utf-8';
 $mail->Subject = "Formulário de contato -  Keep On Playing" ; // Assunto
 $mail->Body = $body; //Corpo da mensagem caso seja HTML

 $enviado = $mail->Send();
 // Limpa os destinatários e os anexos
 $mail->ClearAllRecipients();
 // Exibe uma mensagem de resultado do envio (sucesso/erro)
 if ($enviado) {
   // Enviada com sucesso
  header('location:mail-ok.php');
 } else {
   echo "Não foi possível enviar o e-mail.";
   echo "Detalhes do erro: " . $mail->ErrorInfo;
 }
}

?>

<?php
// // Recebendo dados do formulário
// $name = $_POST['name'];
// $email = $_POST['email'];
// $phone = $_POST['phone'];
// $subject = "Mensagem do Site";

// $headers = "Content-Type: text/html; charset=utf-8\r\n";
// $headers .= "From: $email\r\n";
// $headers .= "Reply-To: $email\r\n";

// // Dados que serão enviados
// $corpo = "Contato Keep On Playing <br>";
// $corpo .= "Nome: " . $name . " <br>";
// $corpo .= "Telefone: " . $phone . " <br>";
// $corpo .= "Email: " . $email . " <br>";

// // Email que receberá a mensagem (Não se esqueça de substituir)
// $email_to = 'contato-form@keeponplaying.com.br';

// // Enviando email
// $status = mail($email_to, mb_encode_mimeheader($subject, "utf-8"), $corpo, $headers);

// if ($status):
//   // Enviada com sucesso
//   header('location:mail-ok.php');
// else:
//   // Se der erro
//   header('location:index.php?status=erro');
// endif;
?>