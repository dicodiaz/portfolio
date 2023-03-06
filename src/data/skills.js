import { BsCircleFill, BsDiamondFill, BsSquareFill } from 'react-icons/bs';

const skills = [
  {
    id: '1',
    title: 'Front-End',
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
  {
    id: '2',
    title: 'Tools & Methods',
    Bullet: BsSquareFill,
    list: ['Git', 'GitHub', 'Netlify', 'TDD', 'Responsive Development', 'Chrome Dev Tools'],
  },
  {
    id: '3',
    title: 'Soft Skills',
    Bullet: BsCircleFill,
    list: ['Remote Pair-Programming', 'Teamwork', 'Leadership', 'Mentoring', 'Proactivity'],
  },
];

export default skills;
