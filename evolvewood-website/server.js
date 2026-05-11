import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
    res.status(200).json({ success: true, message: 'API is running.' });
});

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const hasRealSmtpUser = process.env.SMTP_USER && process.env.SMTP_USER !== 'your_email@gmail.com';
    const hasRealSmtpPass = process.env.SMTP_PASS && process.env.SMTP_PASS !== 'your_app_password';
    const isSmtpConfigured = Boolean(hasRealSmtpUser && hasRealSmtpPass);

    if (!name || !email || !message) {
        return res.status(400).json({ success: false, message: 'Name, Email, and Message are required.' });
    }

    if (!isSmtpConfigured) {
        return res.status(503).json({
            success: false,
            message: 'Contact email is not configured yet. Add SMTP credentials to the .env file first.',
        });
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${process.env.SMTP_USER}>`, // Recommended to send from the authenticated email
            replyTo: email,
            to: process.env.RECEIVER_EMAIL || 'evolveprofileindustries@gmail.com',
            subject: `Contact Form: ${subject || 'New Inquiry'}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
        });

        res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send message.' });
    }
});

if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));

    app.get(/^\/(?!api(?:\/|$)).*/, (_req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
