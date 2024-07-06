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
                <Nav.Link className='mx-5 ' href='/'>
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
              href='https://web.facebook.com/profile.php?id=61561363316320'
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
              href='https://www.instagram.com/forging_forest/?utm_source=ig_web_button_share_sheet'
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
            <Navbar.Brand 
            href='https://wa.me/27633595826'
            target='_blank'
            rel='noopener noreferrer'>
              <Image
                src='../whatsapp.svg'
                alt='whatsapp'
                width='4.5%'
                height='auto'
                className='p-2 mx-2'
              />
            </Navbar.Brand>
            <Navbar.Brand
              href='https://www.youtube.com/channel/UCyQvW-wGAQ10gIg88Ftg7tw'
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
          <Col>
            <div>
              <p>
                © 2024 Forging Forest. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
