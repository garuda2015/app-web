'use strict';
define(['angular', 'c/MainController', 'c/LoginController'], 
		function(angular){
			return angular.module('app', ['ngRoute', 'app.controllers'])
				.run(function($rootScope, $location){
					$location.path('/login').replace();
				});
		}
	);