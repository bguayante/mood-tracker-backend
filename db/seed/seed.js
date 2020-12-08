const User = require('../../models/User');
const Rating = require('../../models/Rating');
const userData = require('./users.json');
const ratingData = require('./ratings.json');

User.deleteMany()
	.then(() => User.insertMany(userData))
	.then(console.log)
	.catch(console.error)
	.finally(process.exit);

Rating.deleteMany()
	.then(() => Rating.insertMany(ratingData))
	.then(console.log)
	.catch(console.error)
	.finally(process.exit);
