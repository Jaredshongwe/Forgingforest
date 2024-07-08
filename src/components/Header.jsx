import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <header>
      <Navbar className='mx-5 my-5' bg='white' data-bs-theme='light'>
        <Navbar.Brand className='mx-5' href='/'>
          <img
            alt=''
            src='../Logo.png'
            width='70'
            height='70'
            className='d-inline-block align-top'
          />
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link className='mx-5' href='/about'>
            About Us
          </Nav.Link>
          <Nav.Link className='mx-5' href='/services'>
            Services
          </Nav.Link>
          <Nav.Link className='mx-5' href='/contact'>
            Contact Us
          </Nav.Link>
        </Nav>
        <Col className='me-5' xs='auto'>
          <Button variant='dark' href='/about'>Learn More</Button>
        </Col>
      </Navbar>
    </header>
  );
}

export default Header;
