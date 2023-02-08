<?php

if(isset($_POST["submit"])) {
    $name = $_POST["name"];
    $subject = "$name on your Contact Form";
    $company = $_POST["company"];
    $mailFrom = $_POST["mail"];
    $message = $_POST["message"];

    $mailTo = "info@maple-ink.com";
    $headers = "From: " . $mailFrom;
    $txt = "There's a new entry on your contact form by " . $name . " from " . $company . ".\n\n" . $message;

    mail($mailTo, $subject, $txt, $headers);
    header("location: ../index.html?status=send");
}
else {
    header("location: ../index.html");
    exit();
}