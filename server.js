const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', (request, response) => {
  response.sendFile('./client.index.html');
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});