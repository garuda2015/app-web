'use strict';
define(['app', 'constant'], 
	function(app, constant){
		app.factory('AuthService', function($rootScope, $http, $state, $q){
			var to;
			$rootScope.$on('$stateChangeStart', function(e, t, tp, f, fp){
				if($rootScope.auth.signin === true && t.name == 'login'){
					//登陆状态禁止进入登陆页面
					e.preventDefault();
				} else if(t.name != 'login' && ($rootScope.auth.signin !== true)){
					//非登陆状态，禁止进入其他界面
					to = t;
					e.preventDefault();
				} else {
					to = t;
				}
			});
			return {
				authCheck: function(){
					var d = $q.defer();
					$rootScope.auth = {signin: false, username: ''};
					$http.post(constant.authCheckUrl)
					.success(function(res){
						$rootScope.auth = res;
						d.resolve($rootScope.auth);
					})
					.error(function(res){
						d.reject('验证权限失败');
					});
					return d.promise;
				},
				to: function(){
					if($rootScope.auth.signin !== true){
						$state.go('login');
					} else if(to.name == 'login'){
						$state.go('home');
					} else {
						$state.go(to.name);
					}
				}
			};
		});
});