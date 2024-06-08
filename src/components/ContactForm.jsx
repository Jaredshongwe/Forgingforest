import { Form, Button, Row, Col } from 'react-bootstrap';

const ContactForm = () => {
  return (
    <Form>
      <Row className='p-1'>
        <Col>
          <Form.Group controlId='formName'>
            <Form.Control size='lg' type='text' placeholder='Name' />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId='formEmail'>
            <Form.Control size='lg' type='email' placeholder='Email' />
          </Form.Group>
        </Col>
      </Row>
      <Row className='p-1'>
        <Form.Group controlId='formPhone'>
          <Form.Control size='lg' type='text' placeholder='Phone' />
        </Form.Group>
      </Row>
      <Row className='p-1'>
        <Form.Group controlId='formMessage'>
          <Form.Control
            size='lg'
            as='textarea'
            rows={3}
            placeholder='Message'
          />
        </Form.Group>
      </Row>

      <Button variant='outline-dark' type='submit'>
        Send
      </Button>
    </Form>
  );
};

export default ContactForm;
