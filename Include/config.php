<?php

    $conn = mysqli_connect("localhost","root","","dbams");

    if(!$conn){
        echo "Connection error! ".mysqli_connect_error();
    }
   

?>