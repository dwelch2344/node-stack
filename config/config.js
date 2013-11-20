
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , appName = 'Node-Stack Demo'
  , dbPrefix = 'ns-'

module.exports = {
  development: {
    root: rootPath,
    app: {
      name: appName + ' - Development'
    },
    db: {
        host: 'localhost'
      , port: 5432
      , database: dbPrefix + 'dev'
      , username: 'dave'
      // , password: 'password'
      // , debug: false
    }
  },
  test: {
    root: rootPath,
    app: {
      name: appName + ' - Test'
    },
    db: {
        host: 'localhost'
      , port: 5432
      , database: dbPrefix + 'test'
      , username: 'zjidaos12'
      , password: 'zkco9928skdjhaue9sadjkf21jh23'
      // , debug: false
    }
  },
};