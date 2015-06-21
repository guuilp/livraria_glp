<?php
  $dbh = new PDO('pgsql:host=localhost;dbname=livraria_glp', 'postgres');
  /*
  * Recuperando todos os detalhes da requisição HTTP do Angular
  */ 
  $postdata = file_get_contents("php://input");
  $request = json_decode($postdata);
  @$titulo       = $request->titulo;
  @$subtitulo    = $request->subtitulo;
  @$isbn         = $request->isbn;
  @$paginas      = $request->paginas;
  @$edicao       = $request->edicao;
  @$editora      = $request->editora;
  @$ano          = $request->ano;
  @$assunto      = $request->assunto;
  @$idioma       = $request->idioma;
  @$codigoBarras = $request->codigoBarras;

  $dbh->exec("INSERT INTO PRODUTO VALUES( DEFAULT         , 
                                          '$titulo'       , 
                                          '$subtitulo'    , 
                                          '$isbn'         , 
                                          '$paginas'      , 
                                          '$edicao'       , 
                                          '$editora'      , 
                                          '$ano'          , 
                                          '$assunto'      , 
                                          '$idioma'       , 
                                          '$codigoBarras' )" ) or die( $dbh->errorInfo() );

?>