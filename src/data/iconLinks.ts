import { IconType } from 'react-icons';
import { FaGithub, FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

export type IconLinkType = {
  id: string;
  href: string;
  Icon: IconType;
};

const iconLinks: IconLinkType[] = [
  {
    id: uuidv4(),
    href: 'https://github.com/dicodiaz',
    Icon: FaGithub,
  },
  {
    id: uuidv4(),
    href: 'https://www.linkedin.com/in/dico-diaz-dussan/',
    Icon: FaLinkedinIn,
  },
  {
    id: uuidv4(),
    href: 'https://medium.com/@dicodiaz',
    Icon: FaMediumM,
  },
];

export default iconLinks;
