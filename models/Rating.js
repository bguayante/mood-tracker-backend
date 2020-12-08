const mongoose = require('../db/connection');

const RatingSchema = new mongoose.Schema({
	moodRating: String,
	eventNote: String,
	created: { type: Date, default: Date.now },
	user:
		{
			ref: 'User',
            type: mongoose.Schema.Types.ObjectId,
            autopopulate: true
		}
	// may need ref here //
});

RatingSchema.plugin(require('mongoose-autopopulate'));

const Rating = mongoose.model('Rating', RatingSchema);

module.exports = Rating;
