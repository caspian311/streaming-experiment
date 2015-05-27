var content = require('./content')
   , main = require('./main');

module.exports = function(app) {
   app.use('/', main);
   app.use('/content', content);
};
