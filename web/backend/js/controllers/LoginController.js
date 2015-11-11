'use strict';
define(['js/module.js', 'require', 'browser'], 
	function(controllers, require, browser){
		controllers.controller('LoginController', function($rootScope, $scope){
			$rootScope.settings.title = '登陆';
			$rootScope.settings.bodyClass = 'login-layout';
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
			if($scope.resolve.length != 0){
				require($scope.resolve, function(){});
			}
		});
});