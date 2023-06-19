import nodemailer, { TransportOptions } from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
} as TransportOptions);

export const send = ({
  email,
  subject,
  html,
}: {
  email: string;
  subject: string;
  html: string;
}) => {
  return transporter
    .sendMail({
      from: 'Nice Gadgets',
      to: email,
      subject: subject,
      text: '',
      html: html,
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error('Error sending email:', error);
      throw error;
    });
};

export const sendActivationLink = async(email: string, token: string) => {
  const link = `${process.env.CLIENT_URL}/activate/${token}`;

  return send({
    email,
    subject: 'Nice Gadgets: Account activation',
    html: `
      <h1>Account activation</h1>
      <a href="${link}">Activate your account</a>
    `,
  });
};

export const emailService = { send, sendActivationLink };
