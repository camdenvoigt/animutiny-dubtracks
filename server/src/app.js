const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('', (req, res) => {
  res.send('bye');
});

app.listen(5000);
