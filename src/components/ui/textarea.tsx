import * as React from "react";

import { cn } from "@/lib/utils";

// "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-28 bg-[#FBF8F7] px-4 py-3 text-[15px] leading-6 transition-[padding] placeholder:text-[#3C3A39] placeholder:italic focus:ps-5 focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
