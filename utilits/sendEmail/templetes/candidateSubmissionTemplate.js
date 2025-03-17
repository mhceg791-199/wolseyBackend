function candidateSubmissionTemplate({
  firstName,
  lastName,
  email,
  phone,
  position,
  cv,
  message,
}) {
  console.log("====================================");
  console.log(cv);
  console.log("this is from the template");
  console.log("====================================");
  return `
   <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Candidate Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f4f4f4;
        }
        .container {
          width: 100%;
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .header {
          text-align: center;
          padding-bottom: 20px;
        }
        .header img {
          max-width: 120px;
          height: auto;
        }
        .content {
          text-align: center;
        }
        .content h2 {
          color: #333333;
          font-size: 24px;
          margin-bottom: 20px;
        }
        .content p {
          font-size: 16px;
          color: #555555;
          line-height: 1.6;
        }
        .details {
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 5px;
          margin-top: 20px;
          text-align: left;
        }
        .details p {
          margin: 10px 0;
          font-size: 15px;
          color: #555555;
        }
        .details strong {
          color: #333333;
        }
        .button-container {
          text-align: center;
          margin-top: 30px;
        }
        .button {
          background-color: #007bff;
          color: #ffffff;
          padding: 12px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 16px;
        }
        .footer {
          text-align: center;
          color: #888888;
          font-size: 12px;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
        </div>
        <div class="content">
          <h2>New Candidate Submission</h2>
          <p>A new candidate has submitted their application. Below are the details of the candidate:</p>
          <div class="details">
            <p><strong>Full Name:</strong>${firstName} ${lastName}</p>
            <p><strong>Email Address:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <p><strong>CV:</strong> <a href="${cv}" download>Download CV</a></p>
            <p><strong>Message from Candidate:</strong> ${message}</p>
          </div>
        </div>
        <div class="footer">
          <p>&copy; ${new Date().getFullYear()} Our Company. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
    `;
}

export default candidateSubmissionTemplate;
