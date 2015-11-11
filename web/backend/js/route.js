'use strict';
define(['app', 'require'], 
	function(app, require){
		app.config(function($locationProvider, $routeProvider){
			$locationProvider.hashPrefix('!');
			$routeProvider.when('/login', {
				templateUrl: 'tpl/login.html',
				resolve: {
					load: loadController('c/LoginController')
				}
			});
		});
		//加载Controller
		var loadController = function(controller){
			return function($q, $rootScope){
				var d= $q.defer();
				require([controller], function(){
					$rootScope.$apply(function (){
						d.resolve();
					});
				});
				return d.promise;
			}
		};
});