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
    Professional: {
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
      <hr className="my-5" />
      {Object.entries(skills).map(([title, skills]) => {
        const { Bullet, list } = skills;
        return (
          <Row key={title} xs={1} className="pt-5">
            <h4 className="display-5 fw-bold d-flex justify-content-center align-items-center">
              <Bullet className="fs-6 text-custom1 me-2" />
              {title}
            </h4>
            {list.map((skill) => (
              <Col key={skill} className="pt-3 lead">
                {skill}
              </Col>
            ))}
          </Row>
        );
      })}
    </Container>
  );
};

export default Skills;
