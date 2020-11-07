const { singleQuery } = require('../baseQueries');

const oneIssue = async ({ issueId }) => {
  const queryText = `
    SELECT 
			funded_amount AS "fundedAmount",
			name
    FROM issues
    WHERE issues.id = $1
  `;
  const { rows } = await singleQuery({ queryText, values: [issueId] });
  const [oneRow] = rows;
  return oneRow;
};

module.exports = oneIssue;
