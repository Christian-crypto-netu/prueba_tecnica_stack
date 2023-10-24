const express = require('express');

const app = express();
const port = 4000;
const db= require('./config/db');


app.listen(port, () => {
  console.log('>> Server listening on port ' + port);
});