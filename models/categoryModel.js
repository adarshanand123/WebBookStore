// var mongoose = require('../db/index');

var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	CategoryName: String
});


var categoryModel = mongoose.model('categoryModel',categorySchema);

module.exports = categoryModel;