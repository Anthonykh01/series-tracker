<?php
header('Access-Control-Allow-Origin: *');

include("db_info.php");

$query = $mysqli->prepare("SELECT * FROM movies WHERE genre='true-story';");
$query->execute();

$array = $query->get_result();

$response = [];

while($movie = $array->fetch_assoc()){
    $response[] = $movie;
}

$json_response = json_encode($response);
echo $json_response;

?>