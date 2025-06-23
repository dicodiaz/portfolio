import { projects } from "@/data";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Dialog, FeaturedProject, Project, Separator } from ".";
import { ProjectDialog } from "./ProjectDialog";

export const Portfolio: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1280px)");
  const { mobile, desktop, xxlDesktop } = projects[selectedIndex].images;
  const selectedImgSrc = isLargeDesktop
    ? xxlDesktop
    : isDesktop
      ? desktop
      : mobile;

  return (
    <section
      id="portfolio"
      className="min-h-dvh px-6 pt-[90px] pb-[60px] md:px-[10vw]"
    >
      <div className="flex w-full flex-col gap-y-6 pb-[60px] md:flex-row md:items-center md:gap-x-6">
        <h2 className="text-center text-[40px] md:flex-none">
          My Recent Works
        </h2>
        <Separator className="bg-[#212121]" />
      </div>
      <Dialog onOpenChange={setIsDialogOpen}>
        <div className="flex flex-wrap justify-center gap-y-6 md:-mx-3">
          {projects.map((project, index) => {
            const { mobile, desktop, xxlDesktop } = project.images;
            const imgSrc = isLargeDesktop
              ? xxlDesktop
              : isDesktop
                ? desktop
                : mobile;

            switch (index) {
              case 0:
                return (
                  <FeaturedProject
                    key={project.title}
                    {...project}
                    index={index}
                    setSelectedIndex={setSelectedIndex}
                    imgSrc={imgSrc}
                  />
                );

              default:
                return (
                  <Project
                    key={project.title}
                    {...project}
                    index={index}
                    setSelectedIndex={setSelectedIndex}
                    imgSrc={imgSrc}
                  />
                );
            }
          })}
        </div>
        <ProjectDialog
          {...projects[selectedIndex]}
          isOpen={isDialogOpen}
          imgSrc={selectedImgSrc}
        />
      </Dialog>
    </section>
  );
};
