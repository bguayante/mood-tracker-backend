const express = require('express');
const router = express.Router();

const Rating = require('../models/Rating');

router.get('/', (req, res) => {
	Rating.find().then((allLogs) => {
		res.json(allLogs);
	});
});

router.get('/:ratingId', (req, res) => {
	Rating.findById(req.params.ratingId).then((log) => {
		res.json(log);
	});
});

router.post('/:userId/new', (req, res) => {
	Rating.create(req.body)
		.then({ $set: { user: req.params.userId } })
		.then((created) => {
			res.json(created);
		});
});

router.delete('/:ratingId', (req, res) => {
	Rating.deleteOne({ _id: req.params.ratingId }).then((deleted) => {
		res.json(deleted);
	});
});

//Not Working Yet//
router.patch('/:ratingId/edit', (req, res) => {
	Rating.updateOne({ _id: req.params.ratingId })
		.then(Rating.find({ _id: req.params.ratingId }))
		.then((updated) => {
			res.json(updated);
		});
});

module.exports = router;
