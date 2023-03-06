import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import projects from '../../data/projects';
import useBoolean from '../../hooks/useBoolean';
import { useIsMedium } from '../../hooks/useMediaQuery';
import HighlightedProject from './portfolio/HighlightedProject';
import Project from './portfolio/Project';
import ProjectModal from './portfolio/ProjectModal';

const Portfolio = () => {
  const isMedium = useIsMedium();
  const { value: isModalOpen, setTrue: openModal, setFalse: closeModal } = useBoolean();
  const [modalIndex, setModalIndex] = useState(0);

  const handleOpen = useCallback((index) => {
    setModalIndex(index);
    openModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const projectModalData = projects[modalIndex];

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
          {projects.map((project, index) => {
            const { id } = project;
            const delay = isMedium ? 0.5 * index : 0;

            return index === 0 ? (
              <HighlightedProject key={id} data={project} onClick={() => handleOpen(index)} />
            ) : (
              <Project key={id} data={project} onClick={() => handleOpen(index)} delay={delay} />
            );
          })}
        </Row>
      </Container>
      <ProjectModal data={projectModalData} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Portfolio;
