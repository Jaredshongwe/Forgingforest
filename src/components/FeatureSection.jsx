/* eslint-disable react/prop-types */
import { Container, Row, Col, Button, Image } from 'react-bootstrap';

const FeatureSection = ({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
}) => (
  <Container fluid className='p-5'>
    <Row className='my-5'>
      <Col sm={4} md={5}>
        <h1 style={{ fontSize: 50 }}>{title}</h1>
        <p className='my-5' style={{ fontSize: 20 }}>
          {description}
        </p>
        <Button variant='outline-dark' href={buttonLink}>
          {buttonText}
        </Button>
      </Col>
      <Col sm={4} md={{ span: 4, offset: 1 }}>
        <Image
          src={imageSrc}
          alt='placeholder'
          width='80%'
          height='500'
          rounded
        />
      </Col>
    </Row>
  </Container>
);

export default FeatureSection;
