app.controller('cadastrar_cliente_controller', function($scope, $http){
	$scope.cliente = { nome        : '', 
					   cpf         : '', 
					   rg          : '',
					   nascimento  : '',
					   email       : '',
					   telefone    : '',
					   cep         : '',
					   Endereco    : '',
					   numero      : '',
					   complemento : '',
					   bairro      : '',
					   cidade      : '',
					   estado      : '',
					   pais        : '' 
					};

    $scope.buscarCep = function(){
    	$http.get('http://viacep.com.br/ws/' + $scope.cliente.cep + '/json/ ')
    		.success(function(data){
    			$scope.cliente.bairro      = data.bairro;
    			$scope.cliente.complemento = data.complemento;
    			$scope.cliente.cidade      = data.localidade;
    			$scope.cliente.endereco    = data.logradouro;
    			$scope.cliente.estado      = data.uf;
    			$scope.cliente.pais        = 'Brasil';
    		})
    		.error(function(){
    			console.error('Não foi possível recuperar o endereço para o CEP digitado.')
    		})
    };

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
            pais        : $scope.cliente.pais
        }

		$http.post('cadastrar_cliente.php', novoCliente)
			.success(function(){
                $scope.addAlert('success', 'Cliente inserido com sucesso!');
                limparCampos();
				console.log('Cliente inserido com sucesso.');
			})
			.error(function(){
                $scope.addAlert('danger', 'Erro ao incluir um novo  cliente!');
				console.error('Erro ao incluir um novo  cliente.');
		})
    };

    $scope.alerts = [
    ];

    $scope.addAlert = function(type, msg) {
        $scope.alerts.push({type, msg});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

    var limparCampos = function() {
        $scope.cliente.nome        = '';
        $scope.cliente.cpf         = '';
        $scope.cliente.rg          = '';
        $scope.cliente.nascimento  = '';
        $scope.cliente.email       = '';
        $scope.cliente.telefone    = '';
        $scope.cliente.cep         = '';
        $scope.cliente.endereco    = '';
        $scope.cliente.numero      = '';
        $scope.cliente.complemento = '';
        $scope.cliente.bairro      = '';
        $scope.cliente.cidade      = '';
        $scope.cliente.estado      = '';
        $scope.cliente.pais        = '';
    }
});