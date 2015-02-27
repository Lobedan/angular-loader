/**
 * service definition für das "hello" modul
 */
define(['angularAMD'], function (angularAMD) {
	'use strict';
	angularAMD.factory('helloService',

	             function () {
		             console.log("log from helloService")
	             }
	);
});
