var app = angular.module('app', ['ngRoute', 'ngMask']);

app.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.when('/cadastrar_livro', {
		title: 'Cadastrar Livro',
		templateUrl: 'views/cadastrar_livro.html',
		controller: 'cadastrar_livro_controller'
	})
	.when('/consultar_livro', {
		title: 'Consultar Livro',
		templateUrl: 'views/consultar_livro.html',
		controller: 'consultar_livro_controller'
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