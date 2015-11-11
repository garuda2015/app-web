'use strict';
define(['angular','js/module.js'], 
		function(angular){
			var app = angular.module('app', ['ngRoute'])
				.run(function($rootScope, $location){
					$rootScope.settings = {
						title: '加载中，请稍候……',
						bodyClass: ''
					};
					$location.path('/login').replace();
				});
			app.config(function($controllerProvider){
				app.register = {
					controllers: $controllerProvider.register
				};
			});
			return app;
		}
	);