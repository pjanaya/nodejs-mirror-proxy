// BASE SETUP
// =============================================================================

var express = require('express'),
	bodyParser = require('body-parser'),
    request = require('request');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))

var port = process.env.PORT || 8080;


// IMPORT ROUTES
// =============================================================================
var router = express.Router();

// on routes that end in /users
// ----------------------------------------------------
router.route('/mirror_proxy').post(function(req, res) {
  var url = req.body.url;
  var data = req.body.data;

  request.post({url: url, form: data}, function(err, httpResponse, body) {
     if (err) {
          return console.error('request failed:', err);
     }
     console.log('Server responded with:', body);
     res.send(body);
  });
});

// Middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// REGISTER OUR ROUTES
// =============================================================================
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
