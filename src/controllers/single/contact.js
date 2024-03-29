const {
  contactForm,
  recruitingAdmin,
  recruitingSignup,
} = require('../../templates/contact');
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

exports.recruitingSignup = async (req, res, next) => {
  const { companyName, companyUrl, contactName, email } = req.body;

  try {
    // Send company email
    const { html, subject, text } = recruitingSignup;
    await sendEmail({
      email,
      htmlBody: html,
      subject,
      textBody: text,
    });

    // Send admin email
    const { subject: adminSubject, text: adminText } = recruitingAdmin;
    const adminTextBody = adminText({ companyName, companyUrl, contactName, email });
    await sendEmail({
      email: process.env.SENDER,
      subject: adminSubject,
      textBody: adminTextBody,
    });

    res.status(200).json({
      email: 'Email delivered',
    });
  } catch (error) {
    next(error);
  }
};
