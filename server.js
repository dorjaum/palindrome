var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/palindromeRoutes');
routes(app);

app.listen(port);

console.log('Palindrome Restful API server started, enjoy ;) : ' + port);
