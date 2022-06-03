import { v4 as uuidv4 } from 'uuid';

const projects = [
  {
    id: uuidv4(),
    title: 'Covid Metrics',
    desc: 'Single Page App (SPA) that shows up-to-date worldwide data about covid-19 cases.',
    img: 'https://github.com/dicodiaz/covid-metrics/blob/develop/app_screenshot-2.png?raw=true',
    langs: ['React', 'Redux', 'Bootstrap'],
    liveVersion: 'https://dicodiaz-covid-metrics.netlify.app/',
    sourceCode: 'https://github.com/dicodiaz/covid-metrics',
  },
  {
    id: uuidv4(),
    title: 'Math Magicians',
    desc: 'Single Page App (SPA) that allows users to make simple calculations and to read a random math-related quote.',
    img: 'https://github.com/dicodiaz/math-magicians/blob/develop/app_screenshot-2.png?raw=true',
    langs: ['React', 'Redux', 'Bootstrap'],
    liveVersion: 'https://dicodiaz.me/math-magicians/',
    sourceCode: 'https://github.com/dicodiaz/math-magicians',
  },
  {
    id: uuidv4(),
    title: 'TV Shows Finder',
    desc: 'A quick tool to look for any TV show. Built based on 2 external APIs: TvMaze API and Involvement API.',
    img: 'https://github.com/dicodiaz/tv-shows-finder/blob/develop/app_screenshot-2.png?raw=true',
    langs: ['JavaScript', 'Webpack', 'Bootstrap', 'HTML', 'CSS'],
    liveVersion: 'https://dicodiaz.me/tv-shows-finder/',
    sourceCode: 'https://github.com/dicodiaz/tv-shows-finder',
  },
  {
    id: uuidv4(),
    title: 'Bookstore',
    desc: 'Mock online bookstore that features thunks to consume a Bookstore API.',
    img: 'https://github.com/dicodiaz/bookstore/blob/develop/app_screenshot-2.png?raw=true',
    langs: ['React', 'Redux', 'Bootstrap'],
    liveVersion: 'https://dicodiaz.me/bookstore/',
    sourceCode: 'https://github.com/dicodiaz/bookstore',
  },
];

export default projects;
