'use strict';
var app = angular.module('app', ['ngRoute'])
	.config(function($locationProvider, $routeProvider){
		$locationProvider.hashPrefix('!');
		$routeProvider.when('/login', {
			templateUrl: 'tpl/login.html',
			controller: 'LoginController',
			resolve: {}
		});
	})
	.run(function($rootScope, $http, $routeParams, $location){
		$rootScope.settings = {
			title: '加载中，请稍候……',
			bodyClass: ''
		};
		$http.post('index.php?r=index')
			 .success(function(res){
			 	if(res.user.length == 0){
			 		$location.path('/login').replace();
			 	}
			 });
	})
	.controller('LoginController', function($rootScope, $scope){
		$rootScope.settings.title = '登陆';
		$('#btn-login-dark').on('click', function(e) {
			 	alert(132);
				$('body').attr('class', 'login-layout');
				$('#id-text2').attr('class', 'white');
				$('#id-company-text').attr('class', 'blue');
				
				e.preventDefault();
			 });
	});