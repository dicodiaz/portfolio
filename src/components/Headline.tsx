import { socialLinks } from "@/data";
import { cn } from "@/lib/utils";
import style from "@/styles/headline.module.css";
import { useEffect, useRef } from "react";

const headingText = "Hey There.\nI'm Dico.";
const leadText = "I'm a Software Developer.";

export const Headline: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const leadRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let intervalID: NodeJS.Timeout;
    let i = 0;
    intervalID = setInterval(() => {
      if (headingRef.current) {
        headingRef.current.textContent += headingText[i++];
      }
      if (i === headingText.length) {
        clearInterval(intervalID);
        i = 0;
        intervalID = setInterval(() => {
          if (leadRef.current) {
            leadRef.current.textContent += leadText[i++];
          }
          if (i === leadText.length) {
            clearInterval(intervalID);
          }
        }, 50);
      }
    }, 100);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <section
      id="headline"
      className={cn(
        "flex min-h-dvh flex-col justify-center gap-y-3 px-6 pt-[60px] md:px-[10vw]",
        style.bgImage,
      )}
    >
      <div className="flex flex-col gap-y-3 md:max-w-[40vw]">
        <h1
          className="text-6xl whitespace-pre text-[#FF6B00] xl:text-7xl"
          ref={headingRef}
        />
        <p
          className="text-2xl font-bold text-[#FFF5E1] xl:text-3xl"
          ref={leadRef}
        />
        <p className="animate-jump-in animate-delay-[3500ms] text-white xl:text-lg">
          I can help you build a product, feature or website Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don't hesitate to contact me.
        </p>
      </div>
      <div className="animate-jump-in animate-delay-[4500ms] flex md:absolute md:left-[2.5vw] md:flex-col">
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="hover:animate-wiggle p-2 text-white transition-colors duration-200 hover:text-gray-300"
            aria-label={label}
            target="_blank"
            rel="noreferrer"
          >
            <Icon className="size-6 xl:size-8" />
          </a>
        ))}
      </div>
    </section>
  );
};
