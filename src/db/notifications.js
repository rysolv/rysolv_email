const { v4: uuidv4 } = require('uuid');
const { singleQuery } = require('./baseQueries');

// Log email to notifications table
const recordNotification = ({ body, email, subject, userId }) => {
  const queryText = `
    INSERT INTO notifications (
      id,
      body,
      created_date,
      email,
      subject,
      user_id
    ) VALUES ($1, $2, $3, $4, $5, $6)
  `;
  singleQuery({
    queryText,
    values: [uuidv4(), body.trim(), new Date(), email, subject, userId],
  });
};

module.exports = { recordNotification };
