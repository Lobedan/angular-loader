/**
 * Created by svenklemmer on 26.02.15.
 */
define(['angularAMD', 'jQuery', 'angular', 'domReady!'],
		function (angularAMD) {
			'use strict';

			var directive = jQuery('rix-modules'),
					conf = {
						DATA_MODULE_ATTRIBUTE: "rix-modules",
						modules: {
							"config": directive.attr('config').split(','),
							"controller": directive.attr('controller').split(','),
							"directive": directive.attr('directive').split(','),
							"filter": directive.attr('filter').split(','),
							"service": directive.attr('service').split(',')
						},
						path: {
							"config": "config/",
							"controller": "controller/",
							"directive": "directive/",
							"filter": "filter/",
							"service": "service/"
						}
					},
					i, module, key, path, base;

			base = directive.attr('base');

			//load base module
			try {
				require([base + "/" + base]);
			} catch (error) {
				console.log("could not init module: ", error);
			}
			//construct module list for non base files and load them
			for (key in conf.modules) {
				if (conf.modules.hasOwnProperty(key)) {
					for (i = 0; i < conf.modules[key].length; i++) {
						path = base + "/" + conf.path[key] + base + "." + conf.modules[key][i];

						//load and init the page modules
						try {
							require([path]);
						} catch (error) {
							console.log("could not init module: ", error);
						}
					}
				}
			}
			return angularAMD;
		}
);