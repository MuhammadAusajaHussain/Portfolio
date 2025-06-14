require('dotenv').config();
const express = require('express');

const nodemailer = require('nodemailer');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('public', __dirname + '/public');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.post('/contact', async (req, res) => {
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    if (!firstName || !lastName || !email || !phoneNumber || !message ||
        firstName.trim().length === 0 || lastName.trim().length === 0 || email.trim().length === 0 || phoneNumber.trim().length === 0 || message.trim().length === 0) {
        return res.render('contact', { success: false, error: 'All fields are required.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to your own email
            subject: `Message from ${firstName} ${lastName}`,
            html: `
                <h3>New Portfolio Contact Message</h3>
                <p><strong>Name:</strong> ${firstName} ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phoneNumber}</p>
                <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>
            `
        };

        await transporter.sendMail(mailOptions);
        res.render('contact', { success: true });
    } catch (error) {
        console.error('Email error:', error);
        res.render('contact', { success: false, error: 'Failed to send email. Please try again later.' });
    }
});

app.get('/project', (req, res) => {
    res.render('project');
});

app.get('/cv', (req, res) => {
    res.download(__dirname + '/public/Ausaja_Resume.pdf', 'Ausaja_Resume.pdf');
});