const { singleQuery } = require('../baseQueries');

// GET single user
const oneUser = async ({ userId }) => {
  const queryText = `
    SELECT 
      balance,
      email,
      username
    FROM users
    WHERE users.id = $1
  `;
  const { rows } = await singleQuery({ queryText, values: [userId] });
  const [oneRow] = rows;
  return oneRow;
};

module.exports = oneUser;
