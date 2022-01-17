const { singleQuery } = require('../baseQueries');

// GET one company
const oneCompany = async ({ companyId }) => {
  const queryText = `
    SELECT
    ARRAY_AGG(DISTINCT u.email) AS "userEmails",
    c.company_name AS "companyName",
    c.payment_method AS "paymentMethod",
    JSONB_AGG(
      JSONB_BUILD_OBJECT(
        'contractKey', lc.contract_key,
        'contractTitle', lc.title,
        'contractBody', lc.body,
        'signedDate', sc.created_date
      ) ORDER BY sc.created_date DESC
    ) AS contracts
    From companies c
    JOIN signed_contracts sc ON sc.company_id = c.id
    JOIN legal_contracts lc ON lc.id = sc.contract_id
    JOIN user_companies uc ON uc.company_id = c.id
    JOIN users u ON u.id = uc.user_id
    WHERE c.id = $1
    GROUP BY c.company_name, c.payment_method
  `;
  const { rows } = await singleQuery({ queryText, values: [companyId] });
  const [oneRow] = rows;
  return oneRow;
};

module.exports = oneCompany;
