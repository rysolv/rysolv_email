const { singleQuery } = require('../baseQueries');

// Get unread user messages
const getMessages = async ({ userId }) => {
  const queryText = `
    SELECT DISTINCT
      c.company_name AS "companyName",
      from_user.first_name AS "fromUser",
      m.body,
      m.created_date AS "createdDate",
      m.position_id AS "positionId",
      m.thread_id AS "threadId",
      to_user.email,
      uqr.value AS "positionTitle"
    FROM messages m
    JOIN company_positions cp ON cp.id = m.position_id
    JOIN companies c ON c.id = cp.company_id
    JOIN users to_user on to_user.id = m.to_user_id
    JOIN users from_user on from_user.id = m.from_user_id
    JOIN user_question_responses uqr ON uqr.position_id = m.position_id
    JOIN questions q ON q.id = uqr.question_id AND q.question_key = 'title'
    WHERE m.to_user_id = $1
    AND m.read_date IS NULL
    ORDER BY m.created_date DESC
    LIMIT 1
  `;
  const { rows } = await singleQuery({ queryText, values: [userId] });
  const [oneRow] = rows;
  return oneRow;
};

module.exports = getMessages;
