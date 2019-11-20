var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.download(path.join(__dirname, 'docs/doc1.txt'), function (err) {

    console.log(err);
  });
});


module.exports = router;
