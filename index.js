const express = require('express');
const app = express();
require('dotenv').config();

var index = require('./routes/index');

app.use('/', index )

app.listen(3000)
