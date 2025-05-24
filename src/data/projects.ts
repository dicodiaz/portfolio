import { v4 as uuidv4 } from 'uuid';
import expediaDesktop from '../assets/expedia_web_app_screenshot_desktop.png';
import expediaDesktopXXL from '../assets/expedia_web_app_screenshot_desktop_xxl.png';
import expediaMobile from '../assets/expedia_web_app_screenshot_mobile.png';

export enum ImagesSizes {
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
  DESKTOP_XXL = 'xxlDesktop',
}

export type ImagesType = {
  [key in ImagesSizes]: string;
};

export type Links = {
  label?: string;
  liveVersion: string;
  sourceCode?: string;
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
    title: 'Sort & Filters feature on Expedia',
    description:
      'Full-stack domain feature that allows users to quickly refine and organize their travel search results based on specific preferences. With sorting options, users can arrange listings by price, guest ratings, distance, or other criteria to find the most relevant options first. Filters enable travelers to narrow down results by parameters such as property type, amenities, star rating, neighborhood, and more, helping them efficiently discover accommodations or flights that best match their needs and budget. This functionality enhances the user experience by saving time and making decision-making easier.',
    images: {
      mobile: expediaMobile,
      desktop: expediaDesktop,
      xxlDesktop: expediaDesktopXXL,
    },
    languages: ['React', 'MobX', 'TypeScript', 'GraphQL', 'SSR', 'SDUI', 'Cypress'],
    linksList: [
      {
        liveVersion: 'https://www.expedia.com/?currency=USD&langid=1033&siteid=1',
      },
    ],
  },
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
      xxlDesktop:
        'https://github.com/dicodiaz/financial-modeling/blob/develop/app_screenshot_desktop_xxl.png?raw=true',
    },
    languages: ['React', 'Redux', 'TypeScript', 'Bootstrap', 'Vitest'],
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
      xxlDesktop:
        'https://github.com/dicodiaz/videogames_rental_client/blob/develop/app_screenshot_desktop_xxl.png?raw=true',
    },
    languages: ['React', 'Redux', 'JavaScript', 'Ruby on Rails'],
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
    title: 'Sorting Algorithms',
    description:
      'A visualization of 9+ sorting algorithms, including Quick Sort, Merge Sort, and more!',
    images: {
      mobile:
        'https://github.com/dicodiaz/sorting-algorithms/blob/main/app_screenshot_mobile.png?raw=true',
      desktop:
        'https://github.com/dicodiaz/sorting-algorithms/blob/main/app_screenshot_desktop.png?raw=true',
      xxlDesktop:
        'https://github.com/dicodiaz/sorting-algorithms/blob/main/app_screenshot_desktop_xxl.png?raw=true',
    },
    languages: ['React', 'TypeScript', 'Bootstrap'],
    linksList: [
      {
        liveVersion: 'https://sorting-algorithms.dicodiaz.com.co/',
        sourceCode: 'https://github.com/dicodiaz/sorting-algorithms',
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
      xxlDesktop:
        'https://github.com/dicodiaz/tv-shows-finder/blob/develop/app_screenshot_desktop_xxl.png?raw=true',
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
