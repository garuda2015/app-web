'use strict';
define(['app', 'constant'], 
	function(app, constant){
		app.factory('InterceptorService', function($rootScope, $location){
			return {
				response: function(res){
					if(angular.equals(res.data, {signin: false, username: ''})){
						//未登陆
						if(res.config.url != constant.authCheckUrl){
							$location.path('/login').replace();
						}
					}
					return res;
				}
			};
	});
});