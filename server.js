
var express = require('express')
  , fs = require('fs')
  , passport = require('passport')
  , logger = require('mean-logger')
  , env = process.env.NODE_ENV || 'development'
  // , config = require('./config/config')[env]
  // , auth = require('./config/middlewares/authorization')
  ;

var Schema = require('jugglingdb').Schema
	, schema = new Schema('mongodb')
	, User = schema.define('User', {
	    email: 			{ type: String, length: 255 },
	    name:  			{ type: Schema.Text },
	    passwordHash: 	{ type: String, length: 255 },
	    date:      		{ type: Date,    default: function () { return new Date;} },
	    timestamp: 		{ type: Number,  default: Date.now },
	});

var app = express(),
	port = process.env.PORT || 3000;

app.listen(port);
app.get('/', function (req, res) {
	// var post = new Post;
	// post.title = "hi";
	// post.content = "Herrow";
	// post.published = new Date();
	// res.send(post);
	res.send('I think I got it... Yes! Go team');
});
console.log("Listening on port:", port);