import { v4 as uuidv4 } from 'uuid';

const projects = [
  {
    id: uuidv4(),
    title: 'Financial Modeling',
    desc: 'SPA that shows up-to-date worldwide data about stock prices.',
    img: 'https://github.com/dicodiaz/covid-metrics/blob/develop/app_screenshot-2.png?raw=true',
    langs: ['React', 'Redux', 'Bootstrap'],
    liveVersion: 'https://financial-modeling.dicodiaz.com.co/',
    sourceCode: 'https://github.com/dicodiaz/financial-modeling',
  },
  {
    id: uuidv4(),
    title: 'TV Shows Finder',
    desc: 'A quick tool to look for any TV show. Built based on 2 external APIs: TvMaze API and Involvement API.',
    img: 'https://github.com/dicodiaz/tv-shows-finder/blob/develop/app_screenshot-2.png?raw=true',
    langs: ['JavaScript', 'Webpack', 'Bootstrap', 'HTML', 'CSS'],
    liveVersion: 'https://tv-shows-finder.dicodiaz.com.co/',
    sourceCode: 'https://github.com/dicodiaz/tv-shows-finder',
  },
];

export default projects;
