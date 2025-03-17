import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465
  auth: {
    user: "minanagykhalefa@gmail.com",
    pass: "vuhx qosb qdxt wljl", // Use an App Password instead of your real password
  },
});

export default transporter;
