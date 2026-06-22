type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light"
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className="mx-auto max-w-3xl text-center">
      <p
        className={
          isDark
            ? "text-sm font-bold uppercase tracking-[0.08em] text-teal-200"
            : "text-sm font-bold uppercase tracking-[0.08em] text-brand-blue"
        }
      >
        {eyebrow}
      </p>
      <h2
        className={
          isDark
            ? "mt-3 text-3xl font-black leading-tight text-white sm:text-4xl"
            : "mt-3 text-3xl font-black leading-tight text-brand-ink sm:text-4xl"
        }
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            isDark
              ? "mt-4 text-lg leading-8 text-gray-200"
              : "mt-4 text-lg leading-8 text-brand-muted"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
