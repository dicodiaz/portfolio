import { BsCircleFill, BsDiamondFill, BsSquareFill } from 'react-icons/bs';

const skills = {
  'Front-End': {
    Bullet: BsDiamondFill,
    list: [
      'TypeScript',
      'JavaScript',
      'React',
      'Redux',
      'GraphQL',
      'Bootstrap',
      'HTML5',
      'CSS3',
      'Jest',
      'React Testing Library',
      'Enzyme',
      'Cypress',
      'Kotlin',
    ],
  },
  'Tools & Methods': {
    Bullet: BsSquareFill,
    list: ['Git', 'GitHub', 'Netlify', 'TDD', 'Responsive Development', 'Chrome Dev Tools'],
  },
  'Soft Skills': {
    Bullet: BsCircleFill,
    list: ['Remote Pair-Programming', 'Teamwork', 'Leadership', 'Mentoring', 'Proactivity'],
  },
};

export default skills;
