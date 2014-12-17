var Sequelize = require('sequelize');
var sequelize = require('../db/connection');

var User = sequelize.define('User', {
	username: Sequelize.STRING,
	password: Sequelize.STRING
});

sequelize
	.sync({ force: false })
	.complete(function(err) {
		console.log('Users table created');
	});
		
module.exports = User;