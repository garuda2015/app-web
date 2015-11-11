'use strict';
define(['js/module.js'], 
	function(controllers, require, browser){
		controllers.controller('MainController', function($scope){
					$scope.settings = {
						title: '加载中，请稍候……',
						bodyClass: ''
					};
		});
});