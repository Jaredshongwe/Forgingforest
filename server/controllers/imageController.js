import Image from '../models/image.js';

// Get all images
export const getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new image
export const addImage = async (req, res) => {
  const { url, description } = req.body;

  const newImage = new Image({
    url,
    description
  });

  try {
    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
