//  ..........Importing Modules  ..........
const express = require('express');

// .......... Using Modules ..........
const router = express.Router();


//  .......... Get Request: /landing/  ..........
router.get('/', function(req, res) {
    res.render('landing');
});

module.exports = router;