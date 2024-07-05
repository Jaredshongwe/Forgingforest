import FAQ from '../models/faq.js';

export const getFAQs = async (req, res) => {
  try {
    const faqs = await FAQ.find();
    res.status(200).json(faqs);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const addFAQ = async (req, res) => {
  const { eventKey, header, body } = req.body;

  const newFAQ = new FAQ({
    eventKey,
    header,
    body,
  });

  try {
    const savedFAQ = await newFAQ.save();
    res.status(201).json(savedFAQ);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
