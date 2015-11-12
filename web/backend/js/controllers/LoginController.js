'use strict';
define(['app', 'require'], 
	function(app, require){
		app.controller('LoginController', function($rootScope, $scope, $http, UserService){
			$rootScope.settings.title = '登陆';
			$scope.themeObj = {
				dark: {bodyClass: 'login-layout',appText: 'white',companyText: 'blue'},
				light: {bodyClass: 'login-layout light-login',appText: 'gray',companyText: 'blue'},
				blur:{bodyClass: 'login-layout blur-login',appText: 'white',companyText: 'light-blue'}
			};
			$scope.theme = {};
			$scope.changeTheme = function(theme){
					if(theme in $scope.themeObj){
						$scope.theme = $scope.themeObj[theme];
						$rootScope.settings.bodyClass = $scope.theme.bodyClass;
					}
				};
			$scope.changeTheme('light');
			//依赖
			$scope.resolve = new Array();
			//加载依赖，并执行核心代码
			require($scope.resolve, function(){
				$scope.user = {name: '', pwd: ''};
				$scope.signup = function(){
					$http.post('index.php?r')
					.success(function(res){

					})
					.error(function(){});
				}
			});
		});
});