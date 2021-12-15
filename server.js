const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const jsonToCSV = require('./helpers/jsonToCSV.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static('client'));
app.use('/convert', express.static('csvTable'));


app.post('/convert', (request, response) => {
  var file = jsonToCSV(request.body.jsonFile);
  response.set('Content-Type', 'text/csv');
  response.send(file);
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});