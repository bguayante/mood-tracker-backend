const express = require('express');
const router = express.Router();

const Rating = require('../models/Rating');

router.get('/log', (req, res) => {
	Rating.find().then((allLogs) => {
		res.json(allLogs);
	});
});

router.get('/log/:id', (req, res) => {
	Rating.findById(req.params._id).then((log) => {
		res.json(log);
	});
});

module.exports = router;
