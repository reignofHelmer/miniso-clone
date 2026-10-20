import { cn } from "@/lib/utils";

/** Page-width wrapper: 1280px max, with side padding that grows on bigger screens. */
export function Container({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-10",
        className,
      )}
      {...props}
    />
  );
}
