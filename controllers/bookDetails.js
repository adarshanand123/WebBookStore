'use strict';
require('marko/node-require'); // it needs to be used in every file.However,since same file is being required in every file,so it is not needed to write it in every file.
var template = require('../templates/index.marko');
var bookModel = require('../models/bookModel');

var express = require('express');
var router = express.Router();
module.exports = router;
//kraken-open module.exports = function(router){

//getting all books on manage side
	router.get('/:id',async function(req,res){
		var bookData = await getBookDetails(req.params.id);
		var pageData = getBookData(bookData);
		template.render({homeFlag: true, filename: './pages/bookDetails',pageData: pageData},res);
	});
//	
//kraken-close }


function getBookDetails(id){
	var bookPromise = new Promise(function(resolve,reject){
		bookModel.findById({_id:id},function(err,data){
			if(err){console.log(err); reject("error in getting all books in home.js");}
			else{
				resolve(data);
			}
		})
	});

	return bookPromise;
}

function getBookData(data) {

		var bookData = {};
		bookData.id = data._id;
		bookData.price = data.price;
		bookData.title = data.title;
		bookData.description = data.description;
		bookData.coverurl = data.coverurl;
		bookData.publisher = data.publisher;
		bookData.author = data.author;
		bookData.category = data.category;

		return bookData;
}