import { Container, Row } from 'react-bootstrap';
import icons from '../../data/icons';

const Footer = () => (
  <Container fluid id="footer" as="footer" className="py-2 border-top position-absolute bottom-0">
    <Row xs="auto" className="mx-0 justify-content-center">
      {icons.map((icon) => {
        const { id, href, src: Icon } = icon;
        return (
          <a
            key={id}
            id="social-icon"
            href={href}
            className="text-secondary fs-3"
            target="_blank"
            rel="noreferrer"
          >
            <Icon />
          </a>
        );
      })}
    </Row>
  </Container>
);

export default Footer;
