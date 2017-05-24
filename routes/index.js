var express = require('express');
var router = express.Router();
var fung = require('../controller/twattControl.js')

router.get('/', fung.searchTwat)

router.get('/home', fung.homeTL)

module.exports=router;
