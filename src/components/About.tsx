import { myFacts } from "@/data";
import { cn } from "@/lib/utils";
import style from "@/styles/about.module.css";
import { Button, Separator } from ".";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className={cn(
        "flex min-h-dvh flex-col justify-between px-6 pt-[90px] md:min-h-[75dvh] md:px-[10vw] md:pt-0",
        style.bgImage,
      )}
    >
      <div className="flex grow flex-col">
        <div className="flex grow flex-col gap-y-6 md:w-[41vw] md:justify-center">
          <h2 className="text-6xl text-[#FF6B00] xl:text-7xl">About me</h2>
          <ul>
            {myFacts.map((fact) => {
              return (
                <li
                  key={fact}
                  className="ms-3.5 list-disc text-[15px] text-white md:text-base xl:text-lg"
                >
                  {fact}
                </li>
              );
            })}
          </ul>
          <div>
            <Button asChild>
              <a
                href="https://docs.google.com/document/d/1IKDGwFQJv_Wr7vMaSQ-m8ztsQ1k7dZ1L2fAm4yz1U94/edit?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Get my resume
              </a>
            </Button>
          </div>
        </div>
        <Separator />
      </div>
    </section>
  );
};
