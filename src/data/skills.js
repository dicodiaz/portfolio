import { BsCircleFill, BsDiamondFill, BsSquareFill } from 'react-icons/bs';

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

export default skills;
