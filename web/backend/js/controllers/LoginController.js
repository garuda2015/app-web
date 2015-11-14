'use strict';
define(['app', 'browser'], 
	function(app, browser){
		app.register.controller('LoginController', function($rootScope, $scope, $http){
			$rootScope.page.title = '登陆';
			//主题包
			$scope.themeObj = {
				dark: {bodyClass: 'login-layout',appText: 'white',companyText: 'blue'},
				light: {bodyClass: 'login-layout light-login',appText: 'gray',companyText: 'blue'},
				blur:{bodyClass: 'login-layout blur-login',appText: 'white',companyText: 'light-blue'}
			};
			//主题切换
			$scope.changeTheme = function(theme){
					if(theme in $scope.themeObj){
						$scope.theme = $scope.themeObj[theme];
						$rootScope.page.bClass = $scope.theme.bodyClass;
					}
				};
			//设置当前主题
			$scope.theme = {};
			$scope.changeTheme('blur');
			$scope.user = {name: '', pwd: ''};
			$scope.signin = function(){
				$http.post('index.php?r=index/signin', $scope.user)
				.success(function(res){

				});
			}
		});
});