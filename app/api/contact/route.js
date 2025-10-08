import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, phone, message, company, enquiryList } = await req.json();

    // Honeypot check
    if (company && company.trim() !== "") {
      return new Response(
        JSON.stringify({ message: "Bot detected. Submission rejected." }),
        { status: 400 }
      );
    }

    // Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ message: "Please fill all required fields." }),
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ message: "Please provide a valid email address." }),
        { status: 400 }
      );
    }

    // Phone validation (if provided)
    if (phone && !/^[\d\s\-\+KATEX_INLINE_OPENKATEX_INLINE_CLOSE]+$/.test(phone)) {
      return new Response(
        JSON.stringify({ message: "Please provide a valid phone number." }),
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Format enquiry list for email
    const enquiryListText = enquiryList && enquiryList.length > 0
      ? `\n\nSelected Products/Services (${enquiryList.length} items):\n${enquiryList.map((item, index) => `${index + 1}. ${item}`).join('\n')}`
      : '';

    const enquiryListHTML = enquiryList && enquiryList.length > 0
      ? `
        <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 5px;">
          <h3 style="color: #333; margin-top: 0;">Selected Products/Services (${enquiryList.length} items):</h3>
          <ol style="color: #555;">
            ${enquiryList.map(item => `<li style="margin: 5px 0;">${item}</li>`).join('')}
          </ol>
        </div>
      `
      : '';

    // Email content - Text version
    const textContent = `
You received a new message from your website contact form:

Contact Details:
================
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
================
${message}
${enquiryListText}

---
This email was sent from the IG Electromech website contact form.
    `;

    // Email content - HTML version
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 5px 5px 0 0;
    }
    .content {
      background: #fff;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 0 0 5px 5px;
    }
    .info-section {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 20px;
    }
    .info-row {
      margin: 10px 0;
      padding: 5px 0;
      border-bottom: 1px solid #e9ecef;
    }
    .info-row:last-child {
      border-bottom: none;
    }
    .label {
      font-weight: bold;
      color: #495057;
      display: inline-block;
      width: 100px;
    }
    .value {
      color: #212529;
    }
    .message-section {
      background-color: #fff;
      padding: 15px;
      border-left: 4px solid #667eea;
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      padding: 20px;
      color: #6c757d;
      font-size: 12px;
    }
    .badge {
      display: inline-block;
      padding: 3px 8px;
      background-color: #28a745;
      color: white;
      border-radius: 3px;
      font-size: 12px;
      margin-left: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0;">New Website Enquiry</h2>
      <p style="margin: 5px 0 0 0; opacity: 0.9; font-size: 14px;">Received from IG Electromech Contact Form</p>
    </div>
    
    <div class="content">
      <div class="info-section">
        <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
        <div class="info-row">
          <span class="label">Name:</span>
          <span class="value">${name}</span>
        </div>
        <div class="info-row">
          <span class="label">Email:</span>
          <span class="value"><a href="mailto:${email}">${email}</a></span>
        </div>
        <div class="info-row">
          <span class="label">Phone:</span>
          <span class="value">${phone || '<em style="color: #6c757d;">Not provided</em>'}</span>
        </div>
      </div>

      <div class="message-section">
        <h3 style="margin-top: 0; color: #333;">Message</h3>
        <p style="white-space: pre-wrap; color: #555;">${message}</p>
      </div>

      ${enquiryListHTML}
      
      <div style="margin-top: 20px; padding: 15px; background-color: #e8f4fd; border-radius: 5px; border: 1px solid #bee5eb;">
        <p style="margin: 0; color: #004085; font-size: 14px;">
          <strong>Note:</strong> Please respond to this enquiry within 24 hours.
        </p>
      </div>
    </div>

    <div class="footer">
      <p>This is an automated email from the IG Electromech website.</p>
      <p>© ${new Date().getFullYear()} IG Electromech. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
    `;

    // Determine subject line
    const subject = enquiryList && enquiryList.length > 0
      ? `New Enquiry from ${name} - ${enquiryList.length} Product(s) Selected`
      : `New Enquiry from ${name}`;

    // Mail options
    const mailOptions = {
      from: `"IG Electromech Website" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email, // This allows direct reply to the sender
      subject: subject,
      text: textContent,
      html: htmlContent,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High',
        'Importance': 'high'
      }
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Optional: Send confirmation email to the user
    if (process.env.SEND_CONFIRMATION === 'true') {
      const userMailOptions = {
        from: `"IG Electromech" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank you for contacting IG Electromech",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Thank you for your enquiry!</h2>
            <p>Dear ${name},</p>
            <p>We have received your message and will get back to you within 24 hours.</p>
            <p>If you have any urgent queries, please feel free to call us at <strong>+971 52 518 3123</strong>.</p>
            <br>
            <p>Best regards,<br>IG Electromech Team</p>
          </div>
        `
      };
      
      try {
        await transporter.sendMail(userMailOptions);
      } catch (confirmError) {
        console.error("Confirmation email error:", confirmError);
        // Don't fail the main request if confirmation email fails
      }
    }

    return new Response(
      JSON.stringify({ 
        message: enquiryList && enquiryList.length > 0
          ? "Your enquiry and product selections have been sent successfully!"
          : "Your enquiry has been sent successfully!",
        success: true 
      }),
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

  } catch (error) {
    console.error("Email send error:", error);
    
    // More detailed error response for debugging (remove in production)
    const errorMessage = process.env.NODE_ENV === 'development' 
      ? `Failed to send enquiry: ${error.message}`
      : "Failed to send enquiry. Please try again later.";

    return new Response(
      JSON.stringify({ 
        message: errorMessage,
        success: false 
      }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
  }
}