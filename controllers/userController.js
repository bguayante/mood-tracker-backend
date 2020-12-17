const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Rating = require('../models/Rating');

router.get('/', (req, res) => {
	User.find().then((allUsers) => {
		res.json(allUsers);
	});
});

router.get('/:userId', (req, res) => {
	User.findById(req.params.userId).then((user) => {
		res.json(user);
	});
});

router.get('/:userId/ratings', (req, res) => {
	Rating.find({ user: req.params.userId }).then((ratings) => {
		res.json(ratings);
	});
});

router.post('/new', (req, res) => {
	User.create(req.body).then((created) => {
		res.json(created);
	});
});

module.exports = router;
