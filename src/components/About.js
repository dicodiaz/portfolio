import { Button, Col, Container, Row } from 'react-bootstrap';

const About = () => (
  <Container
    fluid
    id="about"
    as="section"
    className="bg-dark text-white min-vh-75 d-flex flex-column justify-content-center py-5"
  >
    <Row className="mx-0 py-5 mb-5 mb-md-0">
      <Col md={5} lg={7}>
        <Row className="mx-0 g-0">
          <h2 className="display-1 font-crete-round text-custom1 mb-3">About me</h2>
          <p className="font-poppins">
            Hello, I&apos;m a software developer! I can help you build a product, feature, or
            website. Please look through some of my work and experience! If you like what you see
            and have a project you need to be coded, don&apos;t hesitate to contact me.
          </p>
          <div>
            <Button className="bg-custom1 fw-bold border-0">Get My Resume</Button>
          </div>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default About;
