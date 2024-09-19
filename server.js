const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/env', (req, res) => {
  res.json({ BOOKMARK_DATA_URL: process.env.BOOKMARK_DATA_URL });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});