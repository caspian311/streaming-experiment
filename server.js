
var http = require('http')
   , fs = require('fs');

var server = http.createServer(function(req, res) {
   if (req.url == '/content') {
      res.setHeader('Content-Type', 'audio/mpeg');
      var readStream = fs.createReadStream('sample.mp3');
      readStream.pipe(res);
   } else {
      fs.readFile('index.html', function(err, content) {
         res.writeHead(200, { 'Content-Type': 'text/html' });
         res.end(content);
      });
   }
});

server.listen(3000);

