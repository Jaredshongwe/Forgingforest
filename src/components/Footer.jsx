import { Container, Row, Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

const Footer = () => {
  return (
    <footer>
      <Container fluid>
        <Row>
          <Col>
            <Navbar className='mx-5 my-5'>
              <Nav className='me-auto '>
                <Nav.Link className='mx-5 ' href='/home'>
                  Home
                </Nav.Link>
                <Nav.Link className='mx-5 ' href='/about'>
                  About Us
                </Nav.Link>
                <Nav.Link className='mx-5 ' href='/services'>
                  Services
                </Nav.Link>
                <Nav.Link className='mx-5 ' href='/contact'>
                  Contact Us
                </Nav.Link>
              </Nav>
            </Navbar>
          </Col>

          <Col className='my-5 mx-5 text-end'>
            <Navbar.Brand
              href='http://facebook.com'
              target='_blank'
              rel='noopener noreferrer'>
              <Image
                src='../facebook.svg'
                alt='facebook'
                width='4.5%'
                height='auto'
                className='p-2 mx-2'
              />
            </Navbar.Brand>
            <Navbar.Brand
              href='http://instagram.com'
              target='_blank'
              rel='noopener noreferrer'>
              <Image
                src='../instagram.svg'
                alt='instagram'
                width='4.5%'
                height='auto'
                className='p-2 mx-2'
              />
            </Navbar.Brand>
            <Navbar.Brand href='/contact'>
              <Image
                src='../whatsapp.svg'
                alt='whatsapp'
                width='4.5%'
                height='auto'
                className='p-2 mx-2'
              />
            </Navbar.Brand>
            <Navbar.Brand
              href='http://youtube.com'
              target='_blank'
              rel='noopener noreferrer'>
              <Image
                src='../youtube.svg'
                alt='youtube'
                width='4.5%'
                height='auto'
                className='p-2 mx-2'
              />
            </Navbar.Brand>
          </Col>
        </Row>
        <Row className='bg-dark text-white p-3'>
          <Col className='text-center'>
            <div>
              <p>
                © 2024 Forging Forest. All rights reserved. |{' '}
                <a href='/privacy' className='text-white px-5'>
                  Privacy Policy
                </a>{' '}
                |{' '}
                <a href='/terms' className='text-white px-5'>
                  Terms and Conditions
                </a>{' '}
                |{' '}
                <a href='/cookies' className='text-white px-5'>
                  Cookie Policy
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
