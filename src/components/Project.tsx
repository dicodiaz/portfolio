import type { ProjectType } from "@/data";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
  DialogTrigger,
} from "./ui";

export type ProjectProps = ProjectType & {
  index: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const Project: React.FC<ProjectProps> = ({
  title,
  description,
  images,
  languages,
  links,
  index,
  setSelectedIndex,
}) => {
  const { mobile, desktop, xxlDesktop } = images;

  const handleButtonClick = () => {
    setSelectedIndex(index);
  };

  return (
    <Card>
      <CardContent>
        <div className="max-h-80 overflow-y-hidden bg-black">
          <img src={mobile} alt={title} className="opacity-30" />
        </div>
        <div className="absolute bottom-0 flex flex-col gap-y-3 px-4 py-3">
          <CardTitle className="text-white">{title}</CardTitle>
          <CardDescription className="text-white">
            {description}
          </CardDescription>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {languages.map((language) => {
              return (
                <Badge key={language} variant="default">
                  {language}
                </Badge>
              );
            })}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <DialogTrigger asChild>
          <Button className="w-full" size="lg" onClick={handleButtonClick}>
            See project
          </Button>
        </DialogTrigger>
      </CardFooter>
    </Card>
  );
};
