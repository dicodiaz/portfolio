import { v4 as uuidv4 } from 'uuid';

export type ImagesType = {
  mobile: string;
  desktop: string;
};

export type Links = {
  label?: string;
  liveVersion: string;
  sourceCode: string;
};

export type ProjectType = {
  id: string;
  title: string;
  description: string;
  images: ImagesType;
  languages: string[];
  linksList: Links[];
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
    linksList: [
      {
        liveVersion: 'https://financial-modeling.dicodiaz.com.co/',
        sourceCode: 'https://github.com/dicodiaz/financial-modeling',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Videogames Rental',
    description: 'A full-stack web application that allows users to rent vintage videogames.',
    images: {
      mobile:
        'https://github.com/dicodiaz/videogames_rental_client/blob/develop/app_screenshot_mobile.png?raw=true',
      desktop:
        'https://github.com/dicodiaz/videogames_rental_client/blob/develop/app_screenshot_desktop.png?raw=true',
    },
    languages: ['React', 'Redux', 'JavaScript', 'Ruby on Rails', 'Ruby'],
    linksList: [
      {
        label: 'Client:',
        liveVersion: 'https://videogames-rental.dicodiaz.com.co/',
        sourceCode: 'https://github.com/dicodiaz/videogames_rental_client',
      },
      {
        label: 'Server:',
        liveVersion: 'https://www.dicodiaz.live',
        sourceCode: 'https://github.com/dicodiaz/videogames_rental_server',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'SmartSpender',
    description:
      "A full-stack web application where you can manage your budget (Might take several seconds to load because of Render's free plan restrictions).",
    images: {
      mobile:
        'https://github.com/dicodiaz/SmartSpender/blob/develop/app_screenshot_mobile.png?raw=true',
      desktop:
        'https://github.com/dicodiaz/SmartSpender/blob/develop/app_screenshot_desktop.png?raw=true',
    },
    languages: ['Ruby on Rails', 'ERB', 'RSpec', 'Capybara'],
    linksList: [
      {
        liveVersion: 'https://smart-spender.onrender.com/welcome',
        sourceCode: 'https://github.com/dicodiaz/SmartSpender',
      },
    ],
  },
  {
    id: uuidv4(),
    title: 'Sorting Algorithms',
    description:
      'A visualization of 9+ sorting algorithms, including Quick Sort, Merge Sort, and more!',
    images: {
      mobile:
        'https://github.com/dicodiaz/sorting-algorithms/blob/main/app_screenshot_mobile.png?raw=true',
      desktop:
        'https://github.com/dicodiaz/sorting-algorithms/blob/main/app_screenshot_desktop.png?raw=true',
    },
    languages: ['React', 'TypeScript'],
    linksList: [
      {
        liveVersion: 'https://sorting-algorithms.dicodiaz.com.co/',
        sourceCode: 'https://github.com/dicodiaz/sorting-algorithms',
      },
    ],
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
    linksList: [
      {
        liveVersion: 'https://math-magicians.dicodiaz.com.co',
        sourceCode: 'https://github.com/dicodiaz/math-magicians',
      },
    ],
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
    linksList: [
      {
        liveVersion: 'https://tv-shows-finder.dicodiaz.com.co/',
        sourceCode: 'https://github.com/dicodiaz/tv-shows-finder',
      },
    ],
  },
];

export default projects;
