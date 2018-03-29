'use strict';
var template = require('../templates/index.marko');
var categoryModel = require('../models/categoryModel');

var express = require('express');
var router = express.Router();
module.exports = router;
// kraken-open module.exports = function(router){

//getting all categories on manage side
	router.get('/',async function(req,res){
		var getAllCategoriesData = await getAllCategories();
		var pageData =  allCategoriesData(getAllCategoriesData);
		template.render({homeFlag: false, filename: './pages/manageCategory', pageData: pageData},res);	
	});
//	

//adding new categories
	router.get('/add',function(req,res){
		template.render({homeFlag: false, filename: './pages/addCategory'},res);
	});

	router.post('/add',function(req,res){
		saveCategoryData(req.body);
		res.redirect('/manageCategories');
	});
//

//editing and deleting already present categories
	router.delete('/:id',async function(req,res){
		console.log("ashishsssssssssssssssss",req.params.id);
		var a = await removeFromDB(req.params.id);
		res.redirect('/manageCategories'); 	
	});

	router.get('/:id',async function(req,res){
		var categoryData = await getCategoryDetails(req.params.id);
		var pageData = getCategoryData(categoryData);
		template.render({homeFlag: false, filename: './pages/addCategory',pageData: pageData},res);
	});

	router.post('/:id',async function(req,res){
		var a = await upDateCategoryDetails(req.params.id,req.body);
		res.redirect('/manageCategories');
	});
//
// kraken-close}

function removeFromDB(id){
	return getFromDB(id).then(deleteFromDB);
}

function getFromDB(id){
	var categoryPromise = new Promise(function(resolve,reject) {
		categoryModel.findById(id,function(err,data){
			if(err) {
				console.log(err); reject("error in removing document in managecategory.js");
			} else {
				resolve(data);
			}
		});
	});
	return categoryPromise;
}

function deleteFromDB(document){
	return	document.remove();
}


function upDateCategoryDetails(id,data) {
	var dbData = {};
	dbData.CategoryName = data.category;
	return categoryModel.update({_id:id},{ $set: dbData},function(err,data){});
}

function saveCategoryData(data){
	var dbData = new categoryModel();
	dbData.CategoryName = data.category;
	dbData.save();
}

function allCategoriesData(alldata) {
	var pageData = [];
	for(var i=0;i<alldata.length;i++) {
		var data = alldata[i];
		var categoryData = {};
		categoryData.id = data._id;
		categoryData.category = data.CategoryName;
		pageData.push(categoryData);
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

function getCategoryData(data) {

		var categoryData = {};
		categoryData.id = data._id;
		categoryData.category = data.CategoryName;

		return categoryData;
}

function getCategoryDetails(id){
	var categoryPromise = new Promise(function(resolve,reject){
		categoryModel.findById({_id:id},function(err,data){
			if(err){console.log(err); reject("error in getting all books in home.js");}
			else{
				resolve(data);
			}
		})
	});

	return categoryPromise;
}