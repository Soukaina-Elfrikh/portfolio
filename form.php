<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "formportfolio";

$name = $_POST["sender-name"];
$email = $_POST["sender-email"];
$message = $_POST["message"];

// Créer une connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Préparer et exécuter la requête d'insertion
$sql = "INSERT INTO cmnts (name, email, message) VALUES ('$name', '$email', '$message')";
if ($conn->query($sql) === TRUE) {
  echo '<script>alert("Merci pour votre commentaire !");</script>';
 // Affichage du message de remerciement
} else {
  echo "Erreur: " . $sql . "<br>" . $conn->error;
}

// Fermer la connexion
$conn->close();
?>
