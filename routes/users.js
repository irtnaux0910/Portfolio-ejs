 /* user.js
 Xuan Tri Nguyen 
 3013888576
 Duedate: Sep 26, 2024 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Respond with a resource');
});

module.exports = router;
