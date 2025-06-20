import type { ProjectType } from "@/data";
import { Badge, Button } from ".";

export const FeaturedProject: React.FC<ProjectType> = ({
  title,
  description,
  images,
  languages,
  links,
}) => {
  const { mobile, desktop, xxlDesktop } = images;

  return (
    <div className="flex flex-col items-center gap-y-6">
      <div className="max-h-64 overflow-y-hidden">
        <img src={mobile} alt={title} />
      </div>
      <div className="flex flex-col gap-y-3">
        <h3 className="font-crete text-[32px] leading-11">{title}</h3>
        <p>{description}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {languages.map((language) => {
            return (
              <Badge key={language} variant="outline">
                {language}
              </Badge>
            );
          })}
        </div>
        <div>
          <Button size="lg">See project</Button>
        </div>
      </div>
    </div>
  );
};
