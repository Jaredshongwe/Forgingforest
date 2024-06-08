import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';

const FAQSection = () => (
  <Container fluid className='p-5'>
    <Row className='my-5'>
      <Col sm={4} md={5}>
        <h1 style={{ fontSize: 50 }}>Frequently Asked Questions</h1>
        <p className='my-5' style={{ fontSize: 20 }}>
          Find answers to common questions about sustainable practices,
          materials, and custom orders.
        </p>
        <Button variant='outline-dark' href='/contact'>
          Contact
        </Button>
      </Col>
      <Col className='my-5' sm={4} md={{ span: 4, offset: 1 }}>
        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>What are sustainable practices?</Accordion.Header>
            <Accordion.Body>
              Sustainable practices in woodworking and carpentry involve the use
              of eco-friendly materials, minimizing waste, and promoting
              responsible sourcing.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              How can I order custom furniture?
            </Accordion.Header>
            <Accordion.Body>
              To place a custom furniture order, please contact our team through
              the provided contact information. We will be happy to assist you.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>What types of wood do you use?</Accordion.Header>
            <Accordion.Body>
              We primarily use reclaimed and recycled wood in our woodworking
              projects. This helps reduce deforestation and promotes sustainable
              living.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>Do you offer delivery services?</Accordion.Header>
            <Accordion.Body>
              Yes, we offer delivery services for our custom furniture orders.
              Delivery fees may apply depending on the location.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='4'>
            <Accordion.Header>Can I request a custom design?</Accordion.Header>
            <Accordion.Body>
              Absolutely! We welcome custom design requests and will work
              closely with you to bring your vision to life.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  </Container>
);

export default FAQSection;
