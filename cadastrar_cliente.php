<?php
  $dbh = new PDO('pgsql:host=localhost;dbname=livraria_glp', 'postgres');
  /*
  * Recuperando todos os detalhes da requisição HTTP do Angular
  */ 
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  @$nome        = $request->nome;
  @$cpf         = $request->cpf;
  @$rg          = $request->rg;
  @$nascimento  = $request->nascimento;
  @$email       = $request->email;
  @$telefone    = $request->telefone;
  @$cep         = $request->cep;
  @$endereco    = $request->endereco;
  @$numero      = $request->numero;
  @$complemento = $request->complemento;
  @$bairro      = $request->bairro;
  @$cidade      = $request->cidade;
  @$estado      = $request->estado;
  @$pais        = $request->pais;

  $dbh->exec("INSERT INTO CLIENTE VALUES( DEFAULT        , 
                                          '$nome'        , 
                                          '$cpf'         , 
                                          '$rg'          , 
                                          '$nascimento'  , 
                                          '$email'       , 
                                          '$telefone'    , 
                                          '$cep'         , 
                                          '$endereco'    , 
                                          '$numero'      , 
                                          '$complemento' , 
                                          '$bairro'      , 
                                          '$cidade'      , 
                                          '$estado'      , 
                                          '$pais'       )" ) or die( $dbh->errorInfo() );

?>