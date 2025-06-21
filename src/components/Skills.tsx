import { skills } from "@/data";
import { cn } from "@/lib/utils";
import { Fragment } from "react/jsx-runtime";

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className={cn(
        "flex min-h-dvh flex-col items-center gap-y-6 bg-[#1C1A19] px-6 pt-[90px] pb-[60px]",
      )}
    >
      {skills.map(({ Bullet, title, names }) => {
        return (
          <Fragment key={title}>
            <div className="flex items-center gap-x-3">
              <Bullet className="text-lg text-[#FF6B00]" />
              <h3 className="font-crete text-[32px] leading-11 text-white">
                {title}
              </h3>
            </div>
            <ul className="flex flex-col items-center gap-y-2">
              {names.map((name) => {
                return <li className="text-[22px] text-white">{name}</li>;
              })}
            </ul>
          </Fragment>
        );
      })}
    </section>
  );
};
