var express = require('express');
const path = require('path');

var app = express();

const port = 3000;


app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => {
    console.log('Express server started at port:', port);
  })