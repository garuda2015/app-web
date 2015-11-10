'use strict';
define(['require',
		'angular',
		'angularRoute',
		'route',
		//'c/LoginController'
	], function(require, angular){
		angular.element(document).ready(function(){
			var app = angular.module('app', ['ngRoute']);
			app.run(function($rootScope, $location){
				$rootScope.settings = {
						title: '加载中，请稍候……',
						bodyClass: ''
				};
				$location.path('/login').replace();
			}).config(function($locationProvider, $routeProvider){
				$locationProvider.hashPrefix('!');
			}).controller('LoginController', function($scope){
				$scope.greeting = 'Hello world';
			});
			angular.bootstrap(document, ['app']);
			return app;
		});
	});

