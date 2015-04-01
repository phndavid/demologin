
/**
 * Module dependencies.
 */
var express  = require('express');
var connect = require('connect');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app      = express();

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port     = process.env.OPENSHIFT_NODEJS_PORT || 8090;

// Configuration
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Routes

require('./routes/routes.js')(app);

app.listen(port,ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), ipaddress, port);
});

console.log('The App runs on port ' + port);