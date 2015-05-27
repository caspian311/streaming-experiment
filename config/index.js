var path = require('path')
   , rootPath = path.normalize(path.join(__dirname, '..'))
   , env = process.env.NODE_ENV || 'development';

var config = {
   test: {
         port: 3000,
         root: rootPath
   },
   development: {
         port: 3000,
         root: rootPath
    },
   production: {
         port: 3000,
         root: rootPath
   }
};

module.exports = config[env];
