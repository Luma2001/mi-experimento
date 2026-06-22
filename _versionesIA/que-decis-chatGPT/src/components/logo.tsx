type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2" aria-label="¿Qué Decís?">
      <span className="relative grid h-11 w-12 place-items-center rounded-[18px] border-2 border-brand-ink bg-white shadow-sm">
        <span className="absolute -bottom-1 left-4 h-3 w-3 rotate-45 border-b-2 border-r-2 border-brand-ink bg-white" />
        <svg
          aria-hidden="true"
          className="h-7 w-8"
          viewBox="0 0 48 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 22C15 12 24 12 29 22"
            stroke="#2563EB"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M19 25C23 18 30 18 34 25"
            stroke="#14B8A6"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle cx="11" cy="25" r="4" fill="#F97316" />
          <circle cx="36" cy="27" r="4" fill="#2563EB" />
        </svg>
      </span>
      {!compact ? (
        <span className="text-lg font-black leading-none text-brand-ink">
          ¿Qué <span className="text-brand-blue">Decís?</span>
        </span>
      ) : null}
    </span>
  );
}
