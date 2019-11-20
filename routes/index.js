var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.download(path.join(__dirname, 'docs/SoundMeasure.apk'), function (err) {

    console.log(err);
  });
});


module.exports = router;
