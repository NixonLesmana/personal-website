import clsx from "clsx";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "dark",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div className={clsx("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className={clsx("text-xs font-semibold uppercase tracking-[0.28em]", isDark ? "text-[#9fb7ff]" : "text-[#4a5f8c]")}>
        {eyebrow}
      </p>
      <h2
        className={clsx(
          "mt-4 font-display text-4xl leading-none sm:text-5xl",
          isDark ? "text-[#f4f7ff]" : "text-[#0c1220]",
        )}
      >
        {title}
      </h2>
      <p className={clsx("mt-4 text-base leading-7 sm:text-lg", isDark ? "text-[#9aa7c2]" : "text-[#4d5a74]")}>
        {description}
      </p>
    </div>
  );
}
