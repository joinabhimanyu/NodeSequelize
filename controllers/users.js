var User = require('../models/User');
var express = require('express');
var router = express.Router();

router.route('/users')
	.get(function(req, res) {
		User
			.findAll()
			.complete(function(err, users) {
				if(!!err) {
					console.log('An error occurred during fetching');
				} else {
					res.json(users);
				}
			});
	})

	.post(function(req, res) {
		User
			.create(req.body)
			.complete(function(err, user) {
				if(!!err) {
					console.log('An error occurred in inserting data');
				} else {
					console.log('Data entered successfully.');
					var message = { data: 'Data entered successfully.' };
					res.json(message);
				}
			})
	});

module.exports = router;