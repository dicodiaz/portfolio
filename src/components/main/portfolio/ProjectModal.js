import PropTypes from 'prop-types';
import { Badge, Button, ButtonGroup, Image, Modal, Row } from 'react-bootstrap';
import projects from '../../../data/projects';

const ProjectModal = ({ show, modalIndex, closeModal }) => {
  const { title, desc, img, langs, liveVersion, sourceCode } = projects[modalIndex];

  return (
    <Modal show={show} onHide={closeModal} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row xs="auto" className="mx-0 mb-2">
          {langs.map((lang) => (
            <Badge key={lang} bg="light" text="dark" className="border border-dark me-2 mb-1">
              {lang}
            </Badge>
          ))}
        </Row>
        <Image src={img} fluid />
        <p className="my-2">{desc}</p>
        <ButtonGroup className="w-100">
          <Button
            as="a"
            className="bg-custom1 fw-bold border-dark"
            href={liveVersion}
            target="_blank"
            rel="noreferrer"
          >
            See Live
          </Button>
          <Button
            as="a"
            className="bg-custom1 fw-bold border-dark"
            href={sourceCode}
            target="_blank"
            rel="noreferrer"
          >
            See Source
          </Button>
        </ButtonGroup>
      </Modal.Body>
    </Modal>
  );
};

ProjectModal.propTypes = {
  show: PropTypes.bool.isRequired,
  modalIndex: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ProjectModal;
