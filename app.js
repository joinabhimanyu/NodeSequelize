var express = require('express'),
	bodyParser = require('body-parser'),
	users = require('./controllers/users');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use('/api', users);

var server = app.listen(process.env.PORT || 8000, function() {
	console.log('Server started on ' + server.address().port);
});