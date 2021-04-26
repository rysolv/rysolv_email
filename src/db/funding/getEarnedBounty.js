const { singleQuery } = require('../baseQueries');

const getEarnedBounty = async ({ fundingId }) => {
  const queryText = `
    SELECT
      f.funded_amount AS "fundedAmount",
      f.rep,
      f.user_payout AS "userPayout",
      u.email,
      u.id AS "userId",
      u.username
    FROM funding f
    JOIN users u ON u.id = f.user_id
    WHERE f.id = $1
  `;
  const { rows } = await singleQuery({ queryText, values: [fundingId] });
  const [oneRow] = rows;
  return oneRow;
};

module.exports = getEarnedBounty;
