const { singleQuery } = require('../baseQueries');

const oneIssue = async ({ issueId }) => {
  const queryText = `
    SELECT 
      funded_amount AS "fundedAmount",
      name,
      repo AS "githubUrl"
    FROM issues
    WHERE issues.id = $1
  `;
  const { rows } = await singleQuery({ queryText, values: [issueId] });
  const [oneRow] = rows;
  return oneRow;
};

module.exports = oneIssue;
