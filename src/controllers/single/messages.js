const { newMessage } = require('../../templates/messages');
const { getMessages } = require('../../db');
const { sendEmail } = require('../../sendEmail');

exports.newMessage = async (req, res, next) => {
  const { userId } = req.body;
  const { html, subject, text } = newMessage;

  try {
    const { body, companyName, createdDate, email, fromUser, positionTitle, threadId } = await getMessages({
      userId,
    });

    const customSubject = subject({ fromUser });
    const textBody = text({
      body,
      companyName,
      createdDate: new Date(createdDate).toLocaleDateString('en-US'),
      positionTitle,
      threadId,
    });

    const htmlBody = html({
      body,
      companyName,
      createdDate: new Date(createdDate).toLocaleDateString('en-US'),
      positionTitle,
      threadId,
    });

    await sendEmail({
      email,
      html: htmlBody,
      notifyAdmin: true,
      subject: customSubject,
      textBody,
    });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};
