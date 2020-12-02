<?php
$name = $_POST["name"];
$email = $_POST["email"];
$pwd = $_POST["pwd"];
$chk =$_POST["check"];

echo $chk;

// $servername = "localhost";
// $username = "root";
// $password = "";
// $database = "sablayja";

// $con = mysqli_connect($servername, $username, $password, $database) or die("Not Connected");
// if ($con->connect_error == false) {
//     $query = "SELECT * FROM 'login' WHERE 'email'='$email'";
//     $res = mysqli_query($con, $query);
//     if (mysqli_num_rows($res) > 0) {
//         echo "Email Already Exist....";
//     } else {
//         $query = "INSERT INTO `login` (`id`, `name`, `email`, `password`) VALUES ('1','$name','$email','$pwd')";
//         mysqli_query($con, $query);
//         echo "Created....";
//     }
//}
?>