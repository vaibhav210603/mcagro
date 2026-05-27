const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const OpenAI = require('openai');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
const allowedOrigins = process.env.CLIENT_URL ? [process.env.CLIENT_URL] : ['*'];

app.use(cors({
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        // If specific origins are defined, check against them
        if (allowedOrigins[0] === '*' || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.use(express.json());

// Remove import.meta.url logic as __dirname is available in CommonJS
// const __filename = fileURLToPath(import.meta.url); // Not needed in CommonJS
// const __dirname = path.dirname(__filename);      // Not needed in CommonJS

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Create Transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Verify connection configuration
console.log("SMTP configured for:", process.env.SMTP_USER);
transporter.verify(function (error, success) {
    if (error) {
        console.log("SMTP Connection Error:", error);
    } else {
        console.log("SMTP ready — sending as:", process.env.SMTP_USER);
    }
});

// ─── Shared email helpers ────────────────────────────────────────────────────

const HR_FROM   = `"MRC Agrotech HR" <${process.env.SMTP_USER}>`;
const INTERNAL  = process.env.INTERNAL_EMAIL; // mrcagrotech@gmail.com

const brandHeader = `
  <div style="background:#1a4731;padding:24px 32px;border-radius:12px 12px 0 0;">
    <h1 style="margin:0;color:#ffffff;font-family:Georgia,serif;font-size:22px;letter-spacing:1px;">MRC Agrotech</h1>
    <p style="margin:4px 0 0;color:#a7f3d0;font-size:12px;letter-spacing:2px;text-transform:uppercase;">From Our Soil to Your Life</p>
  </div>`;

const brandFooter = `
  <div style="background:#f0fdf4;padding:16px 32px;border-radius:0 0 12px 12px;border-top:1px solid #d1fae5;">
    <p style="margin:0;color:#6b7280;font-size:12px;">MRC Agrotech Pvt. Ltd. &nbsp;|&nbsp; hr@mrcagrotech.com &nbsp;|&nbsp; 022-40156765</p>
    <p style="margin:4px 0 0;color:#9ca3af;font-size:11px;">Block 404, 4th Floor, Sagar Tech Plaza, Andheri East, Mumbai – 400072</p>
  </div>`;

// ─── /api/apply  (Careers) ────────────────────────────────────────────────────

app.post('/api/apply', async (req, res) => {
    const { fullName, email, phone } = req.body;

    if (!fullName || !email || !phone) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        // 1. Internal alert → mrcagrotech@gmail.com
        await transporter.sendMail({
            from: HR_FROM,
            to: INTERNAL,
            replyTo: email,
            subject: `📋 New Job Application — ${fullName}`,
            html: `
              <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
                ${brandHeader}
                <div style="padding:28px 32px;background:#ffffff;">
                  <h2 style="color:#1a4731;margin-top:0;">New Job Application Received</h2>
                  <table style="width:100%;border-collapse:collapse;font-size:15px;">
                    <tr><td style="padding:8px 0;color:#6b7280;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;color:#111827;">${fullName}</td></tr>
                    <tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#059669;">${email}</a></td></tr>
                    <tr><td style="padding:8px 0;color:#6b7280;">Phone</td><td style="padding:8px 0;color:#111827;">${phone}</td></tr>
                  </table>
                  <p style="margin-top:24px;color:#374151;">Please review this application and reach out to the candidate if their profile is a match.</p>
                </div>
                ${brandFooter}
              </div>`,
        });

        // 2. Confirmation → applicant (CC: mrcagrotech@gmail.com)
        await transporter.sendMail({
            from: HR_FROM,
            to: email,
            cc: INTERNAL,
            subject: `Application Received — MRC Agrotech`,
            html: `
              <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
                ${brandHeader}
                <div style="padding:28px 32px;background:#ffffff;">
                  <h2 style="color:#1a4731;margin-top:0;">Thank you for applying, ${fullName}!</h2>
                  <p style="color:#374151;line-height:1.7;">We have received your application and our HR team will review it shortly. If your profile matches our requirements, we will get back to you within <strong>3–5 business days</strong>.</p>
                  <div style="background:#f0fdf4;border-left:4px solid #059669;padding:16px 20px;border-radius:4px;margin:24px 0;">
                    <p style="margin:0;font-size:14px;color:#065f46;"><strong>Your submitted details:</strong></p>
                    <p style="margin:8px 0 0;font-size:14px;color:#374151;">Name: ${fullName} &nbsp;|&nbsp; Phone: ${phone}</p>
                  </div>
                  <p style="color:#374151;line-height:1.7;">If you have any questions in the meantime, feel free to reply to this email.</p>
                  <p style="color:#374151;margin-top:24px;">Warm regards,<br/><strong>HR Team</strong><br/>MRC Agrotech Pvt. Ltd.</p>
                </div>
                ${brandFooter}
              </div>`,
        });

        res.status(200).json({ success: true, message: 'Application submitted successfully.' });
    } catch (error) {
        console.error("Email processing error:", error);
        res.status(500).json({ success: false, message: 'Failed to send application. Please try again later.' });
    }
});

// ─── /api/contact  (Get In Touch · Quotation · Sample · Customer Care) ────────

app.post('/api/contact', async (req, res) => {
    const { fullName, email, phone, portfolio, note } = req.body;

    if (!fullName || !email || !phone) {
        return res.status(400).json({ success: false, message: 'Name, Email and Phone are required.' });
    }

    try {
        // 1. Internal alert → mrcagrotech@gmail.com
        await transporter.sendMail({
            from: HR_FROM,
            to: INTERNAL,
            replyTo: email,
            subject: `📩 New Inquiry — ${fullName}`,
            html: `
              <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
                ${brandHeader}
                <div style="padding:28px 32px;background:#ffffff;">
                  <h2 style="color:#1a4731;margin-top:0;">New Inquiry Received</h2>
                  <table style="width:100%;border-collapse:collapse;font-size:15px;">
                    <tr><td style="padding:8px 0;color:#6b7280;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;color:#111827;">${fullName}</td></tr>
                    <tr><td style="padding:8px 0;color:#6b7280;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}" style="color:#059669;">${email}</a></td></tr>
                    <tr><td style="padding:8px 0;color:#6b7280;">Phone</td><td style="padding:8px 0;color:#111827;">${phone}</td></tr>
                    ${portfolio ? `<tr><td style="padding:8px 0;color:#6b7280;">Portfolio</td><td style="padding:8px 0;"><a href="${portfolio}" style="color:#059669;">${portfolio}</a></td></tr>` : ''}
                  </table>
                  ${note ? `<div style="background:#f9fafb;border:1px solid #e5e7eb;border-radius:8px;padding:16px;margin-top:16px;"><p style="margin:0 0 6px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;">Message</p><p style="margin:0;color:#374151;">${note}</p></div>` : ''}
                  <p style="margin-top:24px;color:#374151;">Please follow up with this person at your earliest convenience.</p>
                </div>
                ${brandFooter}
              </div>`,
        });

        // 2. Confirmation → client (CC: mrcagrotech@gmail.com)
        await transporter.sendMail({
            from: HR_FROM,
            to: email,
            cc: INTERNAL,
            subject: `We've received your request — MRC Agrotech`,
            html: `
              <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
                ${brandHeader}
                <div style="padding:28px 32px;background:#ffffff;">
                  <h2 style="color:#1a4731;margin-top:0;">Hello ${fullName},</h2>
                  <p style="color:#374151;line-height:1.7;">Thank you for reaching out to MRC Agrotech. We have successfully received your request and a member of our team will get back to you within <strong>1–2 business days</strong>.</p>
                  ${note ? `
                  <div style="background:#f0fdf4;border-left:4px solid #059669;padding:16px 20px;border-radius:4px;margin:24px 0;">
                    <p style="margin:0;font-size:14px;color:#065f46;"><strong>Your message:</strong></p>
                    <p style="margin:8px 0 0;font-size:14px;color:#374151;">${note}</p>
                  </div>` : ''}
                  <p style="color:#374151;line-height:1.7;">For urgent matters, you can also reach us directly at <a href="mailto:hr@mrcagrotech.com" style="color:#059669;">hr@mrcagrotech.com</a> or call <strong>022-40156765</strong>.</p>
                  <p style="color:#374151;margin-top:24px;">Warm regards,<br/><strong>MRC Agrotech Team</strong></p>
                </div>
                ${brandFooter}
              </div>`,
        });

        res.status(200).json({ success: true, message: 'Inquiry sent successfully.' });
    } catch (error) {
        console.error("Contact form error:", error);
        res.status(500).json({ success: false, message: 'Failed to send inquiry.' });
    }
});

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Chat route (existing)
app.post('/api/chat', async (req, res) => {
    const { message, history } = req.body;

    if (!message) {
        return res.status(400).json({ success: false, message: 'Message is required.' });
    }

    try {
        const messages = [
            { role: "system", content: "You are a helpful assistant for MRC Agro, a company specializing in sustainable, chemical-free, and regenerative farming. Answer questions about the company, its vision (zero chemicals, 100% future), products, and sustainability practices comfortably and professionally." },
            ...(history || []),
            { role: "user", content: message }
        ];

        const completion = await openai.chat.completions.create({
            messages: messages,
            model: "gpt-3.5-turbo",
        });

        const reply = completion.choices[0].message.content;
        res.status(200).json({ success: true, reply });
    } catch (error) {
        console.error("OpenAI error:", error);
        res.status(500).json({ success: false, message: 'Failed to get response from AI.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
