import { motion } from 'framer-motion';
import { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import '../styles/about_me.scss';

const AboutMe: FC = () => {
  return (
    <Container as="section" id="about_me" className="bg-dark text-white px-4 min-vh-50" fluid>
      <Row className="py-6">
        <Col md={6}>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Row>
              <h2 className="text-primary fs-h1">About me</h2>
              <Col md={10} lg={12}>
                <p>
                  Hello, I'm a software developer! I can help you build a product, feature, or
                  website. Please look through some of my work and experience! If you like what you
                  see and have a project you need to be coded, don't hesitate to contact me.
                </p>
              </Col>
              <div>
                <Button
                  as="a"
                  href="https://docs.google.com/document/d/1q4xKYIr9XpbfmBaQUkkvhjxuHOLx7yXifxokCCEgpco/edit?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get my resume
                </Button>
              </div>
            </Row>
          </motion.div>
        </Col>
      </Row>
      <div className="about-me-separator" />
    </Container>
  );
};

export default AboutMe;
