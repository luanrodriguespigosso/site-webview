<?php

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$messages = $_POST['message'];

$mail->Body = '<strong>Nome:  </strong>'.$name.'<br>  <strong>Mensagem: </strong>'.$messages.'<br>  <strong>Email: </strong>'.$email;
$mail->AltBody = $name.' --- '.$messages.' --- '.$email;

    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "smtp.hostinger.com.br";
    $subject = "Email do Site - ".$name;
		$to = "webviewtech@gmail.com";
    $message = 'Nome: '.$name.' --- Menssagem: '.$messages.' --- Email: '.$email;
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);

header('Location: ../index.html');

?>
