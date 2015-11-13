'use strict';
define(['angular'], 
		function(angular){
			var app = angular.module('app', ['ui.router'])
				.run(function($rootScope, AuthService){
					$rootScope.page = {title: '加载中，请稍候……', bClass: ''};
				})
				.config(function($controllerProvider, $provide){
					app.register = {
						controller: $controllerProvider.register,
						factory: $provide.factory
					};
				});
			return app;
		}
	);