import type { SkillType } from "@/data";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export const Skill: React.FC<SkillType> = ({ Bullet, title, names }) => {
  const [shouldAppendMinContent, setShouldAppendMinContent] = useState(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      if (titleRef.current) {
        const { height } = titleRef.current.getBoundingClientRect();
        if (height > 44) {
          setShouldAppendMinContent(true);
        }
      }
    }, 0);

    return () => clearTimeout(timeoutID);
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
            "font-crete text-[32px] leading-11 text-white",
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
