<?php
 // Adiciona o arquivo class.phpmailer.php - você deve especificar corretamente o caminho da pasta com o este arquivo.
 require_once("./PHPMailer/PHPMailerAutoload.php");
 // Inicia a classe PHPMailer
 $mail = new PHPMailer();
 // DEFINIÇÃO DOS DADOS DE AUTENTICAÇÃO - Você deve auterar conforme o seu domínio!
 $mail->IsSMTP(); // Define que a mensagem será SMTP
 $mail->Host = "smtp.keeponplaying.com.br"; // Seu endereço de host SMTP
 $mail->SMTPAuth = true; // Define que será utilizada a autenticação -  Mantenha o valor "true"
 $mail->Port = 587; // Porta de comunicação SMTP - Mantenha o valor "587"
 $mail->SMTPSecure = false; // Define se é utilizado SSL/TLS - Mantenha o valor "false"
 $mail->SMTPAutoTLS = false; // Define se, por padrão, será utilizado TLS - Mantenha o valor "false"
 $mail->Username = 'contato-form@keeponplaying.com.br'; // Conta de email existente e ativa em seu domínio
 $mail->Password = 'adri2811kop'; // Senha da sua conta de email
 // DADOS DO REMETENTE
 $mail->Sender = "contato-form@keeponplaying.com.br"; // Conta de email existente e ativa em seu domínio
 $mail->From = "contato-form@keeponplaying.com.br"; // Sua conta de email que será remetente da mensagem
 $mail->FromName = "Contato Formulário Site"; // Nome da conta de email
 // DADOS DO DESTINATÁRIO
 $mail->AddAddress('adriano.carvalho@keeponplaying.com.br', 'Nome - Adriano'); // Define qual conta de email receberá a mensagem
 //$mail->AddAddress('recebe2@dominio.com.br'); // Define qual conta de email receberá a mensagem
 //$mail->AddCC('copia@dominio.net'); // Define qual conta de email receberá uma cópia
 //$mail->AddBCC('copiaoculta@dominio.info'); // Define qual conta de email receberá uma cópia oculta
 // Definição de HTML/codificação
 $mail->IsHTML(true); // Define que o e-mail será enviado como HTML
 $mail->CharSet = 'utf-8'; // Charset da mensagem (opcional)
 // DEFINIÇÃO DA MENSAGEM
 $mail->Subject  = "Formulário de Contato"; // Assunto da mensagem
 $mail->Body .= " Nome: ".$_POST['name']."
"; // Texto da mensagem
 $mail->Body .= " E-mail: ".$_POST['email']."
"; // Texto da mensagem
 $mail->Body .= " Phone: ".$_POST['phone']."
"; // Texto da mensagem
 // ENVIO DO EMAIL
 $enviado = $mail->Send();
 // Limpa os destinatários e os anexos
 $mail->ClearAllRecipients();
 // Exibe uma mensagem de resultado do envio (sucesso/erro)
 if ($enviado) {
   echo "E-mail enviado com sucesso!";
   header('location:mail-ok.html');
 } else {
   echo "Não foi possível enviar o e-mail.";
   echo "Detalhes do erro: " . $mail->ErrorInfo;
 }

?>

<?php
// Trocar os valores abaixo

// $emailenvio = 'adriano.carvalho@keeponplaying.com.br';
// $assunto = 'Contato Site Keep On Playing';
// $url = 'https://keeponplaying.com.br/';

// // Mude até aqui apenas

// $nome = $_POST['name'];
// $email = $_POST['email'];
// $telefone = $_POST['phone'];

// $body = "Mensagem enviada a partir do site <br> Nome do Contato : <strong>".$nome."</strong><br>" . "<br>CONTATOS: <br>Email: ".$email."<br>Telefone:".$phone;

// if ($_POST['leaveblank'] != '') {

//   echo "Não foi possível enviar o e-mail. Tente novamente ou entre em contato com " . $emailenvio;

// } else if (isset($_POST['email'])) {

// require ('./PHPMailer/PHPMailerAutoload.php');

// $mail = new PHPMailer;
//  $mail->IsSMTP();
//  $mail->CharSet = 'UTF-8';
//  $mail->Host = "smtp.keeponplaying.com.br"; // Servidor SMTP
//  $mail->SMTPSecure = false; // conexão segura com TLS
//  $mail->Port = 587; 
//  $mail->SMTPAuth = true; // Caso o servidor SMTP precise de autenticação
//  $mail->SMTPAutoTLS = false;
//  $mail->Username = "contato-form@keeponplaying.com.br"; // SMTP username
//  $mail->Password = "adri2811kop"; // SMTP password
//  $mail->Sender = "contato-form@keeponplaying.com.br";
//  $mail->From = $email; // From
//  $mail->FromName = $nome ; // Nome de quem envia o email
//  $mail->AddAddress($emailenvio, $nome); // Email e nome de quem receberá //Responder
//  $mail->WordWrap = 50; // Definir quebra de linha
//  $mail->IsHTML = true ; // Enviar como HTML
//  $mail->CharSet = 'utf-8';
//  $mail->Subject = "Formulário de contato -  Keep On Playing" ; // Assunto
//  $mail->Body = $body; //Corpo da mensagem caso seja HTML

//  $enviado = $mail->Send();
//  // Limpa os destinatários e os anexos
//  $mail->ClearAllRecipients();
//  // Exibe uma mensagem de resultado do envio (sucesso/erro)
//  if ($enviado) {
//    // Enviada com sucesso
//   header('location:mail-ok.html');
//  } else {
//    echo "Não foi possível enviar o e-mail.";
//    echo "Detalhes do erro: " . $mail->ErrorInfo;
//  }
// }

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