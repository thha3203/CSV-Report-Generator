const express = require('express');
const bodyParser = require('body-parser');
const jsonToCSV = require('./helpers/jsonToCSV.js');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('client'));


app.post('/convert', (request, response) => {
  var file = jsonToCSV(request.body.jsonFile);
  response.send(file);
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});