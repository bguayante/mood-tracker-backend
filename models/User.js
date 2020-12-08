const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	created: { type: Date, default: Date.now },
	ratings: [
		{
			ref: 'Rating',
			type: mongoose.Schema.Types.ObjectId,
			autopopulate: true,
		},
	],
	// may need ref here //
});

UserSchema.plugin(require('mongoose-autopopulate'));
const User = mongoose.model('User', UserSchema);

module.exports = User;
