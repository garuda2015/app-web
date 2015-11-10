'use strict';
define(['require', 
		'app'], function(require, app){
	return require(['app'], function(app){
		app.config(function($locationProvider, $routeProvider){
		$locationProvider.hashPrefix('!');
		$routeProvider.when('/login', {
			templateUrl: 'tpl/login.html',
			controller: 'LoginController'
		});
	});
	});
});