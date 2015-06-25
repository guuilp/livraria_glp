<?php

  $dbh = new PDO('pgsql:host=localhost;dbname=livraria_glp', 'postgres', 'postgres');
  $dbh->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
  $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  /*
  * Recuperando todos os detalhes da requisição HTTP do Angular
  */ 
  $postdata = file_get_contents("php://input");
  $request  = json_decode($postdata);
  @$id      = $request->id;

  $sth = $dbh->prepare("DELETE FROM produto WHERE ID = '$id'");

  $sth->execute();

?>