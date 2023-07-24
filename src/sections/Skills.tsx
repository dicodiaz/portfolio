import { motion } from 'framer-motion';
import { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useMediaQuery } from 'usehooks-ts';
import skills from '../data/skills';
import '../styles/skills.scss';

const Skills: FC = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Container id="skills" className="bg-dark text-white text-center text-md-start px-4" fluid>
      <Row xs={1} md={3} className="py-6">
        {skills.map((skill, index) => {
          const { id, title, Bullet, names } = skill;
          return (
            <Col key={id} className="skill">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: isDesktop ? 0.5 * index : 0 }}
                viewport={{ once: true }}
              >
                <Row
                  xs="auto"
                  className="justify-content-center justify-content-md-start align-items-center mb-4"
                >
                  <Bullet className="text-primary me-2" />
                  <h4 className="font-roboto fs-h4 mb-0">{title}</h4>
                </Row>
                <Row xs={1}>
                  {names.map((name) => (
                    <Col key={name} className="fs-h6">
                      {name}
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Skills;
