const express = require('express');
const bodyParser = require('body-parser');
require('localenvironment');

const app = express();
app.locals.pretty = true;
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/', require('./routes')(express));

module.exports = app.listen(port, () => {
  console.log('Server Active On Port', port);
});
