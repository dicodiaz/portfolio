import { motion } from 'framer-motion/dist/framer-motion';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import projects from '../../data/projects';
import { useIsMedium } from '../../hooks/useMediaQuery';
import HighlightedProject from './portfolio/HighlightedProject';
import Project from './portfolio/Project';
import ProjectModal from './portfolio/ProjectModal';

const Portfolio = () => {
  const isMedium = useIsMedium();

  const [show, setShow] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (i) => {
    setShow(true);
    setModalIndex(i);
  };
  const closeModal = () => setShow(false);

  return (
    <>
      <Container
        fluid
        id="portfolio"
        as="section"
        className="bg-light min-vh-100 d-flex flex-column justify-content-center py-5"
      >
        <Row className="mx-0 g-0 pt-5 flex-column flex-md-row mb-md-5">
          <Col md={5} lg={4}>
            <motion.h2
              className="display-2 text-center font-crete-round mb-md-0"
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              My Recent Works
            </motion.h2>
          </Col>
          <Col md={7} lg={8} className="d-md-flex align-items-md-center pe-md-4">
            <motion.hr
              className="mt-0 mb-5 mb-md-0 w-100"
              initial={{ opacity: 0, x: 200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </Col>
        </Row>
        <Row xs={1} className="mx-0 gy-4 gy-md-0">
          {projects.map((project, i) => {
            const { id } = project;
            const delay = isMedium ? 0.5 * i : 0;

            return i === 0 ? (
              <HighlightedProject key={id} project={project} onClick={() => openModal(i)} />
            ) : (
              <Project key={id} project={project} onClick={() => openModal(i)} delay={delay} />
            );
          })}
        </Row>
      </Container>
      <ProjectModal show={show} modalIndex={modalIndex} closeModal={closeModal} />
    </>
  );
};

export default Portfolio;
