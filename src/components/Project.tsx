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
  imgSrc: string;
};

export const Project: React.FC<ProjectProps> = ({
  title,
  description,
  imgSrc,
  languages,
  index,
  setSelectedIndex,
}) => {
  const handleButtonClick = () => {
    setSelectedIndex(index);
  };

  return (
    <div className="w-full flex-none md:w-1/2 md:px-3 xl:w-1/3">
      <Card className="group">
        <CardContent>
          <img
            src={imgSrc}
            alt={title}
            className="h-72 w-full object-cover transition-[height] md:group-hover:h-[248px]"
          />
          <div className="absolute inset-0 bg-black opacity-70 transition-opacity md:group-hover:opacity-0"></div>
          <div className="absolute bottom-0 flex flex-col gap-y-3 px-4 py-3 transition-opacity md:group-hover:opacity-0">
            <CardTitle className="text-white">{title}</CardTitle>
            <CardDescription className="text-white">
              {description}
            </CardDescription>
            <div className="flex flex-wrap gap-x-2 gap-y-1">
              {languages.map((language) => {
                return <Badge key={language}>{language}</Badge>;
              })}
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <DialogTrigger asChild>
            <Button
              className="w-full md:-mb-10 md:group-hover:mb-0"
              size="lg"
              onClick={handleButtonClick}
            >
              See project
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
    </div>
  );
};
