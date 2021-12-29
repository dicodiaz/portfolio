import { motion } from 'framer-motion/dist/framer-motion';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const Contact = () => (
  <Container
    fluid
    id="contact"
    as="section"
    className="min-vh-100 d-flex flex-column justify-content-center py-5"
  >
    <Row className="mx-0 py-5 flex-column flex-md-row justify-content-evenly">
      <Col md={5}>
        <motion.h2
          className="text-center text-md-start display-5 fw-bold mb-4"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          I&apos;m always interested in hearing about new projects, so if you&apos;d like to chat
          please get in touch.
        </motion.h2>
      </Col>
      <Col md={6}>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Form action="https://formspree.io/f/meqvpkyg" method="post">
            <Form.Control
              type="text"
              name="name"
              placeholder="Full name"
              className="mb-3 py-2 border-0 border-bottom"
              required
            />
            <Form.Control
              type="email"
              name="email"
              placeholder="Email address"
              className="mb-3 py-2 border-0 border-bottom"
              required
            />
            <Form.Control
              as="textarea"
              name="msg"
              rows={3}
              placeholder="Message"
              className="mb-4 py-2 border-0 border-bottom"
              required
            />
            <div className="d-flex justify-content-center">
              <Button type="submit" size="lg" className="bg-custom1 fw-bold border-0">
                Get in touch
              </Button>
            </div>
          </Form>
        </motion.div>
      </Col>
    </Row>
  </Container>
);

export default Contact;
