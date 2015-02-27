/**
 * definition eines controllers für das "hello" modul
 */
define(['angularAMD'], function (angularAMD) {
	'use strict';
	angularAMD.controller('HelloCtrl', ['$scope', function ($scope) {
				$scope.data = "stupid";
			}

			]);
});
