var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.render('page1',{test:"this is server render"});
});

module.exports = router;