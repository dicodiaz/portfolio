import { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export type IconLinkType = {
  id: number;
  href: string;
  Icon: IconType;
};

const iconLinks: IconLinkType[] = [
  {
    id: 1,
    href: 'https://github.com/dicodiaz',
    Icon: FaGithub,
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/dico-diaz-dussan/',
    Icon: FaLinkedinIn,
  },
];

export default iconLinks;
