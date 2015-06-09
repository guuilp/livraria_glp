var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/cadastrar_produto', {
		title: 'Cadastrar Produto',
		templateUrl: 'views/cadastrar_produto.html',
		controller: 'cadastrar_produto_controller'
	})
	.when('/consultar_produto', {
		title: 'Consultar Produto',
		templateUrl: 'views/consultar_produto.html',
		controller: 'consultar_produto_controller'
	})
	.when('/cadastrar_cliente',{
		title: 'Cadastrar Cliente',
		templateUrl: 'views/cadastrar_cliente.html',
		controller: 'cadastrar_cliente_controller'
	})
	.when('/consultar_cliente',{
		title: 'Consultar Cliente',
		templateUrl: 'views/consultar_cliente.html',
		controller: 'consultar_cliente_controller'
	});
}])