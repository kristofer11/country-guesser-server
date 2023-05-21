const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;
const colors = require('colors');
const connectDB = require('./config/db');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/leaders', require('./routes/leaderRoutes'));
app.use('/api/users', require('./routes/userRoutes'));


app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));

// const PASSWORD = process.env.PASSWORD;

// const { MongoClient } = require('mongodb');

// const MONGO_URI = `mongodb+srv://telerocker11:${PASSWORD}@leader-board.njbxijb.mongodb.net/?retryWrites=true&w=majority`;

// async function connectToDatabase() {
//     const client = await MongoClient.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     return client.db();
// }

// app.get('/', async (req, res) => {
//     try {
//         const db = await connectToDatabase();
//         const collection = db.collection('leaders');
//         const result = await collection.find({}).toArray();
//         res.send(result);
//     } catch (error) {
//         console.error(error);
//         res.sendStatus(500)
//     }
// });

// app.listen(
//     PORT,
//     () => console.log(`Server now running on port ${PORT}`)
// );