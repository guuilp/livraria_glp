<?php
	$dbh = new PDO('pgsql:host=localhost;dbname=livraria_glp', 'postgres', 'postgres');

	$sth = $dbh->prepare('SELECT * FROM cliente');

	$sth->execute();

	$result = $sth->fetchAll();

	$json_result = json_encode($result);

	echo $json_result;
?>