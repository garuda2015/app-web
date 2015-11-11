'use strict';
define(['app'], 
	function(app){
		app.config(function($locationProvider, $routeProvider){
			$locationProvider.hashPrefix('!');
			$routeProvider.when('/login', {
				controller: 'LoginController',
				templateUrl: 'tpl/login.html'
			});
		});
});