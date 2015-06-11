app.controller('cadastrar_livro_controller', function($scope, $http){
	$scope.livro = {   titulo       : '', 
					   subtitulo    : '', 
					   isbn         : '',
					   paginas      : '',
					   edicao       : '',
					   editora      : '',
					   ano          : '',
					   assunto      : '',
					   idioma       : '',
					   codigoBarras : ''
					};

    $scope.salvar = function() {
        var novoLivro = {
            titulo       : $scope.livro.titulo,
            subtitulo    : $scope.livro.subtitulo,
            isbn         : $scope.livro.isbn   ,
            paginas      : $scope.livro.paginas,
            edicao       : $scope.livro.edicao,
            editora      : $scope.livro.editora,
            ano          : $scope.livro.ano,
            assunto      : $scope.livro.assunto,
            idioma       : $scope.livro.idioma,
            codigoBarras : $scope.livro.codigoBarras
        }

		$http.post('cadastrar_livro.php', novoLivro)
			.success(function(){
				console.log('Livro inserido com sucesso.');
			})
			.error(function(){
				console.error('Erro ao incluir um novo Livro');
		})
    };
});