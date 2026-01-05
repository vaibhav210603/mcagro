import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
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

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
transporter.verify(function (error, success) {
    if (error) {
        console.log("SMTP Connection Error:", error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

app.post('/api/apply', async (req, res) => {
    const { fullName, email, phone } = req.body;

    if (!fullName || !email || !phone) {
        return res.status(400).json({ success: false, message: 'All fields are required.' });
    }

    try {
        // 1. Email to HR
        const hrMailOptions = {
            from: `"${fullName}" <${process.env.SMTP_USER}>`, // Sender address
            to: process.env.HR_EMAIL || process.env.SMTP_USER, // List of receivers (HR)
            replyTo: email,
            subject: `New Job Application: ${fullName}`,
            html: `
                <h2>New Job Application Received</h2>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <br/>
                <p>Please review this application.</p>
            `,
        };

        // 2. Email to Applicant
        const applicantMailOptions = {
            from: `"MRC Agro HR" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Application Received - MRC Agro',
            html: `
                <h2>Thank you for your application, ${fullName}!</h2>
                <p>We have received your details.</p>
                <ul>
                    <li><strong>Name:</strong> ${fullName}</li>
                    <li><strong>Phone:</strong> ${phone}</li>
                </ul>
                <p>Our HR team will review your application and get back to you shortly if your profile matches our requirements.</p>
                <br/>
                <p>Best Regards,<br/>MRC Agro Team</p>
            `,
        };

        // Send emails
        await transporter.sendMail(hrMailOptions);
        await transporter.sendMail(applicantMailOptions);

        res.status(200).json({ success: true, message: 'Application submitted successfully.' });

    } catch (error) {
        console.error("Email processing error:", error);
        res.status(500).json({ success: false, message: 'Failed to send application. Please try again later.' });
    }
});

app.post('/api/contact', async (req, res) => {
    const { fullName, email, phone, portfolio, note } = req.body;

    if (!fullName || !email || !phone) {
        return res.status(400).json({ success: false, message: 'Name, Email and Phone are required.' });
    }

    try {
        // 1. Email to HR
        const hrMailOptions = {
            from: `"${fullName}" <${process.env.SMTP_USER}>`,
            to: process.env.HR_EMAIL || process.env.SMTP_USER,
            replyTo: email,
            subject: `New Inquiry: ${fullName}`,
            html: `
                <h2>New Inquiry Received</h2>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                ${portfolio ? `<p><strong>Portfolio:</strong> ${portfolio}</p>` : ''}
                ${note ? `<p><strong>Note:</strong> ${note}</p>` : ''}
                <br/>
                <p>Please review this inquiry.</p>
            `,
        };

        // 2. Email to User
        const userMailOptions = {
            from: `"MRC Agro Team" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Thank you for contacting MRC Agro',
            html: `
                <h2>Hello ${fullName},</h2>
                <p>Thank you for getting in touch with us. We have received your inquiry.</p>
                <p>Our team will get back to you shortly.</p>
                <br/>
                <p>Best Regards,<br/>MRC Agro Team</p>
            `,
        };

        await transporter.sendMail(hrMailOptions);
        await transporter.sendMail(userMailOptions);

        res.status(200).json({ success: true, message: 'Inquiry sent successfully.' });
    } catch (error) {
        console.error("Contact form error:", error);
        res.status(500).json({ success: false, message: 'Failed to send inquiry.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default app;

