'use strict';
define(['angular', 'app', 'uiRouter', 'route', 's/UserService'], 
		function(angular, app){
			angular.element(document).ready(function(){
				angular.bootstrap(document, ['app']);
			});
			app.run(function(UserService){
					//console.log(UserService);
				});
	});