<?php
header('Access-Control-Allow-Origin: *');
include("db_info.php");

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$review = $data->review;


$query = $mysqli->prepare("INSERT INTO reviews (mname, review) VALUES (?, ?)");
$query->bind_param("ss", $name, $review);
$query->execute();

$response = [];
$response["status"] = "Mabrouk!";

$json_response = json_encode($response);
echo $json_response;


?>