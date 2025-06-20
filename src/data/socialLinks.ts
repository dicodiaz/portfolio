import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";

export type SocialLink = {
  Icon: IconType;
  href: string;
  label: string;
};

export const socialLinks = [
  { Icon: FaGithub, href: "https://github.com/dicodiaz", label: "GitHub" },
  {
    Icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/dico-diaz-dussan",
    label: "LinkedIn",
  },
  { Icon: FaMediumM, href: "https://medium.com/@dicodiaz", label: "Medium" },
];
