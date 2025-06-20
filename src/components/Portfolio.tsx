import { projects } from "@/data";
import { FeaturedProject, Project } from ".";

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="min-h-dvh px-6 pt-[60px]">
      <div className="flex w-full flex-col gap-y-6 pt-[60px] pb-20 md:flex-row">
        <h2 className="font-crete text-center text-[40px] leading-13">
          My Recent Works
        </h2>
        <div className="h-px bg-[#212121]" />
      </div>
      <div className="flex flex-wrap gap-y-6">
        {projects.map((project, index) => {
          switch (index) {
            case 0:
              return <FeaturedProject {...project} />;

            default:
              return <Project {...project} />;
          }
        })}
      </div>
    </section>
  );
};
