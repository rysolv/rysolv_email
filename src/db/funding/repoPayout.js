const { singleQuery } = require('../baseQueries');

const repoPayout = async ({ fundingId }) => {
  const queryText = `
    SELECT
      i.id AS "issueId",
      i.name AS "issueName",
      r.payout_url AS "payoutUrl",
      r.name AS "repoName",
      f.repo_payout AS "repoPayoutAmount",
      u.id AS "userId",
      u.username as username,
      u.email,
      ( SELECT SUM(f.repo_payout)
        FROM funding f
        WHERE f.id = $1
        AND paid_to_repo = false
      ) AS "repoTotal"
    FROM funding f
      JOIN issues i on i.id = f.issue_id
      JOIN repos r on r.id = i.repo_id
      JOIN user_repos ur ON ur.repo_id = r.id
      JOIN users u on u.id = ur.user_id
    WHERE f.id = $1
      AND f.repo_payout > 0
      AND ur.user_type = 'github_owner'
  `;
  const { rows } = await singleQuery({ queryText, values: [fundingId] });
  return rows;
};

module.exports = repoPayout;
