'use strict';
define(['app', 'require', 'browser'], 
	function(app, require, browser){
		app.register.controllers('LoginController', function($rootScope, $scope){
			$rootScope.settings.title = '登陆';
			//依赖
			$scope.resolve = new Array();
			if(browser.b == 'ie'){
				if(browser.bv < '9.0'){
					$scope.resolve.push('ace/html5shiv', 'ace/respond');
				}
				$scope.resolve.push('jquery1x');
			} else {
				$scope.resolve.push('ace/jquery');
				if('ontouchstart' in document.documentElement){
					$scope.resolve.push('ace/jquery.mobile.custom');
				}
			}
			//加载依赖，并执行核心代码
			require($scope.resolve, function(){
				$scope.themeObj = {
					dark: {bodyClass: 'login-layout',appText: 'white',companyText: 'blue'},
					light: {bodyClass: 'login-layout light-login',appText: 'gray',companyText: 'blue'},
					blur:{bodyClass: 'login-layout blur-login',appText: 'white',companyText: 'light-blue'}
				};
				$scope.theme = $scope.themeObj['blur'];
				$rootScope.settings.bodyClass = $scope.theme.bodyClass;
				var changeTheme = function(theme){
					if(theme in $scope.themeObj){
						$scope.theme = $scope.themeObj[theme];
						console.log($scope.theme);
						$rootScope.settings.bodyClass = $scope.theme.bodyClass;
					}
				};
				$scope.changeTheme = changeTheme;
			});
		});
});