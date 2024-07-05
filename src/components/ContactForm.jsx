import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import MessageModal from './Modal';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [modalShow, setModalShow] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact/submit', formData);
      setModalMessage('Message sent successfully');
      setModalShow(true);
      // Clear the form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      setModalMessage('Error submitting form');
      setModalShow(true);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Row className='p-1'>
          <Col>
            <Form.Group controlId='name'>
              <Form.Control
                size='lg'
                type='text'
                placeholder='Name'
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId='email'>
              <Form.Control
                size='lg'
                type='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className='p-1'>
          <Form.Group controlId='phone'>
            <Form.Control
              size='lg'
              type='text'
              placeholder='Phone'
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Row className='p-1'>
          <Form.Group controlId='message'>
            <Form.Control
              size='lg'
              as='textarea'
              rows={3}
              placeholder='Message'
              value={formData.message}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>
        <Button className='my-2' variant='outline-dark' type='submit'>
          Send
        </Button>
      </Form>
      <MessageModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        message={modalMessage}
      />
    </>
  );
};

export default ContactForm;
