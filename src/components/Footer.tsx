import { socialLinks } from "@/data";

export const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 flex w-full justify-center border-t border-[#DFE1E6] py-2.5 md:px-[10vh]">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="p-2 text-[#505F79] transition-colors duration-200 hover:text-gray-300"
          aria-label={label}
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="h-6 w-6" />
        </a>
      ))}
    </footer>
  );
};
