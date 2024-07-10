import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact.js';
import testimonialRoutes from './routes/testimonial.js';
import imageRoutes from './routes/image.js';
import faqRoutes from './routes/faq.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'https://vercel.com/jareds-projects-214d4ea3/forgingforest/eeqMrqmkowNnHXd6aD11RNY9W5be',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/images', imageRoutes);
app.use('/api/faqs', faqRoutes);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
