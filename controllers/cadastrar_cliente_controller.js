app.controller('cadastrar_cliente_controller', function($scope, $http){
	$scope.cliente = { nome  : '', 
					   cpf   : '', 
					   rg : '',
					   nascimento : '',
					   email : '',
					   telefone : '',
					   CEP : '',
					   Endereco : '',
					   numero : '',
					   complemento : '',
					   bairro : '',
					   cidade : '',
					   estado : '',
					   pais : '' };

    $scope.salvar = function() {
        var novoCliente = {
            nome        : $scope.cliente.nome,
            cpf         : $scope.cliente.cpf,
            rg          : $scope.cliente.rg   ,
            nascimento  : $scope.cliente.nascimento,
            email       : $scope.cliente.email,
            telefone    : $scope.cliente.telefone,
            cep         : $scope.cliente.cep,
            endereco    : $scope.cliente.endereco,
            numero      : $scope.cliente.numero,
            complemento : $scope.cliente.complemento,
            bairro      : $scope.cliente.bairro,
            cidade      : $scope.cliente.cidade,
            estado      : $scope.cliente.estado,
            pais        : $scope.cliente.pais,
        }

		$http.post('cadastrar_cliente.php', novoCliente)
			.success(function(){
				console.log('Cliente inserido com sucesso.');
			})
			.error(function(){
				console.error('Erro ao incluir um novo  cliente');
		})
    };
});