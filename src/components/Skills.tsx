import { skills } from "@/data";
import { cn } from "@/lib/utils";
import { Skill } from ".";

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className={cn(
        "flex min-h-dvh flex-col gap-y-6 bg-[#1C1A19] px-6 pt-[90px] pb-[60px] md:flex-row md:px-[10vw]",
      )}
    >
      {skills.map((skill) => {
        return <Skill key={skill.title} {...skill} />;
      })}
    </section>
  );
};
