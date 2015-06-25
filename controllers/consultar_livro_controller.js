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

    $scope.deletar = function(id){
    	$http.delete('remover_livro.php',{data: {id: id}})
    		 .success(function(data){
    		 	console.log('Livro removido com sucesso!' + data);
    		 	$scope.buscar();
    		 })
    		 .error(function(){
    		 	console.error('Erro ao remover Livro');
    		 })
    };

    init();
});