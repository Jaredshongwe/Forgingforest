/* eslint-disable react/no-unescaped-entities */
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from '../components/ContactForm';
import HeroSection from '../components/SecondaryHeroSection';

const ContactUs = () => {
  return (
    <div>
      <HeroSection title='Contact Us' />
      <Container>
        <Row className='my-5'>
          <Col md={5}>
            <h2 className='my-5' style={{ fontSize: 50 }}>
              Get in Touch
            </h2>
            <p>
              <strong>Email:</strong>{' '}
              <a
                className='link-underline link-underline-opacity-0'
                href='mailto:forgingforest@gmail.com'>
                <em>forgingforest@gmail.com</em>
              </a>
            </p>
            <p>
              <strong>Phone:</strong> (+27) 63 359 3826
            </p>
            <p>
              <em>*Socials below</em>
            </p>
          </Col>
          <Col md={{ span: 6 }}>
            <p style={{ fontSize: 20 }}>
              We would love to hear from you! Whether you have a question about
              our services, want to discuss a custom project, or simply want to
              learn more about our sustainable practices, our team is here to
              help. Reach out to us via phone, email, or by filling out the
              contact form on our website. We’re passionate about creating
              beautiful, sustainable pieces and are excited to collaborate with
              you. Let's work together to bring your vision to life while making
              a positive impact on the environment. Get in touch today and start
              your journey with Forging Forest
            </p>
          </Col>
        </Row>
        <Row className='my-5'>
          <Col>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
