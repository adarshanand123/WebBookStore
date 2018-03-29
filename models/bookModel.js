var mongoose = require('mongoose');
var bookSchema = mongoose.Schema({
	title : String,
	description: String,
	publisher: String,
	author: String,
	price: Number,
	category: String,
	coverurl: String
});

var bookModel = mongoose.model('bookmodels',bookSchema);

module.exports = bookModel;