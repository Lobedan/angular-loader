/**
 * directive für das angular modul
 * die definition ist erstmal unerheblich es geht nur darum, dass auch directiven eingebunden
 * werden können :)
 */
define(['angularAMD'], function (angularAMD) {
	'use strict';
	angularAMD.directive('appVersion', [
		'version', function (version) {
			return function (scope, elm, attrs) {
				elm.text(version);
			};
		}
	]);
});
