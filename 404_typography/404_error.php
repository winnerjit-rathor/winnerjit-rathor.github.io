<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>404'd</title>
<script src="/404_error/js/jquery-1.11.1.min.js"></script>
<script src="/404_error/js/typography.js"></script>
<link href="/404_error/css/404.css" rel="stylesheet" type="text/css">
<link rel="shortcut icon" href="/404_error/images/favicon.ico" type="image/x-icon">
<link rel="icon" href="/404_error/images/favicon.ico" type="image/x-icon">
</head>

<body>
<main>
<div id="typography">
    <div id="scene1">
        <span id="ht">HI, THERE</span>
        <span id="ia">I AM</span>
        <span id="w">winner</span>
    </div>
    <div id="scene2">
        <span id="and">AND</span>
        <span id="it">It</span>
        <span id="seems">SEEMS</span>
        <span id="like">LIKE</span>
        <span id="you">YOU</span>
        <span id="have">HAVE</span>
        <span id="been">BEEN</span>
        </div>
    <div id="scene3">
 	   <span id="four">404'd</span>
       <span id="dwi">keep staring at </span>
	   
	   <span id="link"><?php 
	   	$actual_link = $_SERVER['REQUEST_URI'];
	   $url = trim($actual_link, '/');
	   echo substr($url, strrpos($url, '/'));
	   ?></span>
       <span id="or">Or</span>
      <span id="checkOut">Checkout</span>  <a href="/" id="musique">My Portfolio</a>
       
    </div>
</div>
</main>
</body>
</html>
