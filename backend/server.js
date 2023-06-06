const express = require('express');
const app = express();

app.get('/api/leaders', (req, res) => {
    res.json({message: 'Hello from the backend!'})
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));