import { v4 as uuidv4 } from 'uuid';

export type AboutMeFact = {
  id: string;
  text: string;
};

export const aboutMeFacts: AboutMeFact[] = [
  {
    id: uuidv4(),
    text: 'I like experimenting with new technologies and building impactful projects.',
  },
  {
    id: uuidv4(),
    text: 'I love solving DSA challenges. Hit me up for a peer session!',
  },
  {
    id: uuidv4(),
    text: '3+ years of experience as a front-end developer.',
  },
  {
    id: uuidv4(),
    text: 'Electronic engineering graduate with a previous career as a RAN engineer',
  },
  {
    id: uuidv4(),
    text: 'Dancing and taking long walks are my hobbies',
  },
  {
    id: uuidv4(),
    text: 'I believe a day of hiking and nature is the ultimate solution for stress.',
  },
];
