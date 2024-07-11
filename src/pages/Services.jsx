import { Container, Row, Col, Image } from 'react-bootstrap';
import HeroSection from '../components/SecondaryHeroSection';
import GalleryCarousel from '../components/GalleryCarousel';
import CallToActionSection from '../components/CallToActionSection';

const Services = () => {
  return (
    <div>
      <HeroSection title='Services'
      image='../Services.jpg' />
      <Container fluid className='p-5'>
        <Row className='my-5'>
          <Col className='mx-5' md={{ span: 3 }}>
            <Image
              src='../handmade.jpg'
              alt='Handmade Furniture'
              width='80%'
              height='250'
              className='my-5 hoverimg'
            />
            <h2 className='my-5' style={{ fontSize: 50 }}>
              Handmade Furniture
            </h2>
            <p style={{ fontSize: 20 }}>
              At Forging Forest, our passion lies in crafting exquisite handmade
              furniture that blends timeless design with modern functionality.
              Each piece is thoughtfully designed and meticulously constructed
              by our skilled artisans, ensuring that every detail is perfect.
              Using high-quality reclaimed wood, we create unique, sustainable
              furniture that not only enhances your living space but also
              contributes to a greener planet. Our dedication to craftsmanship
              and sustainability means that you receive furniture that is not
              only beautiful but also environmentally responsible.
            </p>
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <Image
              src='../refurbish.jpg'
              alt='Refurbishing'
              width='80%'
              height='250'
              className='my-5 hoverimg'
            />
            <h2 className='my-5' style={{ fontSize: 50 }}>
              Custom Refurbishment
            </h2>
            <p style={{ fontSize: 20 }}>
              At Forging Forest, our passion lies in crafting exquisite handmade
              furniture that blends timeless design with modern functionality.
              Each piece is thoughtfully designed and meticulously constructed
              by our skilled artisans, ensuring that every detail is perfect.
              Using high-quality reclaimed wood, we create unique, sustainable
              furniture that not only enhances your living space but also
              contributes to a greener planet. Our dedication to craftsmanship
              and sustainability means that you receive furniture that is not
              only beautiful but also environmentally responsible.
            </p>
          </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <Image
              src='../donate.jpg'
              alt='Wood Donations'
              width='80%'
              height='250'
              className='my-5 hoverimg'
            />
            <h2 className='my-5' style={{ fontSize: 50 }}>
              Donations
            </h2>
            <p style={{ fontSize: 20 }}>
              Forging Forest is committed to making a positive impact on both
              the environment and the community. We accept donations of unused
              or unwanted wood, which our artisans skillfully transform into
              beautiful, functional pieces. Your contributions help us continue
              our mission of creating sustainable, handmade furniture while
              reducing waste. Additionally, we often collaborate with local
              organizations to donate finished pieces to those in need, ensuring
              that everyone has access to quality furniture. Your donations make
              a difference, turning potential waste into valuable resources for
              creative and charitable purposes.
            </p>
          </Col>
        </Row>
      </Container>
      <h1 style={{ fontSize: 50 }}>Gallery</h1>
      <GalleryCarousel />
      <CallToActionSection
        title='Transforming Wood into 
      Sustainable Creations'
        description='Discover the beauty and functionality of our custom woodworking
      and carpentry projects. Contact us today!'
        buttonTwo='Learn More'
        buttonTwoLink='/about'
      />
    </div>
  );
};

export default Services;
