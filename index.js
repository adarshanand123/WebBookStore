'use strict';

var express = require('express');
var bodyparser = require("body-parser");
// var kraken = require('kraken-js');
var session = require('express-session');
var path = require('path');

var options, app;


//all routes//
var bookDetails = require('./controllers/bookDetails.js');
var cart = require('./controllers/cart.js');
var index = require('./controllers/index.js');
var manage = require('./controllers/manage.js');
var manageBooks = require('./controllers/manageBooks.js');
var manageCategories = require('./controllers/manageCategories.js');

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
// options = {
//     onconfig: function (config, next) {
        
//          * Add any additional config setup or overrides here. `config` is an initialized
//          * `confit` (https://github.com/krakenjs/confit/) configuration object.
         
//         next(null, config);
//     }
// };
require('marko/node-require');
app = module.exports = express();
// app.use(kraken(options));
app.use(session({
	secret: 'secret',
	saveUninitialized: true,
	resave: true
}));
app.on('start', function () {
    console.log('Application ready to serve requests.');
    // console.log('Environment: %s', app.kraken.get('env:env'));
});
app.use(bodyparser.urlencoded());
app.use('/bookDetails',bookDetails);
app.use('/cart',cart);
app.use('/',index);
app.use('/manage',manage);
app.use('/manageBooks',manageBooks);
app.use('/manageCategories',manageCategories);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname)));
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webBookStore');