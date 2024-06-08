/* eslint-disable react/no-unescaped-entities */
import HeroSection from '../components/SecondaryHeroSection';
import FeatureSection from '../components/FeatureSection';
import CallToActionSection from '../components/CallToActionSection';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutUs = () => (
  <div>
    <HeroSection title='About Us' />
    <div>
      <Container fluid className='p-5'>
        <Row className='my-5'>
          <Col className='text-center' sm={4} md={5}>
            <h1 style={{ fontSize: 50 }}>Against the Grain</h1>
          </Col>
          <Col sm={4} md={{ span: 4, offset: 4 }}>
            <p className='my-5' style={{ fontSize: 20 }}>
              The inspiration behind our company is deeply rooted in a
              documentary titled "Against the Grain," where Maker Sebastian Cox
              shares his profound love for inventing and creating. However, Cox
              also voices a significant concern about producing more "stuff" in
              a world already brimming with "stuff." This documentary resonated
              with us, echoing our desire to repurpose and rejuvenate what we
              already have. By breathing new life into existing materials, we
              aim to honor Cox's philosophy and contribute positively to a more
              sustainable world.
            </p>
          </Col>
        </Row>
      </Container>
    </div>

    <FeatureSection
      title='Personalized Approach'
      description='At the heart of our ethos is a commitment to creating personalized pieces
        that reflect the individuality of each client. We believe in making the art of
       woodworking accessible and affordable, allowing our friends and customers 
       to express their creativity through custom designs. Our personalized 
       approach ensures that every creation is not only a beautiful addition to a home 
       but also a meaningful piece of art that tells a unique story. By focusing on 
       bespoke craftsmanship, we celebrate the personal connection between the 
       maker and the recipient.'
      buttonText='Learn more'
      buttonLink='/services'
      imageSrc='../Placeholder.png'
    />

    <div>
      <Col className='text-center my-5' sm={4} md={{ span: 12 }}>
        <Image
          src='../Placeholder.png'
          alt='placeholder'
          width='30%'
          height='auto'
          roundedCircle
        />
      </Col>
    </div>

    <Container fluid className='p-5 my-5'>
      <Row className='my-5'>
        <Col sm={4} md={7}>
          <h1 style={{ fontSize: 50 }}>The Process</h1>
          <p className='my-5' style={{ fontSize: 20 }}>
            Our journey begins with the meticulous selection of reclaimed wood
            sourced from a variety of places, including old barns, factories,
            and even discarded furniture. This careful curation ensures that we
            use only the finest materials with rich histories and unique
            characteristics. Once selected, the wood is brought to our workshop,
            where our skilled artisans take over. With a keen eye for detail and
            a deep respect for the material, they meticulously transform these
            salvaged pieces into stunning, one-of-a-kind creations.
          </p>
        </Col>
        <Col sm={4} md={{ span: 3, offset: 1 }}>
          <Image
            className='my-5'
            src='../Placeholder.png'
            alt='placeholder'
            width='80%'
            height='280'
            rounded
          />
        </Col>
      </Row>
      <Row className='my-5'>
        <Col sm={4} md={{ span: 3 }}>
          <Image
            src='../Placeholder.png'
            alt='placeholder'
            width='80%'
            height='280'
            rounded
          />
        </Col>
        <Col sm={4} md={7}>
          <p style={{ fontSize: 20 }}>
            Our journey begins with the meticulous selection of reclaimed wood
            sourced from a variety of places, including old barns, factories,
            and even discarded furniture. This careful curation ensures that we
            use only the finest materials with rich histories and unique
            characteristics. Once selected, the wood is brought to our workshop,
            where our skilled artisans take over. With a keen eye for detail and
            a deep respect for the material, they meticulously transform these
            salvaged pieces into stunning, one-of-a-kind creations.
          </p>
        </Col>
      </Row>

      <Row className='my-5'>
        <Col sm={4} md={7}>
          <p style={{ fontSize: 20 }}>
            We are dedicated to sustainability, which is why we use
            environmentally friendly finishes such as natural oils and waxes.
            These finishes not only enhance the natural beauty of the wood,
            bringing out its rich colors and intricate grain patterns, but also
            minimize our ecological impact. By avoiding harsh chemicals and
            synthetic materials, we ensure that our products are safe for both
            our customers and the environment.
          </p>
        </Col>
        <Col sm={4} md={{ span: 3, offset: 1 }}>
          <Image
            src='../Placeholder.png'
            alt='placeholder'
            width='80%'
            height='280'
            rounded
          />
        </Col>
      </Row>

      <Row className='my-5'>
        <Col sm={4} md={{ span: 3 }}>
          <Image
            src='../Placeholder.png'
            alt='placeholder'
            width='80%'
            height='280'
            rounded
          />
        </Col>
        <Col sm={4} md={7}>
          <p style={{ fontSize: 20 }}>
            Through this thoughtful and deliberate process, we create furniture
            and decor that are not just functional, but also artful and
            sustainable. Each piece tells a story of transformation, from
            discarded wood to cherished heirloom, embodying our commitment to
            craftsmanship, sustainability, and the timeless appeal of reclaimed
            materials.
          </p>
        </Col>
      </Row>
    </Container>

    <CallToActionSection
      title='Contribute to our
        Sustainable Creations'
      description='Join us in our mission to craft beautiful, sustainable pieces by donating your
        unused wood or commissioning a unique creation.'
      buttonTwo='Learn More'
      buttonTwoLink='/services'
    />
  </div>
);

export default AboutUs;
