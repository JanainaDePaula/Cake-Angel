<!DOCTYPE html>
<html>
<head>
	<link rel="sortcut icon" type="image/x-icon" href="img/geral/favicon.ico"/>
	<link rel="stylesheet" type="text/css" href="css/enviado.css"/>
	<title>Pedido</title>
</head>
<body>
	<section>
	<figure>
      <img src="img/geral/logo.png" alt="Logo Cake Angel"/>
    </figure>

    <a href="index.html"><p>Voltar</p></a>
  <div>
  <?php 
    $nome = $_POST["tName"];
    $email = $_POST["tMail"];
    $tel = $_POST["tTel"];
    $produto = $_POST["tProd"];
    $msg = $_POST["tMsg"];

    $host = "mysql.hostinger.com.br";
	$user = "u815276166_ca";
	$pass = "parte180608";
	$banco = "u815276166_pedi";

	// Create connection
	$conn = mysqli_connect($host, $user, $pass, $banco);
	// Check connection
	if (!$conn) {
   		die("Connection failed: " . mysqli_connect_error());
	}

	$sql = "INSERT INTO pedido (nome, email, telefone, produto, mensagem)
	VALUES ('$nome', '$email', '$tel', '$produto', '$msg')";

	if (mysqli_query($conn, $sql)) {
    	echo "<h1>Enviado com sucesso!</h1>";
	} else {
   		 echo "Error: " . $sql . "<br>" . mysqli_error($conn);
	}

	mysqli_close($conn);

  ?>
  </div>
  </section>
</body>
</html>
