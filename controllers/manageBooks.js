'use strict';
var template = require('../templates/index.marko');
var categoryModel = require('../models/categoryModel');
var bookModel = require('../models/bookModel');

var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
});

var upload = multer({ storage: storage }).single('coverurl');

var express = require('express');
var router = express.Router();
module.exports = router;
//kraken-open module.exports = function(router){

//getting all books on manage side
	router.get('/',async function(req,res){
		var getAllBooksData = await getAllBooks();
		var pageData =  allBooksData(getAllBooksData);
		res.marko(template,{homeFlag: false, filename: './pages/manageBook', pageData: pageData});
	});
//	

//adding new books
	router.get('/add',async function(req,res){
		var getAllCategoriesData = await getAllCategories();
		var categoryArray =  allCategoriesData(getAllCategoriesData);
		var pageData = {};
		pageData.categoryArray = categoryArray;
		res.marko(template,{homeFlag: false, filename: './pages/addBook',pageData});
	});

	router.post('/add',upload,async function(req,res){
		req.body.coverurl = req.file.filename;
		var p = await saveBookData(req.body);
		res.redirect('/manageBooks');
	});

//


//editing and deleting already present book
	router.delete('/:id',async function(req,res){
		var a = await removeFromDB(req.params.id);
		res.redirect('/manageBooks');  //there is some issue here,see later
	});

	router.get('/:id',async function(req,res){
		var getAllCategoriesData = await getAllCategories();
		var categoryArray =  allCategoriesData(getAllCategoriesData);

		var bookData = await getBookDetails(req.params.id);
		var pageData = getBookData(bookData);
		pageData.categoryArray = categoryArray;
		res.marko(template,{homeFlag: true, filename: './pages/addBook',pageData: pageData});
	});

	router.post('/:id',upload,async function(req,res){
		if(req.file) {
			req.body.coverurl = req.file.filename;
		}
		var a = await upDateBookDetails(req.params.id,req.body);
		res.redirect('/manageBooks');
	});
//

// kraken-close}

function allCategoriesData(alldata) {
	var pageData = [];
	for(var i=0;i<alldata.length;i++) {
		pageData[i] = alldata[i].CategoryName;
	}
	return pageData; 
}



function getAllCategories(){
	var categoryPromise = new Promise(function(resolve,reject){
		categoryModel.find({},function(err,data){
			if(err){console.log(err); reject("error in getting all categories ");}
			else{
				resolve(data);
			}
		})
	});
	return categoryPromise;
}



function removeFromDB(id){
	return getFromDB(id).then(deleteFromDB);
}

function getFromDB(id){
	var bookPromise = new Promise(function(resolve,reject) {
		bookModel.findById(id,function(err,data){
			if(err) {
				console.log(err); reject("error in removing document in manageBooks.js");
			} else {
				resolve(data);
			}
		});
	});
	return bookPromise;
}

function deleteFromDB(document){
	return	document.remove();
}

function upDateBookDetails(id,data) {
	var dbData = {};
	dbData.title = data.title;
	dbData.author = data.author;
	dbData.publisher = data.publisher;
	dbData.price = data.price;
	dbData.category = data.category;
	dbData.description = data.description;
	dbData.coverurl = data.coverurl;
	return bookModel.update({_id:id},{ $set: dbData},function(err,data){});
}

function saveBookData(data){
	var dbData = new bookModel();
	dbData.title = data.title;
	dbData.author = data.author;
	dbData.publisher = data.publisher;
	dbData.price = data.price;
	dbData.category = data.category;
	dbData.description = data.description;
	dbData.coverurl = data.coverurl;
	return dbData.save();
}


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
		bookData.coverUrl = data.coverUrl;
		bookData.publisher = data.publisher;
		bookData.author = data.author;
		bookData.category = data.category;

		return bookData;
}


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
		bookData.category = data.category;
		pageData.push(bookData);
	}
	return pageData; 
}