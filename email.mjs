// Looking to send emails in production? Check out our Email API/SMTP product!
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "81e2c5cdc1a4fd",
    pass: "9e21ee037bc25b",
  },
});

const sendEmail = async (to, subject, text) => {
  const info = await transport.sendEmail({
    from: "Apple Server <a@apple.com>",
    to,
    subject,
    html: body,
  });
};

export { sendEmail };
