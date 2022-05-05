<?php
header('Access-Control-Allow-Origin: *');
include("db_info.php");

$data = json_decode(file_get_contents("php://input"));

$email = $data->email;
$password = $data->password;

$hashed =password_hash($password, PASSWORD_BCRYPT);

$query = $mysqli->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
$query->bind_param("ss", $email, $hashed);
$query->execute();

$response = [];
$response["status"] = "Mabrouk!";

$json_response = json_encode($response);
echo $json_response;


?>