import { motion } from 'framer-motion/dist/framer-motion';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';

const Cover = ({ icons }) => (
  <Container
    fluid
    id="cover"
    as="section"
    className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-center"
  >
    <Row className="mx-0 pt-5">
      <Col md={5} lg={7}>
        <Row className="mx-0 flex-column flex-md-row">
          <Col>
            <h1 className="display-1 font-crete-round text-custom1">
              Hey there. <br /> I&apos;m Dico
            </h1>
            <p className="lead font-roboto fw-bold fs-3">I am a Software Developer</p>
            <p className="font-poppins">
              I can help you build a product, feature, or website. Please look through some of my
              work and experience. If you like what you see and have a project you need to be coded,
              don&apos;t hesitate to contact me.
            </p>
          </Col>
          <Col
            md={{ span: 3, order: 'first' }}
            lg={2}
            xl={1}
            className="d-md-flex flex-md-column justify-content-md-center"
          >
            <motion.div
              animate={{
                opacity: [0, 1],
                y: [200, -5, 0],
                x: [-200, 5, 0],
                scale: [1, 1, 1.1, 1],
                rotate: [0, 0, -10, 10, 0],
                transition: { ease: 'easeOut', duration: 2, delay: 2 },
              }}
            >
              <Row xs="auto" className="mx-0 justify-content-md-center">
                {icons.map((icon) => {
                  const { id, href, src: Icon } = icon;
                  return (
                    <a
                      key={id}
                      id="social-icon"
                      href={href}
                      className="text-white fs-3 py-md-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </Row>
            </motion.div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

Cover.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      src: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default Cover;
