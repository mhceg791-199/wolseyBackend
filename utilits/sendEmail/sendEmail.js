import EmailTemplate from "./templetes/EmailTemplate.js";
import transporter from "./transported.js";

const sendEmail = async (html, websiteName) => {
  const handelEmails = (websiteName) => {
    if (websiteName == "wolsey") {
      return {
        from: "wolsey",
        to: "info@wolsey.ca",
        subject: "Message From Wolsey Website",
      };
    }
    if (websiteName == "MHCEG") {
      return {
        from: "MHCEG",
        to: "info@mhceg.com",
        subject: "Message From MHCEG Website",
      };
    }
    if (websiteName == "MHC") {
      return {
        from: "MHC",
        to: "info@mosaicholding.com",
        subject: "Message From MHC Website",
      };
    }
    if (websiteName == "ARUP") {
      return {
        from: "ARUP",
        to: "info@adal.ca",
        subject: "Message From ARUP Website",
      };
    }
    return;
  };

  const { from, to, subject } = handelEmails(websiteName);
  console.log("====================================");
  console.log(handelEmails(websiteName));
  console.log(websiteName);
  console.log("====================================");
  const mailOptions = {
    from,
    to,
    subject,
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
