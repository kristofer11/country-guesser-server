const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Connect to MongoDB

app.use('/api/leaders', require('./routes/leaderRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`)); 