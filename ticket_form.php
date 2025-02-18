<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $requestType = $_POST['requestType'];

    $issueType = isset($_POST['issueType']) ? $_POST['issueType'] : null;
    $customDescription = isset($_POST['customDescription']) ? trim($_POST['customDescription']) : null;
    $name = isset($_POST['name']) ? trim($_POST['name']) : null;
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : null;
    $email = isset($_POST['email']) ? trim($_POST['email']) : null;
    $description = isset($_POST['description']) ? trim($_POST['description']) : null;
    $dbname =
    $conn=new mysqli('localhost',)
  
?>
