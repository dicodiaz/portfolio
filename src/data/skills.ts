import { IconType } from 'react-icons';
import { BsCircleFill, BsDiamondFill, BsSquareFill } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

export type SkillType = {
  id: string;
  Bullet: IconType;
  title: string;
  names: string[];
};

const skills: SkillType[] = [
  {
    id: uuidv4(),
    Bullet: BsDiamondFill,
    title: 'Front-end',
    names: [
      'React',
      'TypeScript',
      'JavaScript',
      'Redux',
      'MobX',
      'GraphQL',
      'Bootstrap',
      'HTML5',
      'CSS3',
      'Jest',
      'Vitest',
      'React Testing Library',
      'Cypress',
    ],
  },
  {
    id: uuidv4(),
    Bullet: BsSquareFill,
    title: 'Back-end',
    names: ['Ruby on Rails', 'Ruby', 'PostgreSQL', 'RSpec', 'Capybara', 'Selenium', 'REST APIs'],
  },
  {
    id: uuidv4(),
    Bullet: BsCircleFill,
    title: 'Tools & Methods',
    names: [
      'VSCode',
      'Git',
      'Gitflow',
      'GitHub',
      'Netlify',
      'Render',
      'Heroku',
      'Design Patterns',
      'Responsive Design',
      'TDD',
      'Debugging',
    ],
  },
];

export default skills;
