import { motion } from 'framer-motion';
import { Col, Container, Row } from 'react-bootstrap';
import skills from '../../data/skills';
import { useIsMedium } from '../../hooks/useMediaQuery';

const Skills = () => {
  const isMedium = useIsMedium();

  return (
    <Container
      fluid
      id="langs"
      as="section"
      className="bg-dark text-white min-vh-75 d-flex flex-column justify-content-center pb-5 text-center"
    >
      <hr className="my-5 my-md-0" />
      <Row xs={1} md={3} className="mx-0 g-0">
        {skills.map((skill, index) => {
          const { id, title, Bullet, list } = skill;
          return (
            <Col key={id} className="pt-5">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: isMedium ? 0.5 * index : 0 }}
                viewport={{ once: true }}
              >
                <h4 className="display-6 fw-bold d-flex justify-content-center align-items-center">
                  <Bullet className="fs-6 text-custom1 me-2 d-md-none" />
                  {title}
                </h4>
                {list.map((skill) => (
                  <Col key={skill} className="pt-3 lead">
                    {skill}
                  </Col>
                ))}
              </motion.div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Skills;
