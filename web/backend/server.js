const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Example query
db.query('SELECT * FROM players LIMIT 10', (err, res) => {
    if (err) {
      console.error('Error executing query', err);
    } else {
      console.log('Query results:', res.rows);
    }
  });
app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});