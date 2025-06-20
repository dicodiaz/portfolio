import socialLinks from "@/data/socialLinks";
import style from "@/styles/headline.module.css";

const Headline = () => {
  return (
    <section
      className={`flex min-h-dvh flex-col justify-center px-6 pt-[60px] ${style.bgImage}`}
    >
      <div className="mb-4">
        <h1 className="font-crete mb-4 text-[56px] leading-16 text-[#FF6B00]">
          Hey There.
          <br />
          I'm Dico.
        </h1>
        <h2 className="font-roboto mb-4 text-2xl font-bold text-[#FFF5E1]">
          I'm a Software Developer
        </h2>
        <p className="font-poppins text-white">
          I can help you build a product, feature or website Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don't hesitate to contact me.
        </p>
      </div>
      <div className="flex">
        {socialLinks.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            className="p-2 text-white transition-colors duration-200 hover:text-gray-300"
            aria-label={label}
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Headline;
