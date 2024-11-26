const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'bballcomp',
    password: 'postgres',
    port: 5432,
});

pool.connect()
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Error connecting to the database:', err));

    module.exports = pool;

