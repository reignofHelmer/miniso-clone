import { cn } from "@/lib/utils";

/**
 * Page-width wrapper, matching miniso.com's `.wal` (1536px wide at 1740px+,
 * scaling down with the viewport). On mobile it is full width with side padding.
 */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "u-px-30 lg:u-w-1536 relative mx-auto w-full lg:px-0",
        className,
      )}
      {...props}
    />
  );
}
