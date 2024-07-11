import { useEffect, useState } from 'react';
import { Container, Row, Col, Accordion, Button } from 'react-bootstrap';
import axios from 'axios';

const FAQSection = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get('https://forgingforest.onrender.com/api/faqs');
        console.log('Fetched testimonials:', response.data);
        setFaqs(response.data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      }
    };

    fetchFAQs();
  }, []);

  return (
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
            {faqs.map((faq, idx) => (
              <Accordion.Item eventKey={faq.eventKey} key={idx}>
                <Accordion.Header>{faq.header}</Accordion.Header>
                <Accordion.Body>{faq.body}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default FAQSection;
