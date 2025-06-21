import type { ProjectType } from "@/data";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";
import { Fragment } from "react/jsx-runtime";
import {
  Badge,
  Button,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from ".";

export const ProjectDialog: React.FC<ProjectType> = ({
  title,
  description,
  images,
  languages,
  links,
}) => {
  const { mobile, desktop, xxlDesktop } = images;

  return (
    <DialogContent
      onCloseAutoFocus={(e) => e.preventDefault()}
      className="flex flex-col"
    >
      <div className="box-content flex w-full flex-col gap-y-6 overflow-y-scroll pr-8">
        <DialogTitle asChild>
          <h3 className="pr-7">{title}</h3>
        </DialogTitle>
        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {languages.map((language) => {
            return (
              <Badge key={language} variant="outline">
                {language}
              </Badge>
            );
          })}
        </div>
        <div className="flex justify-center">
          <img src={mobile} alt={title} />
        </div>
        <div className="flex flex-col gap-y-6">
          <DialogDescription>{description}</DialogDescription>
          <div>
            {links.map(({ label, liveVersion, sourceCode }) => {
              return (
                <Fragment key={liveVersion}>
                  {label && <small>{label}</small>}
                  <div className="flex justify-between">
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
    </DialogContent>
  );
};
