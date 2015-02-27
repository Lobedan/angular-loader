/**
 * Created by svenklemmer on 26.02.15.
 */
require.config({
	baseUrl: 'js/',

	// alias libraries paths.  Must set 'angular'
	paths: {
		'jQuery': '/bower_components/jquery/dist/jquery.min',
		'angular': '/bower_components/angular/angular.min',
		'angular-route': '/bower_components/angular-route/angular-route.min',
		'angularAMD': '/bower_components/angularAMD/angularAMD',
			'domReady': '/bower_components/domReady/domReady'
	},

	// Add angular modules that does not support AMD out of the box, put it in a shim
	shim: {
		'jq': ['jquery'],
		'angular-route': ['angular'],
		'angularAMD': ['angular']
	},

	// kick start application
	//            deps: document.getElementsByTagName('head')['0'].dataset.rixModules
	deps: ['core']
	//deps: ['core', 'rix.module']
});