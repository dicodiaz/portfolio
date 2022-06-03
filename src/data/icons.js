import { FaAngellist, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

const icons = [
  { id: uuidv4(), href: 'https://github.com/dicodiaz', src: FaGithub },
  { id: uuidv4(), href: 'https://www.linkedin.com/in/dico-diaz-dussan/', src: FaLinkedinIn },
  { id: uuidv4(), href: 'https://angel.co/u/dico-diaz-dussan', src: FaAngellist },
];

export default icons;
