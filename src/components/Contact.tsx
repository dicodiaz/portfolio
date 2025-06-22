import { useForm } from "@formspree/react";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";
import { Button, Input, Textarea, Toaster, toast } from ".";

export const Contact: React.FC = () => {
  const [{ submitting, succeeded }, handleSubmit] = useForm("meqvpkyg");
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (!submitting && succeeded) {
      toast("Thanks for reaching out!", {
        description:
          "Your message was sent successfully, I'll get back to you as soon as possible.",
        style: { background: "#14A44D", color: "white" },
      });
    }
  }, [submitting, succeeded]);

  return (
    <>
      <section
        id="contact"
        className="flex min-h-dvh px-6 pt-[90px] pb-[60px] md:items-center md:px-[10vh]"
      >
        <div className="flex w-full flex-col justify-between md:flex-row md:gap-x-6">
          <h2 className="text-center text-2xl font-bold md:w-[32vw] md:flex-none md:text-start md:text-[32px] xl:text-[40px]">
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </h2>
          <form
            className="mb-6 flex flex-col gap-y-6 md:grow-1"
            onSubmit={handleSubmit}
          >
            {isDesktop ? (
              <div className="flex gap-x-6">
                <Input
                  type="text"
                  placeholder="First name*"
                  name="first_name"
                  required
                />
                <Input
                  type="text"
                  placeholder="Last name*"
                  name="last_name"
                  required
                />
              </div>
            ) : (
              <Input
                type="text"
                placeholder="Full name*"
                name="full_name"
                required
              />
            )}
            <Input
              type="email"
              placeholder="Email address*"
              name="email"
              required
            />
            <Textarea
              placeholder="Write me something...*"
              name="message"
              required
            />
            <div className="flex justify-center">
              <Button type="submit" disabled={submitting} className="w-[132px]">
                {submitting ? (
                  <FaSpinner className="animate-spin" />
                ) : (
                  "Get in touch"
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
      <Toaster />
    </>
  );
};
