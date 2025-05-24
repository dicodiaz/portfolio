import { motion } from 'framer-motion';
import { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { aboutMeFacts } from '../data/aboutMeFacts';
import '../styles/about_me.scss';

const AboutMe: FC = () => {
  return (
    <Container as="section" id="about_me" className="bg-dark text-white pt-6 px-3 px-md-5" fluid>
      <Row className="mx-0 g-0 pb-7 py-md-5">
        <Col sm={12} md={6}>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Row className="mx-0 g-0">
              <h2 className="text-primary fs-h1">About me</h2>
              <Col md={10} lg={12}>
                <ul className="ps-4">
                  {aboutMeFacts.map(({ id, text }) => (
                    <li key={id}>{text}</li>
                  ))}
                </ul>
              </Col>
              <div className="mt-2">
                <Button
                  as="a"
                  href="https://drive.google.com/file/d/1bz5sRkdVmrI01cBIIoe6riDsEUgIufaV/view?usp=sharing"
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
