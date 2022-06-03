import { motion } from 'framer-motion/dist/framer-motion';
import PropTypes from 'prop-types';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';

const Project = ({ project, onClick, delay }) => {
  const { title, desc, img, langs } = project;

  return (
    <Col md={4}>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay }}
        viewport={{ once: true }}
        className="h-100"
      >
        <Card className="h-100">
          <Card.Img variant="top" src={img} alt={title} className="border-bottom" />
          <Card.Body className="d-md-flex flex-md-column justify-content-md-between">
            <Card.Title className="fw-bold">{title}</Card.Title>
            <Card.Text className="mb-2">{desc}</Card.Text>
            <Row xs="auto" className="mx-0 mb-2">
              {langs.map((lang) => (
                <Badge key={lang} bg="secondary" className="me-2 mb-1">
                  {lang}
                </Badge>
              ))}
            </Row>
            <Button className="bg-custom1 fw-bold border-0 w-100" onClick={onClick}>
              See Project
            </Button>
          </Card.Body>
        </Card>
      </motion.div>
    </Col>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
    langs: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  delay: PropTypes.number.isRequired,
};

export default Project;
