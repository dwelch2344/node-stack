
var env = process.env.NODE_ENV || 'development'
  // environment
  , config = require('./config/config')[env]
  // database
  , model = require('./config/db-config')(config)
  // express 
  , app = require('./config/express-config')(config, model)
  , port = process.env.PORT || 3000
  ;

app.listen(port);
console.log(config.app.name, " > listening on port", port);