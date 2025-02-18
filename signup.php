<?php

    include 'connection.php';
        
        $Fname=$_POST['fname'];
        $Lname=$_POST['lname'];
        $Email=$_POST['email'];
        $Phone_number=$_POST['phone_number'];
        $Username=$_POST['username'];
        $Password=$_POST['password'];


        $selectexist="SELECT * From users where email='$Email'";
        $result=$conn->query(query: $selectexist);
        if($result->num_rows>0){
            echo "Email is already register";
        }
        else{
            $insertsheilta="INSERT INTO users(fname, lname, email, phone_number, username, password)
                            VALUES ('$Fname','$Lname','$Email','$Phone_number','$Username','$Password')";
                if($conn->query($insertsheilta)==TRUE){
                    header(header: "location: index.html");
                }
                else{
                    echo "Error:".$conn->error;
                }
        }
?>