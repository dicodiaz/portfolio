import PropTypes from 'prop-types';
import { Container, Row } from 'react-bootstrap';

const Footer = ({ icons }) => (
  <Container fluid id="footer" as="footer" className="py-2 border-top position-absolute bottom-0">
    <Row xs="auto" className="mx-0 justify-content-center">
      {icons.map((icon) => {
        const { id, href, src: Icon } = icon;
        return (
          <a key={id} href={href} className="text-secondary fs-3" target="_blank" rel="noreferrer">
            <Icon />
          </a>
        );
      })}
    </Row>
  </Container>
);

Footer.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      src: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default Footer;
