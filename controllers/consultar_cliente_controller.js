app.controller('consultar_cliente_controller', function($scope, $http){
	$scope.listaDeCliente = [];

	var init = function(){
        $scope.buscar();
    };

	$scope.buscar = function(){
		$http.get('consultar_cliente.php')
			 .success(function(data){
			 	$scope.listaDeCliente = data;
			 })
			 .error(function(){
			 	console.error('Erro ao executar o GET do cliente');
			 });
    };

    $scope.deletar = function(id){
    	$http.delete('remover_cliente.php',{data: {id: id}})
    		 .success(function(data){
    		 	console.log('Cliente removido com sucesso!' + data);
    		 	$scope.buscar();
    		 })
    		 .error(function(){
    		 	console.error('Erro ao remover cliente');
    		 })
    };

    init();
});