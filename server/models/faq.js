import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
  eventKey: { type: String, required: true },
  header: { type: String, required: true },
  body: { type: String, required: true },
});

const FAQ = mongoose.model('FAQ', faqSchema);

export default FAQ;
