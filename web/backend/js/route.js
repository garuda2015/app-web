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
			.state('admin', {
				abstract: true,
				url: '',
				views: {
					'':{
						templateUrl: 'tpl/main.html'
					},
					'navbar@':{
						templateUrl: 'tpl/nav_bar.html'
					},
					'menu@':{
						templateUrl: 'tpl/menu.html'
					}
				},
				resolve: {
					load: loadController('c/MainController')
				}
			})
			.state('admin.home', {
				url:'/home',
				template: '<h2>home</h2>'
			});
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