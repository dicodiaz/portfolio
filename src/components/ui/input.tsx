import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "w-full border-b border-[#DBD8D7] px-4 py-3 text-[15px] leading-6 transition-[padding] placeholder:text-[#979493] focus:ps-5 focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
