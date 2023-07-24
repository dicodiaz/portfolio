export type ImagesType = {
  mobile: string;
  desktop: string;
};

export type ProjectType = {
  id: number;
  title: string;
  description: string;
  images: ImagesType;
  languages: string[];
  liveVersion: string;
  sourceCode: string;
};

const projects: ProjectType[] = [
  {
    id: 1,
    title: 'Financial Modeling',
    description: 'SPA that shows up-to-date data about the stock market.',
    images: {
      mobile:
        'https://github.com/dicodiaz/financial-modeling/blob/develop/app_screenshot_mobile.png?raw=true',
      desktop:
        'https://github.com/dicodiaz/financial-modeling/blob/develop/app_screenshot_desktop.png?raw=true',
    },
    languages: ['React', 'Redux', 'TypeScript', 'Bootstrap'],
    liveVersion: 'https://financial-modeling.dicodiaz.com.co/',
    sourceCode: 'https://github.com/dicodiaz/financial-modeling',
  },
  {
    id: 2,
    title: 'TV Shows Finder',
    description:
      'A quick tool to look for any TV show. Built based on 2 external APIs: TvMaze API and Involvement API.',
    images: {
      mobile:
        'https://github.com/dicodiaz/tv-shows-finder/blob/develop/app_screenshot.png?raw=true',
      desktop:
        'https://github.com/dicodiaz/tv-shows-finder/blob/develop/app_screenshot-2.png?raw=true',
    },
    languages: ['JavaScript', 'Webpack', 'Bootstrap', 'HTML', 'CSS'],
    liveVersion: 'https://tv-shows-finder.dicodiaz.com.co/',
    sourceCode: 'https://github.com/dicodiaz/tv-shows-finder',
  },
  {
    id: 3,
    title: 'Math Magicians',
    description:
      'This is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and to read a random math-related quote. Built using React and Bootstrap.',
    images: {
      mobile: 'https://github.com/dicodiaz/math-magicians/blob/develop/app_screenshot.png?raw=true',
      desktop:
        'https://github.com/dicodiaz/math-magicians/blob/develop/app_screenshot-2.png?raw=true',
    },
    languages: ['React', 'Bootstrap', 'Jest', 'React Testing Library'],
    liveVersion: 'https://math-magicians.dicodiaz.com.co',
    sourceCode: 'https://github.com/dicodiaz/math-magicians',
  },
];

export default projects;
