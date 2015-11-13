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

require(['browser'], function(browser){
		//IE8及以下版本HTML5支持加载
		if (browser.b == 'ie' && browser.bv < '9.0') {
			require(['ace/html5shiv', 'ace/respond']);
		}
});
