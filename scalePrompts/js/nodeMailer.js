const nodemailer = require("nodemailer");

// Create a transporter object.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "your_email@gmail.com",
    password: "your_password",
  },
});

// Set the message options.
const mailOptions = {
  from: "your_email@gmail.com",
  to: "recipient_email@gmail.com",
  subject: "This is a test email",
  text: "This is the body of the email.",
};

// Deliver the message.
transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent successfully");
  }
});
