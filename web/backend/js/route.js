'use strict';
define(['app', 'require'], 
	function(app, require){
		app.config(function($locationProvider, $stateProvider, $urlRouterProvider){
			$locationProvider.hashPrefix('!');
			$stateProvider.state('login', {
				url: '/login',
				templateUrl: 'tpl/login.html',
				resolve: {
					load: loadController('c/LoginController')
				}
			})
			.state('home', {
				url: '/',
				templateUrl: 'tpl/home.html'
			});
			$urlRouterProvider.otherwise('/');
		});
		//加载Controller
		var loadController = function(controller){
			return function($q, $rootScope){
				var d= $q.defer();
				require([controller], function(){
					$rootScope.$apply(function(){
						d.resolve('SUCCESS');
					});
				});
				return d.promise;
			}
		};
});