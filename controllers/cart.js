'use strict';
var template = require('../templates/index.marko');

var express = require('express');
var router = express.Router();
module.exports = router;
// kraken-open module.exports = function(router){

	router.get('/',function(req,res){
		console.log(req.session);
		var pageData = getCartData(req.session);
		console.log(pageData);
		template.render({homeFlag: true, filename: './pages/cart.marko', pageData: pageData},res);
	});

	router.post('/',function(req,res){

		if(req.session.ids &&  req.session.ids.indexOf(req.body.id) > -1) {
			console.log("yeah coming here 1");
			req.session.quantity[req.body.id]++;
		} else {
			console.log("yeah coming here 2");
			if(!req.session.ids) {
				req.session.ids = [];
				req.session.items = {};
				req.session.quantity = {};
			}

			req.session.items[req.body.id] = req.body;
			req.session.quantity[req.body.id] = 1;
			if(!req.session.ids) {
				
			}
			req.session.ids.push(req.body.id);
		}
		res.writeHead(200);
		res.end();
	});

	router.delete('/',function(req,res){
		req.session.items = undefined;
		req.session.ids = undefined;
		req.session.quantity = undefined;
		res.redirect('/cart');
	});

// kraken-close }

function getCartData(sessionData){
	var pageData = [];
	if(!sessionData.ids) {return pageData;}
	for(var i = 0;i<sessionData.ids.length;i++) {
		var singleItem = {};
		var key = sessionData.ids[i];
		var item = sessionData.items[key];
		var quantity = sessionData.quantity[key];
		singleItem.title = item.title;
		singleItem.price = item.price * quantity;
		singleItem.quantity = quantity;
		pageData.push(singleItem);
	}
	return pageData;
}