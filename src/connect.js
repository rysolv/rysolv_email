/* eslint-disable no-console */
const { Pool } = require('pg');
const postmark = require('postmark');

const production = process.env.NODE_ENV === 'production';

/* Connect to Postmark server */
const SECRET_KEY = production ? process.env.POSTMARK_KEY : process.env.POSTMARK_TEST_KEY;
const emailClient = new postmark.ServerClient(SECRET_KEY);

/* Connect to Postgres */
const pool = new Pool({
  database: production ? process.env.DB_NAME : process.env.DB_NAME_DEV,
  host: production ? process.env.DB_HOST : process.env.DB_HOST_DEV,
  password: production ? process.env.DB_PASSWORD : process.env.DB_PASSWORD_DEV,
  port: production ? process.env.DB_PORT : process.env.DB_PORT_DEV,
  user: production ? process.env.DB_USER : process.env.DB_USER_DEV,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  max: 20,
});

console.log('Connected to DB:', pool.options.database);

pool.on('connect', () => {
  console.log('Client connected to db');
});

pool.on('error', (err, client) => {
  console.log('PG Error: ', err);
  console.log('in client: ', client);
});

pool.on('remove', () => {
  console.log('Client connection ended');
});

module.exports = pool;

module.exports = { emailClient, pool };
