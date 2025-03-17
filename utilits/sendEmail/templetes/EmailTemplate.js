function EmailTemplate({
  name,
  email,
  phone,
  position,
  companyName,
  industry,
  document,
}) {
  const documentDecoded = (document) => encodeURI(document);
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
          body {
              font-family: Arial, sans-serif;
              background-color: #f4f4f4;
              padding: 0;
              margin: 0;
          }
          .container {
              background-color: #ffffff;
              max-width: 600px;
              margin: 30px auto;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h2 {
              color: #333;
          }
          p {
              line-height: 1.6;
              color: #666;
          }
          .highlight {
              color: #000;
              font-weight: bold;
          }
          .company-info {
              margin-top: 20px;
              padding: 15px;
              background-color: #f0f0f0;
              border-radius: 5px;
          }
          .document img {
              width: 100%;
              height: auto;
              max-width: 400px;
              border-radius: 5px;
          }
          .footer {
              margin-top: 20px;
              font-size: 0.9em;
              color: #999;
              text-align: center;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <h2>Contact Request from MHC Website</h2>
          <p>Hello,</p>
          <p>We have received a request from someone who wants to get in touch with us at <span class="highlight">${companyName}</span>.</p>
          <p>Here are their details:</p>
          
          <p><strong>Name:</strong> <span class="highlight">${name}</span></p>
          <p><strong>Email:</strong> <span class="highlight">${email}</span></p>
          <p><strong>Phone:</strong> <span class="highlight">${phone}</span></p>
          <p><strong>Position:</strong> <span class="highlight">${position}</span></p>
          <p><strong>Industry:</strong> <span class="highlight">${industry}</span></p>
          
          <div class="company-info">
              <h3>Document</h3>
              <div class="document">
          <p><span class="highlight">${documentDecoded(document.url)}</span></p>
              </div>
          </div>

          <div class="footer">
              <p>If you have any questions, feel free to contact us at <strong>support@mhcm.com</strong>.</p>
              <p>© 2024 MHCm, All Rights Reserved.</p>
          </div>
      </div>
  </body>
  </html>
  `;
}

export default EmailTemplate;
