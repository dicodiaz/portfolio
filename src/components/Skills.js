import { motion } from 'framer-motion/dist/framer-motion';
import { Col, Container, Row } from 'react-bootstrap';
import { BsCircleFill, BsDiamondFill, BsSquareFill } from 'react-icons/bs';

const Skills = () => {
  const skills = {
    'Front-End': {
      Bullet: BsDiamondFill,
      list: ['JavaScript', 'React', 'Redux', 'Bootstrap', 'HTML5', 'CSS3', 'Jest'],
    },
    'Tools & Methods': {
      Bullet: BsSquareFill,
      list: [
        'Git',
        'Gitflow',
        'GitHub',
        'Heroku',
        'Netlify',
        'TDD',
        'Responsive Development',
        'Chrome Dev Tools',
      ],
    },
    'Soft Skills': {
      Bullet: BsCircleFill,
      list: ['Remote Pair-Programming', 'Teamwork', 'Leadership', 'Mentoring'],
    },
  };

  return (
    <Container
      fluid
      id="langs"
      as="section"
      className="bg-dark text-white min-vh-75 d-flex flex-column justify-content-center pb-5 text-center"
    >
      <hr className="my-5 my-md-0" />
      <Row xs={1} md={3} className="mx-0 g-0">
        {Object.entries(skills).map(([title, skills], i) => {
          const { Bullet, list } = skills;
          return (
            <Col key={title} className="pt-5">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 * i }}
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
