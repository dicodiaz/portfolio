import { motion } from 'framer-motion';
import { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
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
                <p>
                  Full-stack software developer with a background in developing efficient software
                  applications in a global market. 2+ years of industry experience, including the
                  web implementation of the transformative "signals" feature, which facilitated
                  seamless migration from Client-Driven to Server-Driven UI by leveraging on the
                  observer pattern for optimistic UI rendering. Strong skills include React,
                  TypeScript, GraphQL, and Ruby on Rails.
                </p>
              </Col>
              <div>
                <Button
                  as="a"
                  href="https://docs.google.com/document/d/1Ty27_GOzJzLqzVfrGNIu-ipeaSthdX-XtgGxCa_dbIc/edit?usp=sharing"
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
