<?php
    $host="localhost";
    $user="root";
    $pass="";
    $db="ilayfixit";
    $conn=new mysqli($host, $user, $pass, $db);
    if($conn->connect_error){
        echo "Failed to connect Database".$conn->connect_error;
    }
?>
