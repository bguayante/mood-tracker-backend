const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userController = require('./controllers/userController');
app.use('/user', userController);

const ratingController = require('./controllers/ratingController');
app.use('/rating', ratingController);

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
