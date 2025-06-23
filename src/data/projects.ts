import expediaDesktop from "@/assets/expedia_web_app_screenshot_desktop.png";
import expediaDesktopXXL from "@/assets/expedia_web_app_screenshot_desktop_xxl.png";
import expediaMobile from "@/assets/expedia_web_app_screenshot_mobile.png";

export enum ImagesSizes {
  MOBILE = "mobile",
  DESKTOP = "desktop",
  DESKTOP_XXL = "xxlDesktop",
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
  title: string;
  description: string;
  images: ImagesType;
  languages: string[];
  links: Links[];
};

export const projects: ProjectType[] = [
  {
    title: "Sort & Filters feature on Expedia",
    description:
      "Flexible search feature that lets travelers quickly sort and filter results by what matters most - price, ratings, distance, amenities, and more - making it easier to find the perfect place without the hassle.",
    images: {
      mobile: expediaMobile,
      desktop: expediaDesktop,
      xxlDesktop: expediaDesktopXXL,
    },
    languages: [
      "React",
      "MobX",
      "TypeScript",
      "GraphQL",
      "SSR",
      "SDUI",
      "Cypress",
    ],
    links: [
      {
        liveVersion:
          "https://www.expedia.com/?currency=USD&langid=1033&siteid=1",
      },
    ],
  },
  {
    title: "Financial Modeling",
    description:
      "A Single Page Application (SPA) that offers comprehensive stock market data. Users can explore financial statements for various companies, enjoy interactive features like search and sorting, and access information on over 17,000 stocks.",
    images: {
      mobile:
        "https://github.com/dicodiaz/financial-modeling/blob/develop/app_screenshot_mobile.png?raw=true",
      desktop:
        "https://github.com/dicodiaz/financial-modeling/blob/develop/app_screenshot_desktop.png?raw=true",
      xxlDesktop:
        "https://github.com/dicodiaz/financial-modeling/blob/develop/app_screenshot_desktop_xxl.png?raw=true",
    },
    languages: ["React", "Redux", "TypeScript", "Bootstrap", "Vitest"],
    links: [
      {
        liveVersion: "https://financial-modeling.dicodiaz.com.co/",
        sourceCode: "https://github.com/dicodiaz/financial-modeling",
      },
    ],
  },
  {
    title: "Videogames Rental",
    description:
      "A full-stack web application that allows users to rent vintage videogames.",
    images: {
      mobile:
        "https://github.com/dicodiaz/videogames_rental_client/blob/develop/app_screenshot_mobile.png?raw=true",
      desktop:
        "https://github.com/dicodiaz/videogames_rental_client/blob/develop/app_screenshot_desktop.png?raw=true",
      xxlDesktop:
        "https://github.com/dicodiaz/videogames_rental_client/blob/develop/app_screenshot_desktop_xxl.png?raw=true",
    },
    languages: ["React", "Redux", "JavaScript", "Ruby on Rails"],
    links: [
      {
        label: "Client:",
        liveVersion: "https://videogames-rental.dicodiaz.com.co/",
        sourceCode: "https://github.com/dicodiaz/videogames_rental_client",
      },
      {
        label: "Server:",
        liveVersion: "https://www.dicodiaz.live",
        sourceCode: "https://github.com/dicodiaz/videogames_rental_server",
      },
    ],
  },

  {
    title: "Sorting Algorithms",
    description:
      "A visualization of 9+ sorting algorithms, including Quick Sort, Merge Sort, and more!",
    images: {
      mobile:
        "https://github.com/dicodiaz/sorting-algorithms/blob/main/app_screenshot_mobile.png?raw=true",
      desktop:
        "https://github.com/dicodiaz/sorting-algorithms/blob/main/app_screenshot_desktop.png?raw=true",
      xxlDesktop:
        "https://github.com/dicodiaz/sorting-algorithms/blob/main/app_screenshot_desktop_xxl.png?raw=true",
    },
    languages: ["React", "TypeScript", "Bootstrap"],
    links: [
      {
        liveVersion: "https://sorting-algorithms.dicodiaz.com.co/",
        sourceCode: "https://github.com/dicodiaz/sorting-algorithms",
      },
    ],
  },
  {
    title: "Math Magicians",
    description:
      "A Single Page Application (SPA) that allows users to make simple calculations and to read a random math-related quote. It also exposes the Calculator component for any other web app to consume using Module Federation.",
    images: {
      mobile:
        "https://github.com/dicodiaz/math-magicians/blob/develop/app_screenshot_mobile.png?raw=true",
      desktop:
        "https://github.com/dicodiaz/math-magicians/blob/develop/app_screenshot_desktop.png?raw=true",
      xxlDesktop:
        "https://github.com/dicodiaz/math-magicians/blob/develop/app_screenshot_desktop_xxl.png?raw=true",
    },
    languages: [
      "React",
      "JavaScript",
      "Bootstrap",
      "Jest",
      "Module Federation",
    ],
    links: [
      {
        liveVersion: "https://math-magicians.dicodiaz.com.co",
        sourceCode: "https://github.com/dicodiaz/math-magicians",
      },
    ],
  },
  {
    title: "TV Shows Finder",
    description:
      "A quick tool to look for any TV show. Built based on 2 external APIs: TvMaze API and Involvement API.",
    images: {
      mobile:
        "https://github.com/dicodiaz/tv-shows-finder/blob/develop/app_screenshot_mobile.png?raw=true",
      desktop:
        "https://github.com/dicodiaz/tv-shows-finder/blob/develop/app_screenshot_desktop.png?raw=true",
      xxlDesktop:
        "https://github.com/dicodiaz/tv-shows-finder/blob/develop/app_screenshot_desktop_xxl.png?raw=true",
    },
    languages: ["JavaScript", "Webpack", "Bootstrap", "HTML", "Jest"],
    links: [
      {
        liveVersion: "https://tv-shows-finder.dicodiaz.com.co/",
        sourceCode: "https://github.com/dicodiaz/tv-shows-finder",
      },
    ],
  },
];
