import { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import axios from 'axios';

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('/api/testimonials');
        console.log('Fetched testimonials:', response.data);  // Add logging
        setTestimonials(response.data);
      } catch (error) {
        console.error('Error fetching testimonials', error);
      }
    };

    fetchTestimonials();
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
            onSelect={handleSelect}>
            {testimonials.map((testimonial, idx) => (
              <Carousel.Item key={idx}>
                <Row>
                  <Col className='text-center'>
                    <h2>{testimonial.message}</h2>
                    <Image
                      className='my-5'
                      src={testimonial.image}
                      alt={testimonial.name}
                      width='8%'
                      height='auto'
                      roundedCircle
                    />
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.title}</p>
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

export default TestimonialCarousel;
