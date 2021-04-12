const path = require('path');
require('dotenv').config({
  path: path.resolve(process.cwd(), '.env.' + process.env.NODE_ENV)
});
const { version } = require('../package.json');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.set('X-SA-Version', version);
  next();
});

app.get('/', async (req, res) => {
  res.send('For more information, please go to https://thesimpleapi.com');
});

app.get('/:id', function(req, res) {
  res.send('Hello World! ' + JSON.stringify(req.params));
});

app.post('/', async (req, res) => {
  res.send(req.body);
});

module.exports.handler = serverless(app);

if (process.env.NODE_ENV === 'local') {
  app.listen(process.env.PORT, () => {
    console.log(`Servers started ${process.env.PORT}`);
  });
}
