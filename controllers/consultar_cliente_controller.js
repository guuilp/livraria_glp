app.controller('consultar_cliente_controller', function($scope, $http){
	$scope.respostas = [];

	var init = function(){
        $scope.buscar();
    };

	$scope.buscar = function(){
		$http.get('consultar_cliente.php')
			 .success(function(data){
			 	$scope.respostas = data;
			 })
			 .error(function(){
			 	console.error('Erro ao executar o GET cliente');
			 });
    };

    init();
});