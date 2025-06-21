import type { IconType } from "react-icons";
import { FaCircle, FaDiamond, FaSquare } from "react-icons/fa6";

export type SkillType = {
  Bullet: IconType;
  title: string;
  names: string[];
};

export const skills: SkillType[] = [
  {
    Bullet: FaDiamond,
    title: "Front End",
    names: [
      "React",
      "NextJS",
      "TypeScript",
      "JavaScript",
      "Redux",
      "MobX",
      "GraphQL",
      "Tailwind",
      "HTML5",
      "CSS3",
      "Jest",
      "Vitest",
      "React Testing Library",
      "Cypress",
      "Storybook",
    ],
  },
  {
    Bullet: FaSquare,
    title: "Back End",
    names: [
      "Ruby on Rails",
      "Ruby",
      "PostgreSQL",
      "RSpec",
      "Capybara",
      "Selenium",
      "REST APIs",
    ],
  },
  {
    Bullet: FaCircle,
    title: "Tools & Methods",
    names: [
      "VSCode",
      "Git",
      "Gitflow",
      "GitHub",
      "GitHub Flow",
      "Netlify",
      "Render",
      "Heroku",
      "Design Patterns",
      "Responsive Design",
      "TDD",
      "Debugging",
    ],
  },
];
