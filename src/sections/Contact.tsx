import { useForm } from '@formspree/react';
import { motion } from 'framer-motion';
import { FC, useEffect, useState } from 'react';
import { Col, Container, Row, Toast, ToastContainer } from 'react-bootstrap';
import ContactForm, { ContactFormProps } from '../components/ContactForm';
import '../styles/contact.scss';

const Contact: FC = () => {
  const [{ submitting, succeeded }, handleSubmit] = useForm('meqvpkyg');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!submitting && succeeded) {
      setShowToast(true);
    }
  }, [submitting, succeeded]);

  const handleFormSubmit: ContactFormProps['onSubmit'] = (e) => {
    handleSubmit(e);
  };

  return (
    <>
      <Container
        as="section"
        id="contact"
        className="min-vh-100 d-flex align-items-center py-6 px-3 px-md-5"
        fluid
      >
        <Row xs={1} className="mx-0 g-0">
          <Col md={5} lg={4}>
            <motion.h4
              className="font-roboto fs-h4 text-center text-md-start"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              I'm always interested in hearing about new projects, so if you'd like to chat please
              get in touch.
            </motion.h4>
          </Col>
          <Col md={7} lg={8} className="ps-md-4">
            <motion.div
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <ContactForm submitting={submitting} onSubmit={handleFormSubmit} />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <ToastContainer className="p-3 position-fixed" position="bottom-end">
        <Toast
          onClose={() => setShowToast(false)}
          bg="success"
          show={showToast}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">Success</strong>
          </Toast.Header>
          <Toast.Body className="text-white">Thank you for your message.</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default Contact;
