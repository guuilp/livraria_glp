<?php
	/*$dbh = new PDO('pgsql:host=localhost;dbname=livraria_glp', 'postgres');

	$dbh->query('SELECT * FROM cliente') or die($dbh->errorInfo());

	$result=$dbh->fetchAll();

	$json_result=json_encode($result);

	echo $json_result;*/

	$dbh = new PDO('pgsql:host=localhost;dbname=livraria_glp', 'postgres');

	$sth = $dbh->prepare('SELECT * FROM cliente');
	$sth->execute();

	$result = $sth->fetchAll();

	$json_result = json_encode($result);

	echo $json_result;
?>