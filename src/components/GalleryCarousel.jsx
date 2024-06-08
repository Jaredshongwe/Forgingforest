import { Container, Row, Col, Carousel, Image } from 'react-bootstrap';
import { useState } from 'react';

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

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
            {Array(3)
              .fill()
              .map((_, idx) => (
                <Carousel.Item key={idx}>
                  <Row>
                    <Col className='text-center'>
                      <Image
                        className='my-5'
                        src='../Placeholder.png'
                        alt='placeholder'
                        width='50%'
                        height='450'
                      />
                      <p>Caption</p>
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
