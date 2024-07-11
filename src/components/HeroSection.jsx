import { Container, Row, Col, Button } from 'react-bootstrap';
import BackgroundImage from '/HeroSection.jpg';

const HeroSection = () => {
  const background = {
    width: '100%',
    height: '50rem',
    backgroundImage: `url(${BackgroundImage})`,
  };

  return (
    <div style={background}>
      <Container className='py-5 m-5'>
        <Row>
          <Col sm={10}>
            <h1 className='text-white my-5' style={{ fontSize: 90 }}>
              Crafting a Sustainable Woodwork for a Better Future
            </h1>
            <p className='text-white' style={{ fontSize: 30 }}>
              At Forging Forest, we are dedicated to sustainable woodworking and
              carpentry. Our artisans create unique pieces using
              recycled wood, promoting a greener and more eco-friendly
              lifestyle.
            </p>
            <Row className='my-5'>
              <Col sm={1}>
                <Button variant='dark' href='/services'>
                  Explore
                </Button>
              </Col>
              <Col>
                <Button variant='outline-light' href='/contact'>
                  Learn more
                </Button>
              </Col>
            </Row>
          </Col>
          <Col />
          <Col />
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
