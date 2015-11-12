'use strict';
define(['angular'], 
		function(angular){
			var app = angular.module('app', ['ui.router'])
				.run(function($rootScope){
					$rootScope.settings = {
						title: '加载中，请稍候……',
						bodyClass: ''
					};
				});
			return app;
		}
	);