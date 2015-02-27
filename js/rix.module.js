/**
 * Created by svenklemmer on 27.02.15.
 */
	//TODO: use directive to collect data
define(['angularAMD', 'jQuery', 'angular', 'domReady!'], function (angularAMD) {
	angularAMD.directive('rix-module', function () {
		return {
			scope: {
				base: '=base',
				config: '=config',
				controller: '=controller',
				directive: '=directive',
				filter: '=filter',
				service: '=service'
			},
			restrict: 'E'
		};
	});
});