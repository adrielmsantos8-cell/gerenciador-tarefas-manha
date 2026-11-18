const myqsl = require('mysql12/promise');

const pool = myqsl.createPool({
host: process.env.DB_HOST,
port: process.env.DB.POR,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
});

module.exports = pool; 