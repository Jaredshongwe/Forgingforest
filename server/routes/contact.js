/* eslint-disable no-undef */
import express from 'express';
import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/submit', async (req, res) => {
  const { name, email, phone, message } = req.body;
  
  try {
    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (err) {
    console.error('Error in contact form submission:', err.message);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

export default router;
