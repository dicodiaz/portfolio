import { FC, Fragment } from 'react';
import { Badge, Button, Col, Image, Modal, Row } from 'react-bootstrap';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { ImagesSizes, ProjectType } from '../data/projects';

export type ProjectModalProps = {
  data: ProjectType;
  show: boolean;
  onHide: () => void;
  imageSize: ImagesSizes;
};

const ProjectModal: FC<ProjectModalProps> = ({ data, show, onHide, imageSize }) => {
  const { title, languages, images, description, linksList } = data;
  const image = images[imageSize];

  return (
    <Modal show={show} onHide={onHide} size="xl" centered>
      <Modal.Header closeButton>
        <Modal.Title className="font-roboto fs-h4 text-info">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row xs="auto" className="mx-0 g-0 mb-3 mb-md-4">
          {languages.map((language) => (
            <Badge key={language} bg="white">
              {language}
            </Badge>
          ))}
        </Row>
        <Row xs={1} className="mx-0 g-0">
          <Col
            md={7}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0 pe-md-4"
          >
            <Image src={image} alt={title} fluid />
          </Col>
          <Col md={5} className="d-md-flex flex-md-column justify-content-md-between">
            <p className="mb-3">{description}</p>
            <div>
              {linksList.map((links) => {
                const { label, liveVersion, sourceCode } = links;

                return (
                  <Fragment key={liveVersion}>
                    {label && <small>{label}</small>}
                    <Row
                      xs="auto"
                      className="mx-0 g-0 justify-content-between justify-content-md-start"
                    >
                      <Col>
                        <Button
                          as="a"
                          href={liveVersion}
                          className="d-flex align-items-center me-2-half"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span className="fs-xs-7">See Live</span>
                          <BiLinkExternal className="fs-5 ms-2 d-xs-none" />
                        </Button>
                      </Col>
                      {sourceCode && (
                        <Col>
                          <Button
                            as="a"
                            href={sourceCode}
                            className="d-flex align-items-center"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="fs-xs-7">See Source</span>
                            <FaGithub className="fs-5 ms-2 d-xs-none" />
                          </Button>
                        </Col>
                      )}
                    </Row>
                  </Fragment>
                );
              })}
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectModal;
