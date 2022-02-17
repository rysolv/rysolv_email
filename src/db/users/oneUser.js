const { singleQuery } = require('../baseQueries');

// GET single user
const oneUser = async ({ userId }) => {
  const queryText = `
    SELECT
      u.balance,
      u.email,
      u.username,
      uc.company_id AS "companyId"
    FROM users u
    LEFT JOIN user_companies uc ON uc.user_id = u.id
    WHERE u.id = $1
  `;
  const { rows } = await singleQuery({ queryText, values: [userId] });
  const [oneRow] = rows;
  return oneRow;
};

module.exports = oneUser;
