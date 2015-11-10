define([ 
	'angular',
	'angularRoute',
	'route',
	'app',
	], function(angular){
		'use strict';
		angular.element(document).ready(function(){
			angular.bootstrap(document, ['app']);
		});
	});