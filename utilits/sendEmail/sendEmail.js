import EmailTemplate from "./templetes/EmailTemplate.js";
import transporter from "./transported.js";

const sendEmail = async (html) => {
  const mailOptions = {
    from: `"Wolsey"`,
    to: "minanagykhalefa@gmail.com",
    subject: "Message From Wolsey Website",
    html,
  };
  await transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.log(`email sent`);
    })
    .catch((er) => {
      console.log(er);

      return 0;
    });
};

export default sendEmail;
