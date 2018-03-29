'use strict';
var template = require('../templates/index.marko');
var bookModel = require('../models/bookModel');

var express = require('express');
var router = express.Router();
module.exports = router;
// kraken-open module.exports = function(router){

//getting all books on home side
	router.get('/',async function(req,res){
		var getAllBooksData = await getAllBooks();
		var pageData =  allBooksData(getAllBooksData);
		res.marko(template,{homeFlag: true, filename: './pages/home', pageData: pageData});
	});
//	

//about section
	router.get('/about',function(req,res){
		res.marko(template,{homeFlag: true, filename: './pages/about'});
	});
// kraken-close}


function getAllBooks(){
	var bookPromise = new Promise(function(resolve,reject){
		bookModel.find({},function(err,data){
			if(err){console.log(err); reject("error in getting all books in home.js");}
			else{
				resolve(data);
			}
		})
	});

	return bookPromise;
}

function allBooksData(alldata) {
	var pageData = [];
	for(var i=0;i<alldata.length;i++) {
		var data = alldata[i];
		var bookData = {};
		bookData.id = data._id;
		bookData.price = data.price;
		bookData.title = data.title;
		bookData.description = data.description;
		bookData.coverurl = data.coverurl;
		pageData.push(bookData);
	}
	return pageData; 
}