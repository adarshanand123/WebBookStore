'use strict';
var template = require('../templates/index.marko');

var express = require('express');
var router = express.Router();
module.exports = router;
// kraken-open module.exports = function(router){

	router.get('/',function(req,res){
		template.render({homeFlag: false, filename: './pages/manage.marko'},res);
	});	

// kraken-close}
