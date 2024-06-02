import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_MAIL_EMAIL,
    pass: process.env.SMTP_MAIL_PASSWORD,
  },
});

const sendMail = async (
  mailToEmail: string,
  mailSubject: string,
  mailBody: string
) => {
  const mailOptions = {
    from: process.env.SMTP_MAIL_EMAIL,
    to: mailToEmail,
    subject: mailSubject,
    html: mailBody,
  };
  await transporter.sendMail(mailOptions);
};

export default sendMail;
