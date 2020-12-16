const express = require('express');
const router = express.Router();

const Rating = require('../models/Rating');

router.get('/', (req, res) => {
	Rating.find().then((allLogs) => {
		res.json(allLogs);
	});
});

router.get('/:id', (req, res) => {
	Rating.findById(req.params.id).then((log) => {
		res.json(log);
	});
});



module.exports = router;
