'use strict';
define(['angular'], 
		function(angular){
			var app = angular.module('app', ['ui.router'])
				.run(function($rootScope, AuthService, $location){
					$rootScope.page = {title: '加载中，请稍候……', bClass: ''};
					AuthService.authCheck().then(
						function(success){
							AuthService.to();
						},
						function(reason){
							alert(reason);
						}
					);
				})
				.config(function($controllerProvider, $provide, $httpProvider){
					app.register = {
						controller: $controllerProvider.register,
						factory: $provide.factory
					};
					$httpProvider.interceptors.push('InterceptorService');
				});
			return app;
		}
	);