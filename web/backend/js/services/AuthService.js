'use strict';
define(['app'], 
	function(app){
		app.factory('AuthService', function($rootScope, $http, $location){
			$rootScope.auth = {};
			$http.post('index.php?r=index/index')
			.success(function(res){
				$rootScope.auth = res;
				$rootScope.$watchCollection('auth', function(newVal, oldVal){
					if(newVal.signin !== true || newVal.username == ""){
						if($location.path() != '/login'){
							$location.path('/login').replace();
						}
					} else {
						$location.path('/').replace();
					}
				});
				$rootScope.$on('$stateChangeStart', function(e, t, tp, f, fp){
					if($rootScope.auth.signin === true && t.name == 'login'){
						e.preventDefault();
					} else if(t.name != 'login' && ($rootScope.auth.signin !== true || $rootScope.auth.username =="")){
						e.preventDefault();
					}
				});
			})
			return $rootScope.auth;
		});
});