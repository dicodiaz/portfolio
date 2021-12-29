import { Button, Container, Row } from 'react-bootstrap';
import bgAbout from '../assets/bg-about.svg';

const About = () => (
  <Container
    fluid
    id="about"
    as="section"
    className="bg-dark text-white min-vh-75 d-flex flex-column justify-content-center py-5"
    style={{
      backgroundImage: `url(${bgAbout})`,
      backgroundPosition: 'right bottom',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <Row className="mx-0 py-5 mb-5">
      <h2 className="display-1 font-crete-round text-custom1 mb-3">About me</h2>
      <p className="font-poppins">
        Hello, I&apos;m a software developer! I can help you build a product, feature, or website.
        Please look through some of my work and experience! If you like what you see and have a
        project you need to be coded, don&apos;t hesitate to contact me.
      </p>
      <div>
        <Button className="bg-custom1 fw-bold border-0">Get My Resume</Button>
      </div>
    </Row>
  </Container>
);

export default About;
