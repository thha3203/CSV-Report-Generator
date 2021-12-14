const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('CSV Report Generator');
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});