const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pool = require('./db');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/api/players', (req, res) => {
  pool.query('SELECT * FROM players LIMIT 10')
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error('Error executing query', err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
});

// Example endpoint
app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
