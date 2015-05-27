var router = require('express').Router()
   , fs = require('fs');

router.get('/', function(req, res) {
   res.setHeader('Content-Type', 'audio/mpeg');
   fs.createReadStream('sample.mp3').pipe(res);
});

module.exports = router;
