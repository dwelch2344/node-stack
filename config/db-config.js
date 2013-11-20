var Schema = require('jugglingdb').Schema

module.exports = function(config){
	// var schema = new Schema('mongodb')
	var	schema = new Schema('postgres', config.db)
	, User = schema.define('User', {
	    email: 			{ type: String, length: 255 },
	    name:  			{ type: Schema.Text },
	    passwordHash: 	{ type: String, length: 255 },
	    date:      		{ type: Date,    default: function () { return new Date;} },
	    // timestamp: 		{ type: Number,  default: Date.now }, // - causes a int out of range in postgres :(
	});

	// migrate the schema, if necessary
	schema.isActual(function(err, actual) {
	    if (!actual) {
	        schema.autoupdate(); // alter schema to match model
	        // schema.automigrate(); // drop & recreate
	    }
	});

	return {
		schema : schema, // do we really need this elsewhere? 
		User: User,
	};
};
	