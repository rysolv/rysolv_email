const { emailClient } = require('./connect');
const { recordNotification } = require('./db');

const sendEmail = async ({ email, notifyAdmin, subject, textBody, userId }) => {
  await emailClient.sendEmail({
    From: process.env.SENDER,
    To: email,
    Subject: subject,
    TextBody: textBody,
    MessageStream: 'outbound',
  });

  // Send a copy of this email to support@rysolv.com
  if (notifyAdmin) {
    const adminSubject = `[NOTIFICATION] ${subject}`;
    const adminText = `${textBody} \n\n Sent to ${email}`;

    await emailClient.sendEmail({
      From: process.env.SENDER,
      To: process.env.SENDER,
      Subject: adminSubject,
      TextBody: adminText,
      MessageStream: 'outbound',
    });
  }

  // Log email to notifications table (async)
  recordNotification({ body: textBody, email, subject, userId });
};

module.exports = { sendEmail };
