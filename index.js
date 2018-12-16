require('dotenv').config();
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.post('/', async (req, res) => {
  res.send(req.body);
});

module.exports.handler = serverless(app);

if (process.env.NODE_ENV === 'local') {
  app.listen(PORT, () => {
    console.log(`Servers started ${PORT}`);
  });
}
