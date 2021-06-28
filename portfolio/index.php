<!doctype html>
<html lang="en-ca">
   <head>
      <title>Winnerjit Singh Rathor | Portfolio</title>
      <!-- Meta Tags -->
      <meta charset="utf-8">
      <meta name="author" content="Winnerjit Singh Rathor">
      <meta name="description" content="My name is Winnerjit Singh Rathor. I am a Web Developer, and UI/UX Designer.  I am enthusiastic and passionate about all forms of programming." >
      <meta name="keywords" content="Winner, Winnerjit , winner , rathor , singh, winner rathor, Winner Rathor,  Rathor , winnerit singh rathor , Winnerjit Singh Rathor, winner rathor designer, winner rathor developer, winner ottawa, 
         winnerjit ottawa, winnerjit developer, rathor ottawa, rathor developer, winner rathor ottawa, web designer, web developer, ottawa web design, ottawa website , ottawa developer, ottawa web developer , developer , top developer">
      <meta http-equiv='Content-Type' content='Type=text/html; charset=utf-8'>
      <meta name="viewport" content="width=device-width ,initial-scale=1.0, maximum-scale=1.0 ,user-scalable=1">
      <meta http-equiv="content-language" content="en" />
      <!--  Link tags -->
      <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
      <link rel="icon" href="images/favicon.ico" type="image/x-icon">
      <link href="css/style.css" type="text/css" rel="stylesheet">
      <link rel="icon" type="image/x-icon" href="images/favicon.ico" />
      <!--  script tags -->
      <script src="js/jquery-1.11.1.min.js"></script>
      <script src="js/jquery.viewport.mini.js"></script>
   </head>
   <body>
      <a class="skipLink" href="#about">Skip to main Content</a>
      <div id="preloadOverlay"><img alt="preloader Image" src="images/preload.gif"></div>
      <div id="bgImgHolder"></div>
      <div id="overlay">
         <?php
            // PDO
            $pdo = new PDO("mysql:host=localhost;dbname=DBNAME", 'DBUSER', 'DBPASS');
            
               $st = $pdo->prepare('SELECT * from projects');
                 
               $st->execute();
            
               $projects = $st->fetchAll(PDO::FETCH_ASSOC);
                 
               foreach ($projects as $project) {
            ?>
         <div class="workOverlay" id="piece<?php echo $project['pid'] ?>">
            <h4><?php echo $project['title'] ?></h4>
           <!-- <a class="workLink" target="_blank" href="<?php echo $project['link'] ?>"> -->
               <img alt="<?php echo $project['title'] ?>" src="<?php echo $project['full_img_url'] ?>">
               <!-- <svg  version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 419 328.1" enable-background="new 0 0 419 328.1" xml:space="preserve">
                  <polygon fill="#D7D7D7" fill-opacity="0.36" stroke="#F9B14A" stroke-width="8" stroke-miterlimit="10" points="322.1,20.2 
                     404.7,105.8 404.7,105.8 208.6,314.5 12,104.1 99.5,20.2 "/>
                  <image overflow="visible" width="800" height="800" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgAQMAAADhvpQrAAAAA1BMVEX/s0c+siB/AAAAZUlEQVR4
                     2u3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                     AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgMO68AAXYDd9gAAAAASUVORK5C
                     YII=" transform="matrix(0.3005 0 0 0.3005 -338.4445 648.9412)">
                  </image>
               </svg> -->
               <span class="visitText"><?php echo $project['link_text'] ?></span>
            <!-- </a> -->
            <a class="overlayClose">X</a>       
            <p class="client">Client: <?php echo $project['client'] ?></p>
            <p class="desc"><?php echo $project['desc'] ?></p>
         </div>
        <?php
            }
        ?>
      </div>
      <a id="mainHam">
      <span class="mhTop"></span>
      <span class="mhMiddle"></span>
      <span class="mhBottom"></span>
      </a>
      <div id="sideNav">
         <ul id="mainNav">
            <li><a href="#about" data-pos="about" >About</a></li>
            <li><a href="#skills" data-pos="skills" >Skills</a></li>
            <li><a href="#work" data-pos="work" >Work</a></li>
            <li><a href="#contact" data-pos="contact" >Contact</a></li>
         </ul>
         <div id="sideLogo">
            <a class="mainSel" data-pos="home" >
            <img alt="Logo" src="images/logo.png">
            </a>
         </div>
      </div>
      <div id="wrapper">
         <section data-tname="Home" id="home">
            <h4>Home</h4>
            <div class="main">
               <div id="logoContainer">
                  <img alt="Logo" src="images/logo.png">
               </div>
               <div id="nameText">
                  <p>Winnerjit Singh Rathor</p>
                  <p>Web Developer</p>
               </div>
            </div>
            <div id="downArrow">
               <a title="Move to Next Section" data-pos="about">
               <img id="dsup" alt="Move to Next Section" src="images/downShow.png">
               <img id="dsdown" alt="Move to Next Section"  src="images/downShow.png">
               </a>
            </div>
         </section>
         <section data-tname="About" id="about">
            <div class="main">
               <h4>About Me</h4>
               <div id="myImageContainer">
                  <svg  version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 419 328.1" enable-background="new 0 0 419 328.1" xml:space="preserve">
                     <polygon fill="#D7D7D7" fill-opacity="0.36" stroke="#F9B14A" stroke-width="8" stroke-miterlimit="10" points="322.1,20.2 
                        404.7,105.8 404.7,105.8 208.6,314.5 12,104.1 99.5,20.2 "/>
                     <image overflow="visible" width="800" height="800" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgAQMAAADhvpQrAAAAA1BMVEX/s0c+siB/AAAAZUlEQVR4
                        2u3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgMO68AAXYDd9gAAAAASUVORK5C
                        YII=" transform="matrix(0.3005 0 0 0.3005 -338.4445 648.9412)">
                     </image>
                  </svg>
                  <img alt="My Image" src="images/me.png">
               </div>
               <div id="me">
                  <p>
                     I am a Web Developer and Designer from Ottawa, Ontario, Canada. I am enthusiastic and passionate about all forms of programming. I have an obsession for solving problems and efficient coding which can be traced back to 
                     my affection for Mathematics. I spend my days merging front-end languages (HTML5,SASS/CSS, AngularJS and JavaScript/JQuery) and back-end languages(PHP and NodeJS) to produce the finest quality websites and web apps. I specialize in 
                     Content Management and Ecommerce Systems such as WordPress, Shopify and Drupal. I also enjoy doing user experience and visual design along with motion graphics.
                     While not programming or designing masterpieces, I am found in the gym, playing chess, photographing
                     the nature or chilling out with friends.    
                  </p>
               </div>
            </div>
         </section>
         <section data-tname="Skills" id="skills">
            <div class="main">
               <h4>Skills</h4>
               <div id="skillsCont">
                  <div class="skill">
                     <svg class="diamondsvg"  version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 419 328.1" enable-background="new 0 0 419 328.1" xml:space="preserve">
                        <polygon fill="#D7D7D7" fill-opacity="0.36" stroke="#F9B14A" stroke-width="8" stroke-miterlimit="10" points="322.1,20.2 
                           404.7,105.8 404.7,105.8 208.6,314.5 12,104.1 99.5,20.2 "/>
                        <image overflow="visible" width="800" height="800" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgAQMAAADhvpQrAAAAA1BMVEX/s0c+siB/AAAAZUlEQVR4
                           2u3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                           AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgMO68AAXYDd9gAAAAASUVORK5C
                           YII=" transform="matrix(0.3005 0 0 0.3005 -338.4445 648.9412)">
                        </image>
                     </svg>
                     <h3>Web Programming</h3>
                     <p>Developing dynamic and fully responsive websites using Languages such as HTLM5,
                        CSS3/ Sass, AngularJS, JavaScript and its libraries, PHP and MySQL using coders best friends the Text Editors like
                        SublimeText &amp; Brackets
                     </p>
                     <img alt="Html Tag" class="skillIcon" src="images/html-tag-icon-614x460.png">
                  </div>
                  <div class="skill">
                     <svg class="diamondsvg"  version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 419 328.1" enable-background="new 0 0 419 328.1" xml:space="preserve">
                        <polygon fill="#D7D7D7" fill-opacity="0.36" stroke="#F9B14A" stroke-width="8" stroke-miterlimit="10" points="322.1,20.2 
                           404.7,105.8 404.7,105.8 208.6,314.5 12,104.1 99.5,20.2 "/>
                        <image overflow="visible" width="800" height="800" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgAQMAAADhvpQrAAAAA1BMVEX/s0c+siB/AAAAZUlEQVR4
                           2u3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                           AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgMO68AAXYDd9gAAAAASUVORK5C
                           YII=" transform="matrix(0.3005 0 0 0.3005 -338.4445 648.9412)">
                        </image>
                     </svg>
                     <h3>UI/UX design</h3>
                     <p>
                        Prototyping and wire framing websites and web apps, Planning and researching about use
                        experience and designing user interfaces using the designers best friends like Axure, Illustrator &amp;
                        Photoshop
                     </p>
                     <img alt="Screen" class="skillIcon" src="images/screen.png">
                  </div>
                  <div class="skill" >
                     <svg class="diamondsvg"  version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 419 328.1" enable-background="new 0 0 419 328.1" xml:space="preserve">
                        <polygon fill="#D7D7D7" fill-opacity="0.36" stroke="#F9B14A" stroke-width="8" stroke-miterlimit="10" points="322.1,20.2 
                           404.7,105.8 404.7,105.8 208.6,314.5 12,104.1 99.5,20.2 "/>
                        <image overflow="visible" width="800" height="800" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgAQMAAADhvpQrAAAAA1BMVEX/s0c+siB/AAAAZUlEQVR4
                           2u3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                           AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgMO68AAXYDd9gAAAAASUVORK5C
                           YII=" transform="matrix(0.3005 0 0 0.3005 -338.4445 648.9412)">
                        </image>
                     </svg>
                     <h3>Communication</h3>
                     <p> Working in team projects, communicating with clients, compiling handoff packages,
                        and coordinating projects using team management software’s like Teamwork, Trello.
                     </p>
                     <img alt="Communication Icon" class="skillIcon" src="images/group.png">
                  </div>
               </div>
            </div>
         </section>
         <section data-tname="Work" id="work">
            <div class="main">
               <img alt="Left Arrow" id="arrowLeft" src="images/arrow_left.png">
               <h4>Work</h4>
               <div id="workPieceContainer">
              <?php        
                  foreach ($projects as $project) {
              ?>
                  <div data-piece="piece<?php echo $project['pid'] ?>" class="portfolioPiece">
                     <span ><?php echo $project['title'] ?></span>
                     <img alt="<?php echo $project['title'] ?> Thumbnail" src="<?php echo $project['thumb_url'] ?>">
                     <svg class="workSvg" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 419 328.1" enable-background="new 0 0 419 328.1" xml:space="preserve">
                        <polygon fill="#D7D7D7" fill-opacity="0.36" stroke="#F9B14A" stroke-width="8" stroke-miterlimit="10" points="322.1,20.2 
                           404.7,105.8 404.7,105.8 208.6,314.5 12,104.1 99.5,20.2 "/>
                        <image overflow="visible" width="800" height="800" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgAQMAAADhvpQrAAAAA1BMVEX/s0c+siB/AAAAZUlEQVR4
                           2u3BMQEAAADCoPVPbQZ/oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
                           AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgMO68AAXYDd9gAAAAASUVORK5C
                           YII=" transform="matrix(0.3005 0 0 0.3005 -338.4445 648.9412)">
                        </image>
                     </svg>
                  </div>
                <?php
                    }
                  $pdo = null;
                ?>
               </div>
               <img alt="Right Arrow" id="arrowRight" src="images/arrow_right.png">
            </div>
         </section>
         <section data-tname="Contact" id="contact">
            <div class="main">
               <div id="formContainer">
                  <h4>Contact</h4>
                  <div id="emailMsg"><span> Message Successfully Sent!</span></div>
                  <form id="contactForm" class="vertical">
                     <input id="cName" type="text"  name="cName"  placeholder="Name"/>
                     <input id="cEmail" name='cEmail' type="email" placeholder="Email" />
                     <textarea id="msgText" placeholder="Comments.."></textarea>
                     <button id="submitContact"><span>Send</span></button>
                  </form>
               </div>
            </div>
            <div id="social">
               <a title="Facebook" target="_blank" href="http://ca.linkedin.com/pub/winnerjit-singh-rathor/a0/19/785">
               <img alt="Facebook" src="images/fb.png">
               </a>
               <a title="linked In" target="_blank" href="http://ca.linkedin.com/pub/winnerjit-singh-rathor/a0/19/785">
               <img alt="Linked In" src="images/linkedin.png">
               </a>
               <a title="Google +" target="_blank" href="http://ca.linkedin.com/pub/winnerjit-singh-rathor/a0/19/785">
               <img alt="Google +" src="images/g+.png">
               </a>
            </div>
         </section>
      </div>
      <script src="js/cool.js"></script>
      <script>
         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
         (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
         m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
         })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
         
         ga('create', 'UA-86799255-1', 'auto');
         ga('send', 'pageview');
         
      </script>
   </body>
</html>