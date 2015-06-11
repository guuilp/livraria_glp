app.controller('consultar_livro_controller', function($scope, $http){
	$scope.listaDeLivro = [];

	var init = function(){
        $scope.buscar();
    };

	$scope.buscar = function(){
		$http.get('consultar_livro.php')
			 .success(function(data){
			 	$scope.listaDeLivro = data;
			 })
			 .error(function(){
			 	console.error('Erro ao executar o GET do livro');
			 });
    };

    init();
});