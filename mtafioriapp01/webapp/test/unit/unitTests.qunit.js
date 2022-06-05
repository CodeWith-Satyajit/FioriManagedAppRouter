/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"nsmtafiorimanagedapp01/mtafioriapp01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
