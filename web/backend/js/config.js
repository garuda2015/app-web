require.config({
	baseUrl: 'js',
	paths: {
		angular: '../../common/angularjs/angular.min',
		angularRoute: '../../common/angularjs/angular-route.min',
		browser: '../../common/js/browser',
		ace: '../../common/ace/js/',
		c: 'controllers'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		angularRoute: {
			deps: ['angular'],
			exports: 'angularRoute'
		}
	},
	deps: ['bootstrap', 'browser']
});