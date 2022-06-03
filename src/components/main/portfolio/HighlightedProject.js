import { motion } from 'framer-motion/dist/framer-motion';
import PropTypes from 'prop-types';
import { Badge, Button, Col, Image, Row } from 'react-bootstrap';

const HighlightedProject = ({ project, onClick }) => {
  const { title, desc, img, langs } = project;

  return (
    <Col>
      <Row className="mx-0 gx-0 gx-md-3 mb-4 flex-column flex-md-row">
        <Col md={7} lg={6} className="mb-3">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <Image src={img} fluid />
          </motion.div>
        </Col>
        <Col md={5} lg={6}>
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-crete-round display-4">{title}</h3>
            <p className="mb-1">{desc}</p>
            <Row xs="auto" className="mx-0 mb-2">
              {langs.map((lang) => (
                <Badge key={lang} bg="light" text="dark" className="border border-dark me-2">
                  {lang}
                </Badge>
              ))}
            </Row>
            <div>
              <Button className="bg-custom1 fw-bold border-0" onClick={onClick}>
                See Project
              </Button>
            </div>
          </motion.div>
        </Col>
      </Row>
    </Col>
  );
};

HighlightedProject.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
    langs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default HighlightedProject;
