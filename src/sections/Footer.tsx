import { Container, Row } from 'react-bootstrap';
import icons from '../data/iconLinks';
import '../styles/footer.scss';

const Footer = () => (
  <Container
    as="footer"
    id="footer"
    className="py-3 border-top border-footer position-absolute bottom-0"
    fluid
  >
    <Row xs="auto" className="justify-content-center">
      {icons.map((icon) => {
        const { id, href, Icon } = icon;
        return (
          <a
            key={id}
            href={href}
            className="d-flex fs-4 text-footer-icons p-2"
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
