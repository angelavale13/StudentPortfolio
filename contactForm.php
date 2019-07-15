<?php

if(isset($_POST['submit'])){
    $name = $_POST['fName'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['commBox'];
    
    $mailTo = "gypsy.aav@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$name.".\n\n".$message;
    
    mail($mailTo, $txt, $headers);
    
    header("Location: index.php?mailsend");
}