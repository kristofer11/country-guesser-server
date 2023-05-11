// const app = require('express')();
// require('dotenv').config();
// const PASSWORD = process.env.PASSWORD;

// const { MongoClient } = require('mongodb');

// const PORT = 8080;
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

console.log('hello wrld');