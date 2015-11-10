require.config({
	baseUrl: 'js',
	paths: {
		angular: '../../common/angularjs/angular.min',
		angularRoute: '../../common/angularjs/angular-route.min',
		ace: '../../common/ace/js/',
		c: 'controllers',
		modul: 'module'
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
	deps: ['app']
});