const express = require('express');
const app = express();
const OAuth = require('oauth');
require('dotenv').config();

var index = require('./routes/index');

app.use('/', index )

app.listen(3000)
