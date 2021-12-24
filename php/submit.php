<?php

$name = $_POST['name'];
$email = $_POST['email'];
$tel = $_POST['tel'];
$messages = $_POST['message'];
    
ini_set( 'display_errors', 1 );
error_reporting( E_ALL );
$subject = "Email do Site - ".$name;
$to = "webviewtech@gmail.com";
$message = "
<html>
<body>
<h3>Olá, me chamo $name.</h3>
<br>
<p>$messages</p>
<br>
<p>Email: $email</p>
<p>Telefone: $tel</p>
</body>
</html>
";
        
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';
$headers[] = 'From: '.$name.' <'.$email.'>';
        
mail($to,$subject,$message, implode("\r\n", $headers));


header('Location: ../index.html');

?>