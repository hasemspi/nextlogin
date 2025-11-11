<?php
include 'config.php';
header('Content-Type: application/json; charset=UTF-8');

// Get raw POST data
$raw = file_get_contents("php://input");
$data = json_decode($raw);

// Debug: log raw data
// file_put_contents('php://stderr', "Raw POST: $raw\n");

if (!$data) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid JSON received",
        "raw" => $raw
    ]);
    exit(); // stop execution
}
// echo $email;exit;
$email = $data->email ?? '';
$password = $data->password ?? '';

// Debug: check email/password
file_put_contents('php://stderr', "Email: $email, Password: $password\n");

// Query DB
$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

// Debug: log query
file_put_contents('php://stderr', "SQL: $sql\n");

if ($result && $result->num_rows > 0) {
    $user = $result->fetch_assoc();

    // Check MD5 password
    if ($user['password'] === md5($password)) {
        echo json_encode([
            "success" => true,
            "message" => "Login successful",
            "user" => $user
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Invalid password"
        ]);
    }
} else {
    echo json_encode([
        "success" => false,
        "message" => "User not found"
    ]);
}

$conn->close();
?>
