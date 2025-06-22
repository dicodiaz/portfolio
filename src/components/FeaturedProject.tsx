import { Badge, Button, DialogTrigger, type ProjectProps } from ".";

export const FeaturedProject: React.FC<ProjectProps> = ({
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
    <div className="flex w-full flex-none flex-col items-center gap-y-6 md:flex-row md:gap-x-6 md:px-3">
      <div className="max-h-64 overflow-y-hidden md:max-h-none md:w-[47.5vw] md:flex-none">
        <img src={imgSrc} alt={title} />
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
          <DialogTrigger asChild>
            <Button size="lg" onClick={handleButtonClick}>
              See project
            </Button>
          </DialogTrigger>
        </div>
      </div>
    </div>
  );
};
