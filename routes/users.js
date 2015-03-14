var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.send('respond with some resource');
});

router.get('/jade-test/', function(req, res, next) {
  res.render('users/jade-test', {
    youAreUsingJade: true
  });
});

module.exports = router;
