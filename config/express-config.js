var   express = require('express')
	, bcrypt = require('bcrypt');

module.exports = function(config, model){
	var   app = express()
		, User = model.User
		;

	app.get('/', function (req, res) {
		User.find(1, function(err, result){
			var msg = result || 'No result found :( ';
			res.send(msg);
		});	
	});

	app.get('/createTestUser', function(req, res){
	    bcrypt.hash("pass123", 10, function(err, hash) {
	    	console.log("Creating user with hash:", hash)
	        var user = new User();
			user.name = "Dave welch";
			user.email = "david@davidwelch.co";
			user.passwordHash = hash;
			user.save(function(err){
				console.log("Finished saving: ", err);
				res.send(user);
			});
	    });
	});

	return app;
};