/**
 * filter für das "hello" modul
 * die definition ist erstmal unerheblich es geht nur darum, dass auch filter eingebunden
 * werden können :)
 */
define(['angularAMD'], function (angularAMD) {
	'use strict';
	angularAMD.filter('interpolate', [
		'version', function (version) {
			return function (text) {
				return String(text).replace(/\%VERSION\%/mg, version);
			};
		}
	]);
});
