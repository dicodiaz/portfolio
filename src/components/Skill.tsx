import type { SkillType } from "@/data";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const Skill: React.FC<SkillType> = ({ Bullet, title, names }) => {
  const [shouldAppendMinContent, setShouldAppendMinContent] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const { clientHeight = 0 } = titleRef.current ?? {};
    if (clientHeight > 48) {
      setShouldAppendMinContent(true);
    }
  }, []);

  return (
    <div
      key={title}
      className="flex flex-col items-center gap-y-6 md:w-1/3 md:flex-none"
    >
      <div className="flex items-center justify-center gap-x-3">
        <Bullet className="text-lg text-[#FF6B00]" />
        <h3
          className={cn(
            "text-[32px] text-white",
            shouldAppendMinContent ? "w-min" : "",
          )}
          ref={titleRef}
        >
          {title}
        </h3>
      </div>
      <ul className="flex flex-col items-center gap-y-2">
        {names.map((name) => {
          return (
            <li key={name} className="text-center text-[22px] text-white">
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
