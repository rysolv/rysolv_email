const { contactForm } = require('../../templates/contact');
const { sendEmail } = require('../../sendEmail');

exports.contact = async (req, res, next) => {
  const { body, email, source } = req.body;
  const { subject, text } = contactForm;

  try {
    const textBody = text({ body, email, source });

    await sendEmail({
      email: process.env.SENDER,
      subject,
      textBody,
    });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};
