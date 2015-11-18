'use strict';
define(['app', 'constant'], 
	function(app, constant){
		app.factory('AuthService', function($rootScope, $http, $state, $q){
			var authCheck = false;
			var to;
			$rootScope.$on('$stateChangeStart', function(e, t, tp, f, fp){
				if(!authCheck){
					//授权检测前禁止去任何页面
					to = t;
					e.preventDefault();
				} else if($rootScope.auth.signin !== true && t.name != 'login'){
					//非登陆状态不可去其他页面
					e.preventDefault;
				} else if($rootScope.auth.signin === true && t.name == 'login'){
					//登陆状态禁止去登陆页面
					e.preventDefault();
				}
			});
			return {
				authCheck: function(){
					var d = $q.defer();
					$rootScope.auth = {signin: false, username: ''};
					$http.post(constant.authCheckUrl)
					.success(function(res){
						authCheck = true;
						$rootScope.auth = res;
						d.resolve($rootScope.auth);
					})
					.error(function(res){
						console.log(res);
						d.reject('验证权限失败');
					});
					return d.promise;
				},
				to: function(){
					if($rootScope.auth.signin !== true){
						$state.go('login');
					} else if(to == undefined){
						$state.go('admin.home');
					} else if(to.name == 'login' || to.name == ""){
						$state.go('admin.home');
					} else {
						$state.go(to.name);
					}
				}
			};
		});
});