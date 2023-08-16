import { FC, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'usehooks-ts';
import HighlightedProject from '../components/HighlightedProject';
import PortfolioHeading from '../components/PortolioHeading';
import Project from '../components/Project';
import ProjectModal from '../components/ProjectModal';
import projects, { ProjectType } from '../data/projects';
import '../styles/portfolio.scss';

const Portfolio: FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isLargeDesktop = useMediaQuery('(min-width: 992px)');
  const isXXLDesktop = useMediaQuery('(min-width: 1400px)');
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<ProjectType>(projects[0]);

  const handleSeeProjectClick = (project: ProjectType) => {
    setModalData(project);
    setShowModal(true);
  };

  const handleModalHide = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container as="section" id="portfolio" className="min-vh-100 py-6 px-3 px-md-5" fluid>
        <PortfolioHeading />
        <Row xs={1} className="mx-0 g-0 projects justify-content-center">
          {projects.map((project, index) => {
            const { id, images } = project;
            const imageDesktop = isXXLDesktop ? images.xxlDesktop : images.desktop;
            const image = isDesktop ? imageDesktop : images.mobile;
            const columns = isLargeDesktop ? 3 : 2;
            const delay = isDesktop ? 0.5 * ((index - 1) % columns) : 0;

            if (index === 0) {
              return (
                <HighlightedProject
                  key={id}
                  data={project}
                  image={image}
                  onSeeProjectClick={handleSeeProjectClick}
                />
              );
            }

            return (
              <Project
                key={id}
                data={project}
                image={image}
                onSeeProjectClick={handleSeeProjectClick}
                delay={delay}
              />
            );
          })}
        </Row>
      </Container>
      <ProjectModal data={modalData} show={showModal} onHide={handleModalHide} />
    </>
  );
};

export default Portfolio;
