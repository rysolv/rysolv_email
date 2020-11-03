const { pool } = require('../connect');

// Single Query. Accepts array of values for parameterized queries
const singleQuery = async ({ queryText, values }) => {
  const client = await pool.connect();
  try {
    const result = await client.query(queryText, values);
    client.release();
    return result;
  } catch (error) {
    client.release();
    throw error;
  }
};

module.exports = { singleQuery };
