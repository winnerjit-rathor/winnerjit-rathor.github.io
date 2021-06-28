<?php
 //use php mail() function..
 //set header such as (reply-to, from , cc , or bcc)
 //set message (email body)
 //give the userr a message(did the email work)
 //the server will tell you if the email sent successfully - it will not tell you if the recieving party rejected the eamil or recieve it 
 
 if(isset($_POST['email'])  ) {

    $userInput=trim($_POST['name']) . trim($_POST['email']) . trim($_POST['msg']);

    if(preg_match("/multipart\alternative|content-type:|cc:|bcc:|boundry=)/i", $userInput)) {

        die('GO away jerk');
    }
    //getting the character type
    $fromName=trim($_POST['name']);

    //getting the email of the user
    $fromEmail=trim($_POST['email']);

    //getting the problem 
    $msg=$fromEmail. "\n\n" . $fromName. "\n\n" . $_POST['msg'];

    //setting up headers
    //using user email input as from value
    $headers="From: " .$fromName. "  <".  $fromEmail ."> \n";
    $headers .= "Reply-To: " .$fromName. "  <".  $fromEmail ."> \n";


    //making content type plain text
    $headers .="Content-Type: text/plain; charset=\"utf-8\" \n";

    //mail function : who the email is going to , the subject , the message  and any header if present 

    ini_set('SMTP', "smtpout.secureserver.net");
    ini_set('smtp_port', "25");
    
   $sendMail =mail('winnerjitrathor@gmail.com', 'From my Website' , $msg , $headers);

   if($sendMail){
        echo $sendMail;
    }
 else {

       echo   $sendMail;
    }

 } 

?>