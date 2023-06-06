const express = require('express');
const dotenv = require('dotenv').config;
const {errorHandler} = require('./middleware/errorMiddleware');
// const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Connect to MongoDB
const dbURI = 'mongodb://localhost:27017/leaders';

app.use('/api/leaders', require('./routes/leaderRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`)); 