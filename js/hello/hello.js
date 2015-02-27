/**
 * definiert nur das main modul mit den dependencies die auch geladen werden müssen
 */
define(['core', 'hello/controller/hello.helloCtrl'], function (angularAMD) {
	'use strict';
	var app = angular.module('hello', []);

	return angularAMD.bootstrap(app);
});
