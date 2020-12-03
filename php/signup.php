<?php
if(isset($_POST['submit'])){
    if (isset($_POST["check"])) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $pwd = $_POST["pwd"];
    
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "sablayja";
    
        $con = mysqli_connect($servername, $username, $password, $database) or die("Not Connected");
        if ($con->connect_error == false) {
            $query = "SELECT * FROM 'login' WHERE 'email'='$email'";
            $res = mysqli_query($con, $query);
            if (mysqli_num_rows($res) == 0) {
                $query = "INSERT INTO `login` (`name`, `email`, `password`) VALUES ('$name','$email','$pwd')";
                mysqli_query($con, $query);
                echo "Created....";
            } else {
                echo "Email Already Exist....";
            }
        }
    } else {
        echo "Click on Agree";
    }
}
else{
    echo "Re_Inter Data....";
}
?>
