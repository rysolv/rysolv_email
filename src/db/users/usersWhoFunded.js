const { singleQuery } = require('../baseQueries');

const oneIssue = async ({ issueId }) => {
  const queryText = `
    SELECT 
      DISTINCT(users.email), 
      SUM(activity.funded_value) AS "userContribution",
      issues.name, 
      issues.funded_amount AS "totalFunded"
    FROM activity
      JOIN issues on activity.issue_id = issues.id
      JOIN users ON activity.user_id = users.id
    WHERE activity.issue_id = $1
    AND action_type = 'fund'
    GROUP BY 
      users.email, 
      issues.name, 
      issues.funded_amount
  `;
  const { rows } = await singleQuery({ queryText, values: [issueId] });
  return rows;
};

module.exports = oneIssue;
