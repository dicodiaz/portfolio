import { motion } from 'framer-motion';
import { FC } from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import { ProjectType } from '../data/projects';

export type ProjectProps = {
  data: ProjectType;
  image: string;
  onSeeProjectClick: (project: ProjectType) => void;
  delay: number;
};

const Project: FC<ProjectProps> = ({ data, image, onSeeProjectClick, delay }) => {
  const { title, description, languages } = data;

  return (
    <Col md={6} lg={4} className="project px-md-2">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay }}
        viewport={{ once: true }}
      >
        <Card className="bg-dark text-white overflow-hidden rounded-bottom-0">
          <Card.Img className="opacity-10" src={image} alt={title} />
          <Card.ImgOverlay>
            <Row className="mx-0 g-0 flex-column justify-content-end h-100">
              <Col xs="auto">
                <Card.Title className="fs-h4">{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Row xs="auto" className="mx-0 g-0">
                  {languages.map((language) => (
                    <Badge key={language} bg="none" className="badge">
                      {language}
                    </Badge>
                  ))}
                </Row>
              </Col>
            </Row>
          </Card.ImgOverlay>
          <Button
            className="d-none d-md-inline-block rounded-top-0"
            onClick={() => onSeeProjectClick(data)}
          >
            See Project
          </Button>
        </Card>
        <Button className="d-md-none w-100 rounded-top-0" onClick={() => onSeeProjectClick(data)}>
          See Project
        </Button>
      </motion.div>
    </Col>
  );
};

export default Project;
