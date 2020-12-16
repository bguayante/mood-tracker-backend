const mongoose = require('../db/connection');

const currentUserId = '';

const RatingSchema = new mongoose.Schema({
	moodRating: String,
	eventNote: String,
	created: { type: Date, default: Date.now },
	user: {
		type: 'ObjectId',
		ref: 'User',
	},
});

const Rating = mongoose.model('Rating', RatingSchema);

module.exports = Rating;
