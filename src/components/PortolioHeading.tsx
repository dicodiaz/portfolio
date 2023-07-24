import { motion } from 'framer-motion';
import { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import '../styles/portfolio.scss';

const PortfolioHeading: FC = () => {
  return (
    <Row className="flex-column flex-md-row mb-6">
      <Col xs="auto">
        <motion.h3
          className="text-center fs-h3 mb-4 mb-md-0 ms-md-2"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          My Recent Works
        </motion.h3>
      </Col>
      <Col className="d-md-flex align-items-md-center">
        <motion.div
          className="title-separator ms-md-4"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </Col>
    </Row>
  );
};

export default PortfolioHeading;
