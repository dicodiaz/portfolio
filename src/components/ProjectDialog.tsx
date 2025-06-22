import type { ProjectType } from "@/data";
import { useEffect, useState } from "react";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { Fragment } from "react/jsx-runtime";
import {
  Badge,
  Button,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Skeleton,
} from ".";

export type ProjectDialogProps = ProjectType & {
  isOpen: boolean;
  imgSrc: string;
};

export const ProjectDialog: React.FC<ProjectDialogProps> = ({
  title,
  description,
  languages,
  links,
  isOpen,
  imgSrc,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setImageLoaded(false);
    }
  }, [isOpen]);

  return (
    <DialogContent
      onCloseAutoFocus={(e) => e.preventDefault()}
      className="flex flex-col"
    >
      <div className="box-content flex w-full flex-col gap-y-6 overflow-y-scroll pr-10 md:gap-y-3">
        <DialogTitle asChild>
          <h3 className="pr-7">{title}</h3>
        </DialogTitle>
        <div className="flex flex-wrap gap-x-3 gap-y-2 md:pb-7">
          {languages.map((language) => {
            return (
              <Badge key={language} variant="outline">
                {language}
              </Badge>
            );
          })}
        </div>
        <div className="flex flex-col gap-y-6 md:flex-row md:gap-x-3 xl:gap-x-6">
          <div className="flex justify-center md:w-[41vw] md:flex-none lg:w-[43vw] xl:w-[49vw]">
            {!imageLoaded && <Skeleton className="h-[550px] w-full" />}
            <img src={imgSrc} alt={title} onLoad={() => setImageLoaded(true)} />
          </div>
          <div className="flex flex-col gap-y-6 md:justify-between">
            <DialogDescription>{description}</DialogDescription>
            <div>
              {links.map(({ label, liveVersion, sourceCode }) => {
                return (
                  <Fragment key={liveVersion}>
                    {label && <small>{label}</small>}
                    <div className="flex justify-between md:justify-start md:gap-x-3">
                      <Button size="lg" asChild>
                        <a href={liveVersion} target="_blank" rel="noreferrer">
                          <span>See Live</span>
                          <FaExternalLinkSquareAlt />
                        </a>
                      </Button>
                      {sourceCode && (
                        <Button size="lg" asChild>
                          <a href={sourceCode} target="_blank" rel="noreferrer">
                            <span>See Source</span>
                            <FaGithub />
                          </a>
                        </Button>
                      )}
                    </div>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};
