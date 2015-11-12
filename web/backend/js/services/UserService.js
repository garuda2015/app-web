'use strict';
define(['app', 'route'], 
	function(app){
		app.factory('UserService', function($rootScope, $http, $location){
			var user = {isLogin: false, user: {name: ''}};
			$http.post('index.php?r=index/signCheck')
			.success(function(res){
				user = {isLogin: res.status, user: {name: res.name}};
			})
			.error(function(){

			});
			$rootScope.$watch('UserService.isLogin', function(isLogin){
				if(isLogin){

				} else {
					
				}
			});
			return user;
		});
});