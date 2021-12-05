import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import bgCover from '../assets/bg-cover.svg';

const Cover = ({ icons }) => (
  <Container
    fluid
    id="cover"
    as="section"
    className="bg-dark text-white min-vh-100 d-flex flex-column justify-content-center"
    style={{
      backgroundImage: `url(${bgCover})`,
      backgroundPosition: 'right bottom -50px',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <Row className="mx-0 pt-5">
      <h1 className="display-1 font-crete-round text-custom1">
        Hey there. <br /> I&apos;m Dico
      </h1>
      <p className="lead font-roboto fw-bold fs-3">I am a Software Developer</p>
      <p className="font-poppins">
        I can help you build a product, feature, or website. Please look through some of my work and
        experience. If you like what you see and have a project you need to be coded, don&apos;t
        hesitate to contact me.
      </p>
      <Col>
        <Row xs="auto" className="mx-0">
          {icons.map((icon) => {
            const { id, href, src: Icon } = icon;
            return (
              <a key={id} href={href} className="text-white fs-3">
                <Icon />
              </a>
            );
          })}
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
