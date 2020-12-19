const express = require('express');
const router = express.Router();

const Rating = require('../models/Rating');

//GET all ratings//
router.get('/', (req, res) => {
	Rating.find().then((allLogs) => {
		res.json(allLogs);
	});
});

//GET rating by ratingId//
router.get('/:ratingId', (req, res) => {
	Rating.findById(req.params.ratingId).then((log) => {
		res.json(log);
	});
});

//POST new rating as user with userId//
router.post('/:userId/new', (req, res) => {
	Rating.create(req.body)
		.then({ $set: { user: req.params.userId } })
		.then((created) => {
			res.json(created);
		});
});

//DELETE rating by ratingId//
router.delete('/:ratingId', (req, res) => {
	Rating.deleteOne({ _id: req.params.ratingId }).then((deleted) => {
		res.json(deleted);
	});
});

//UPDATE rating by ratingId//
router.patch('/:ratingId/edit', (req, res) => {
	Rating.updateOne({ _id: req.params.ratingId })
		.then(Rating.find({ _id: req.params.ratingId }))
		.then((updated) => {
			res.json(updated);
		});
});

module.exports = router;
