import { FC, FormEvent } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useMediaQuery } from 'usehooks-ts';

export type ContactFormProps = {
  submitting: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const ContactForm: FC<ContactFormProps> = ({ submitting, onSubmit }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Form onSubmit={onSubmit}>
      {isDesktop ? (
        <Row md={2} className="name d-none d-md-flex mb-4">
          <Col>
            <Form.Control
              type="text"
              className="border-0 border-bottom"
              name="first_name"
              placeholder="First name"
              required
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              className="border-0 border-bottom"
              name="last_name"
              placeholder="Last name"
              required
            />
          </Col>
        </Row>
      ) : (
        <Form.Control
          type="text"
          className="border-0 border-bottom mb-4 d-md-none"
          name="full_name"
          placeholder="Full name"
          required
        />
      )}
      <Form.Control
        type="email"
        className="border-0 border-bottom mb-4"
        name="email"
        placeholder="Email address"
        required
      />
      <Form.Control
        as="textarea"
        className="text-area border-0 border-bottom mb-4"
        name="msg"
        rows={3}
        placeholder="Write me something"
        required
      />
      <div className="d-flex justify-content-center justify-content-md-start">
        <Button type="submit" className="btn-submit" disabled={submitting}>
          {submitting ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
              <span className="visually-hidden">Loading...</span>
            </>
          ) : (
            <span>Get in touch</span>
          )}
        </Button>
      </div>
    </Form>
  );
};

export default ContactForm;
