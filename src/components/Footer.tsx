import { socialLinks } from "@/data";

export const Footer: React.FC = () => {
  return (
    <footer className="absolute bottom-0 flex w-full justify-center border-t border-[#DFE1E6] py-2.5 md:px-[10vh]">
      {socialLinks.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          className="hover:animate-wiggle p-2 text-[#505F79] transition-colors duration-200 hover:text-[#404c61]"
          aria-label={label}
          target="_blank"
          rel="noreferrer"
        >
          <Icon className="size-6 xl:size-8" />
        </a>
      ))}
    </footer>
  );
};
