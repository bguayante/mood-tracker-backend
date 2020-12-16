const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Rating = require('../models/Rating');

router.get('/', (req, res) => {
	User.find().then((allUsers) => {
		res.json(allUsers);
	});
});

router.get('/:id', (req, res) => {
	User.findById(req.params.id).then((user) => {
		res.json(user);
	});
});


//Not Working//
router.get('/:id/ratings', (req, res) => {
	Rating.find({ user: req.params.id }).then((ratings) => {
		console.log(req.params.id);
		console.log(ratings)
		res.json(ratings);
	});
});

module.exports = router;
