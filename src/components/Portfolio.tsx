import { projects } from "@/data";
import { useState } from "react";
import { Dialog, FeaturedProject, Project } from ".";
import { ProjectDialog } from "./ProjectDialog";

export const Portfolio: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="portfolio" className="min-h-dvh px-6 py-[60px]">
      <div className="flex w-full flex-col gap-y-6 pt-[60px] pb-20 md:flex-row">
        <h2 className="font-crete text-center text-[40px] leading-13">
          My Recent Works
        </h2>
        <div className="h-px bg-[#212121]" />
      </div>
      <Dialog onOpenChange={setIsDialogOpen}>
        <div className="flex flex-wrap gap-y-6">
          {projects.map((project, index) => {
            switch (index) {
              case 0:
                return (
                  <FeaturedProject
                    {...project}
                    index={index}
                    setSelectedIndex={setSelectedIndex}
                  />
                );

              default:
                return (
                  <Project
                    {...project}
                    index={index}
                    setSelectedIndex={setSelectedIndex}
                  />
                );
            }
          })}
        </div>
        <ProjectDialog {...projects[selectedIndex]} isOpen={isDialogOpen} />
      </Dialog>
    </section>
  );
};
