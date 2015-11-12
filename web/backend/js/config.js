require.config({
	baseUrl: 'js',
	paths: {
		angularJs: '../../common/angularjs',
		angular: '../../common/angularjs/angular.min',
		uiRouter: '../../common/angularjs/angular-ui-router.min',
		browser: '../../common/js/browser',
		ace: '../../common/ace/js/',
		c: 'controllers',
		s: 'services'
	},
	shim: {
		angular: {
			exports: 'angular'
		},
		uiRouter: {
			deps: ['angular'],
			exports: 'uiRoute'
		}
	},
	deps: ['bootstrap', 'browser'],
	urlArgs: "v" +  (new Date()).getTime()
});