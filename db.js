const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'postgres_db',
    database: 'app',
    password: 'supersecretpassword',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};