import { v4 as uuidv4 } from 'uuid';
export type ImagesType = {
  mobile: string;
  desktop: string;
};

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  images: ImagesType;
  languages: string[];
  liveVersion: string;
  sourceCode: string;
};

const projects: ProjectType[] = [
  {
    id: uuidv4(),
    title: 'Financial Modeling',
    description:
      'A Single Page Application (SPA) that offers comprehensive stock market data. Users can explore financial statements for various companies, enjoy interactive features like search and sorting, and access information on over 17,000 stocks.',
    images: {
      mobile:
        'https://github.com/dicodiaz/financial-modeling/blob/develop/app_screenshot_mobile.png?raw=true',
      desktop:
        'https://github.com/dicodiaz/financial-modeling/blob/develop/app_screenshot_desktop.png?raw=true',
    },
    languages: ['React', 'Redux', 'TypeScript', 'React-Bootstrap', 'Vitest'],
    liveVersion: 'https://financial-modeling.dicodiaz.com.co/',
    sourceCode: 'https://github.com/dicodiaz/financial-modeling',
  },
  {
    id: uuidv4(),
    title: 'Math Magicians',
    description:
      'A Single Page Application (SPA) that allows users to make simple calculations and to read a random math-related quote.',
    images: {
      mobile:
        'https://github.com/dicodiaz/math-magicians/blob/develop/app_screenshot_mobile.png?raw=true',
      desktop:
        'https://github.com/dicodiaz/math-magicians/blob/develop/app_screenshot_desktop.png?raw=true',
    },
    languages: ['React', 'JavaScript', 'Bootstrap', 'Jest'],
    liveVersion: 'https://math-magicians.dicodiaz.com.co',
    sourceCode: 'https://github.com/dicodiaz/math-magicians',
  },
  {
    id: uuidv4(),
    title: 'TV Shows Finder',
    description:
      'A quick tool to look for any TV show. Built based on 2 external APIs: TvMaze API and Involvement API.',
    images: {
      mobile:
        'https://github.com/dicodiaz/tv-shows-finder/blob/develop/app_screenshot_mobile.png?raw=true',
      desktop:
        'https://github.com/dicodiaz/tv-shows-finder/blob/develop/app_screenshot_desktop.png?raw=true',
    },
    languages: ['JavaScript', 'Webpack', 'Bootstrap', 'HTML', 'Jest'],
    liveVersion: 'https://tv-shows-finder.dicodiaz.com.co/',
    sourceCode: 'https://github.com/dicodiaz/tv-shows-finder',
  },
  {
    id: uuidv4(),
    title: 'SmartSpender',
    description:
      'A mobile web application where you can manage your budget: you have a list of purchases associated with a category, so that you can see how much money you spent and on what.',
    images: {
      mobile:
        'https://github.com/dicodiaz/SmartSpender/blob/develop/app_screenshot_mobile.png?raw=true',
      desktop:
        'https://github.com/dicodiaz/SmartSpender/blob/develop/app_screenshot_mobile.png?raw=true',
    },
    languages: ['Ruby on Rails', 'ERB', 'RSpec', 'Capybara'],
    liveVersion: 'https://smart-spender.onrender.com/welcome',
    sourceCode: 'https://github.com/dicodiaz/SmartSpender',
  },
];

export default projects;
