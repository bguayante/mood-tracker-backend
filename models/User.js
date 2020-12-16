const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
	username: String,
	password: String,
	created: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
