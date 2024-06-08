import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialCarousel from '../components/TestimonialCarousel';
import FAQSection from '../components/FAQSection';
import CallToActionSection from '../components/CallToActionSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection
        title='Sustainable Woodworking: Recycling for a Greener Future'
        description='At Forging Forest, we are committed to an eco-friendly approach to woodworking. Our unique recycling process allows us to create beautiful, handcrafted pieces while minimizing waste and preserving the environment. Each piece we create tells a story of sustainability and craftsmanship.'
        buttonText='Learn more'
        buttonLink='/services'
        imageSrc='../Placeholder.png'
      />

      <div>
        <Container fluid className='p-5'>
          <Row className='my-5'>
            <Col className='text-center' sm={4} md={5}>
              <h1 style={{ fontSize: 50 }}>Sustainability</h1>
            </Col>
            <Col sm={4} md={{ span: 4, offset: 4 }}>
              <p className='my-5' style={{ fontSize: 20 }}>
                Using sustainable and recycled wood for furniture and
                construction projects offers numerous benefits. Not only does it
                help protect the environment by reducing deforestation and
                waste, but it also promotes sustainable living and supports the
                circular economy. By choosing sustainable and recycled wood, you
                can create beautiful and durable furniture pieces and structures
                while minimizing your carbon footprint. Additionally,
                sustainable wood products often have unique and interesting
                characteristics, adding a touch of natural beauty to any space.
                Join us in our commitment to forging a better future through
                sustainable woodworking and carpentry.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Col className='text-center my-5' sm={4} md={{ span: 12 }}>
          <Image
            src='../Placeholder.png'
            alt='placeholder'
            width='100%'
            height='900'
          />
        </Col>
      </div>

      <div>
        <Container fluid className='p-5'>
          <Row className='my-5'>
            <Col sm={4} md={5}>
              <h1 style={{ fontSize: 50 }}>
                Transforming Salvaged Wood into Beautiful Creations
              </h1>
              <p className='my-5' style={{ fontSize: 20 }}>
                At Forging Forest, we take pride in our sustainable approach to
                woodworking. From salvaging wood to transforming it into a
                finished product, we prioritize recycling and preserving the
                natural beauty of the materials.
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container fluid className='p-5'>
          <Row>
            <Col sm={4}>
              <Image
                src='../Placeholder.png'
                alt='placeholder'
                width='90%'
                height='300'
                rounded
              />
              <h1 style={{ fontSize: 40 }}>Sustainable Woodworking Process</h1>
              <p className='my-5' style={{ fontSize: 20 }}>
                Our process starts with carefully selecting reclaimed wood from
                various sources.
              </p>
            </Col>
            <Col sm={4}>
              <Image
                src='../Placeholder.png'
                alt='placeholder'
                width='90%'
                height='300'
                rounded
              />
              <h1 style={{ fontSize: 40 }}>Attention to Detail</h1>
              <p className='my-5' style={{ fontSize: 20 }}>
                Our skilled artisans meticulously transform the salvaged wood
                into stunning, one-of-a-kind pieces.
              </p>
            </Col>
            <Col sm={4}>
              <Image
                src='../Placeholder.png'
                alt='placeholder'
                width='90%'
                height='300'
                rounded
              />
              <h1 style={{ fontSize: 40 }}>
                Eco-Friendly Finishing Techniques
              </h1>
              <p className='my-5' style={{ fontSize: 20 }}>
                We use environmentally friendly finishes to enhance the natural
                beauty of the wood while minimizing our ecological impact.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Button variant='outline-dark' href='/services'>
                Learn more
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <TestimonialCarousel />
      <CallToActionSection
        title='Transforming Wood into 
      Sustainable Creations'
        description='Discover the beauty and functionality of our custom woodworking
      and carpentry projects. Contact us today!'
        buttonTwo='Learn More'
        buttonTwoLink='/services'
      />
      <FAQSection />
    </div>
  );
};

export default Home;
