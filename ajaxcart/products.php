<?php
//connect to the databAse
//four values : host (database location) , username, password, database name


$dbname = "rath0064";
$dbuser = "wrathor_puser";
$dbpass = "IrfP(HNfk!Fq";
$dbhost = "localhost";

 $link = new PDO("mysql:host=" . $dbhost . ";dbname=" . $dbname, $dbuser, $dbpass) or die("nothing happening");

//now if $_GET['master'] is defined
//this is when view button is clicked and lightbox functionality is fired
//
 if(isset($_GET['master']))
    {

        //get the everything from the database from the row which as product master as $_GET['master']
        $query= $link->query('SELECT * FROM musique_products where product_master="'.$_GET['master'].'"');
 
//if it is executed   
if($query)
    {

      $row =$query->fetch(PDO::FETCH_ASSOC);
        //get the object and convert to json  and echo it out
        echo json_encode($row);
    }
        
                
       
}
//else if $_GET['master'] is not defined 
//this when the loading products function is fired
  else
  {
    
//get all the rows from the table
    $query= $link->query('SELECT * FROM musique_products');

    if($query)
    {

//loop through assoc array
      while($row =$query->fetch(PDO::FETCH_ASSOC)) {

//put the values of each $row array in $data_array
//this is to echo out proper json
//if this is not done and just $row is echoed out the it will be like {} , which is syntax error for json

      $data_array[]=$row;
    }
        
        //this with echo out something like [{}]  which json loves       
         echo json_encode($data_array);
  }
    
       

        
         
    }

   //never ever ever forget to close your connection to database, hackers are lurking for it   
   $link=null;
?>