import { useState } from 'react';
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (i) => {
    setShow(true);
    setModalIndex(i);
  };

  const projects = [
    {
      id: uuidv4(),
      title: 'Covid Metrics',
      desc: 'Single Page App (SPA) that shows up-to-date worldwide data about covid-19 cases.',
      img: 'https://github.com/dicodiaz/covid-metrics/blob/develop/app_screenshot-2.png?raw=true',
      langs: ['React', 'Redux', 'Bootstrap'],
      liveVersion: 'https://dicodiaz-covid-metrics.netlify.app/',
      sourceCode: 'https://github.com/dicodiaz/covid-metrics',
    },
    {
      id: uuidv4(),
      title: 'Math Magicians',
      desc: 'Single Page App (SPA) that allows users to make simple calculations and to read a random math-related quote.',
      img: 'https://github.com/dicodiaz/math-magicians/blob/develop/app_screenshot-2.png?raw=true',
      langs: ['React', 'Redux', 'Bootstrap'],
      liveVersion: 'https://dicodiaz.me/math-magicians/',
      sourceCode: 'https://github.com/dicodiaz/math-magicians',
    },
    {
      id: uuidv4(),
      title: 'TV Shows Finder',
      desc: 'A quick tool to look for any TV show. Built based on 2 external APIs: TvMaze API and Involvement API.',
      img: 'https://github.com/dicodiaz/tv-shows-finder/blob/develop/app_screenshot-2.png?raw=true',
      langs: ['JavaScript', 'Webpack', 'Bootstrap', 'HTML', 'CSS'],
      liveVersion: 'https://dicodiaz.me/tv-shows-finder/',
      sourceCode: 'https://github.com/dicodiaz/tv-shows-finder',
    },
    {
      id: uuidv4(),
      title: 'Bookstore',
      desc: 'Mock online bookstore that features thunks to consume a Bookstore API.',
      img: 'https://github.com/dicodiaz/bookstore/blob/develop/app_screenshot-2.png?raw=true',
      langs: ['React', 'Redux', 'Bootstrap'],
      liveVersion: 'https://dicodiaz.me/bookstore/',
      sourceCode: 'https://github.com/dicodiaz/bookstore',
    },
  ];

  return (
    <>
      <Container
        fluid
        id="portfolio"
        as="section"
        className="bg-light min-vh-100 d-flex flex-column justify-content-center py-5"
      >
        <h2 className="display-2 text-center font-crete-round border-bottom border-dark pb-2 mb-5 pt-5">
          My Recent Works
        </h2>
        <Row xs={1} className="mx-0 gy-5">
          {projects.map((project, i) => {
            const { id, title, desc, img, langs } = project;
            return i === 0 ? (
              <Col key={id}>
                <Row className="mx-0 gx-0">
                  <div className="mb-3">
                    <Image src={img} fluid />
                  </div>
                  <h3 className="font-crete-round display-4">{title}</h3>
                  <p className="mb-1">{desc}</p>
                  <Col>
                    <Row xs="auto" className="mx-0 mb-2">
                      {langs.map((lang) => (
                        <Badge
                          key={lang}
                          bg="light"
                          text="dark"
                          className="border border-dark me-2"
                        >
                          {lang}
                        </Badge>
                      ))}
                    </Row>
                  </Col>
                  <div>
                    <Button className="bg-custom1 fw-bold border-0" onClick={() => handleShow(i)}>
                      See Project
                    </Button>
                  </div>
                </Row>
              </Col>
            ) : (
              <Col>
                <Row className="mx-0 gx-0">
                  <Card>
                    <Card.Img variant="top" src={img} alt={title} className="border-bottom" />
                    <Card.Body>
                      <Card.Title>{title}</Card.Title>
                      <Card.Text className="mb-2">{desc}</Card.Text>
                      <Row xs="auto" className="mx-0 mb-2">
                        {langs.map((lang) => (
                          <Badge key={lang} bg="secondary" className="me-2 mb-1">
                            {lang}
                          </Badge>
                        ))}
                      </Row>
                      <Button
                        className="bg-custom1 fw-bold border-0 w-100"
                        onClick={() => handleShow(i)}
                      >
                        See Project
                      </Button>
                    </Card.Body>
                  </Card>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{projects[modalIndex].title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row xs="auto" className="mx-0 mb-2">
            {projects[modalIndex].langs.map((lang) => (
              <Badge key={lang} bg="light" text="dark" className="border border-dark me-2 mb-1">
                {lang}
              </Badge>
            ))}
          </Row>
          <Image src={projects[modalIndex].img} fluid />
          <p className="my-2">{projects[modalIndex].desc}</p>
          <ButtonGroup className="w-100">
            <Button
              as="a"
              className="bg-custom1 fw-bold border-dark"
              href={projects[modalIndex].liveVersion}
              target="_blank"
            >
              See Live
            </Button>
            <Button
              as="a"
              className="bg-custom1 fw-bold border-dark"
              href={projects[modalIndex].sourceCode}
              target="_blank"
            >
              See Source
            </Button>
          </ButtonGroup>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Portfolio;
