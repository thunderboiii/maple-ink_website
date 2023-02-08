<?php

if(isset($_POST["submit"])) {
    $name = $_POST["name"];
    $mailTo = $_POST["mail"];
    $time = $_POST["time"];
    $persons = $_POST["persons"];


    $subject = "Reservation at Maple Ink - Café";
    $mailFrom = "info@maple-ink.com";

    $headers = "From: " . $mailFrom;
    $txt = "Hello, " . $name . ". You have successfully reserved a table at " . $time . " in a total of " . $persons . " persons.\n\nPlease state your name to the waitress or waiter.";

    mail($mailTo, $subject, $txt, $headers);
    header("location: ../index.html#gastronomy?status=send");
}
else {
    header("location: ../index.html#gastronomy");
    exit();
}