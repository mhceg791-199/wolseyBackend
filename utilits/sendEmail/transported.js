import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465
  auth: {
    user: "wolseyengineering@gmail.com",
    pass: "sqjn goxw aoss rjyj", // Use an App Password instead of your real password
  },
});

export default transporter;
