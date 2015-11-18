'use strict';
define(['app', 'browser', 'require'], 
	function(app, browser, require){
		app.register.controller('MainController', function($rootScope, $scope, $http){
			var deps = [
				'ace/ace-extra'
			];
			require(deps);
			$rootScope.page.title = '主页-后台管理系统';
			$rootScope.page.bClass = 'no skin';
		});
});