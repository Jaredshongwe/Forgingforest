/* eslint-disable react/prop-types */
import { Container, Row, Col } from 'react-bootstrap';

const SecondaryHeroSection = ({ title, image }) => (
  <div
    style={{
      backgroundImage: `url(${image})`,
      height: '400px',
      color: 'white',
    }}>
    <Container className='py-5 m-5'>
      <Row className='align-items-center'>
        <Col>
          <h1 style={{ fontSize: 90 }}>{title}</h1>
        </Col>
      </Row>
    </Container>
  </div>
);

export default SecondaryHeroSection;
