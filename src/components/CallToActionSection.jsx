/* eslint-disable react/prop-types */
import { Container, Row, Col, Button } from 'react-bootstrap';

const CallToActionSection = ({
  title,
  description,
  buttonTwo,
  buttonTwoLink,
}) => (
  <Container fluid className='p-5'>
    <Row className='my-5'>
      <Col className='text-center' sm={4} md={5}>
        <h1 style={{ fontSize: 50 }}>{title}</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <p style={{ fontSize: 20 }}>
          {description}
        </p>
        <Button variant='dark' href='/Contact'>
          Contact
        </Button>
        <Button className='mx-4' variant='outline-dark' href={buttonTwoLink}>
          {buttonTwo}
        </Button>
      </Col>
    </Row>
  </Container>
);

export default CallToActionSection;
