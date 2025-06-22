import { socialLinks } from "@/data";
import { cn } from "@/lib/utils";
import style from "@/styles/headline.module.css";

export const Headline: React.FC = () => {
  return (
    <section
      id="headline"
      className={cn(
        "flex min-h-dvh flex-col justify-center gap-y-3 px-6 pt-[60px] md:px-[10vw]",
        style.bgImage,
      )}
    >
      <div className="flex flex-col gap-y-3 md:max-w-[40vw]">
        <h1 className="text-6xl text-[#FF6B00] xl:text-7xl">
          Hey There.
          <br />
          I'm Dico.
        </h1>
        <p className="text-2xl font-bold text-[#FFF5E1] xl:text-3xl">
          I'm a Software Developer
        </p>
        <p className="text-white xl:text-lg">
          I can help you build a product, feature or website Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don't hesitate to contact me.
        </p>
      </div>
      <div className="flex md:absolute md:left-[2.5vw] md:flex-col">
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="p-2 text-white transition-colors duration-200 hover:text-gray-300"
            aria-label={label}
            target="_blank"
            rel="noreferrer"
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </section>
  );
};
