import { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import axios from 'axios';

const GalleryCarousel = () => {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // eslint-disable-next-line no-undef
        const response = await axios.get(`https://forgingforest.onrender.com/api/images`);
        console.log('Fetched images:', response);  // Add logging
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images', error);
      }
    };

    fetchImages();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className='p-5'>
      <Row>
        <Col>
          <Carousel
            className='my-5 p-5'
            data-bs-theme='dark'
            activeIndex={index}
            onSelect={handleSelect}
          >
            {images.map((image, idx) => (
              <Carousel.Item key={idx}>
                <Row>
                  <Col className='text-center'>
                    <Image
                      className='my-5'
                      src={image.url}
                      alt={image.description}
                      width='50%'
                      height='450'
                    />
                    <p>{image.description}</p>
                  </Col>
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryCarousel;
