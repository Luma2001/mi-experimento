import type { ReactNode, SVGProps } from "react";

type IconName = "mic" | "volume" | "message" | "shield" | "hand" | "phone";

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
};

const paths: Record<IconName, ReactNode> = {
  mic: (
    <>
      <path d="M12 4a4 4 0 0 0-4 4v5a4 4 0 0 0 8 0V8a4 4 0 0 0-4-4Z" />
      <path d="M5 12a7 7 0 0 0 14 0" />
      <path d="M12 19v3" />
    </>
  ),
  volume: (
    <>
      <path d="M4 14h4l5 5V5L8 10H4v4Z" />
      <path d="M17 9a5 5 0 0 1 0 6" />
      <path d="M20 6a9 9 0 0 1 0 12" />
    </>
  ),
  message: (
    <>
      <path d="M5 6h14v10H9l-4 4V6Z" />
      <path d="M8 10h8" />
      <path d="M8 13h5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-5" />
    </>
  ),
  hand: (
    <>
      <path d="M8 12V7a2 2 0 0 1 4 0v4" />
      <path d="M12 11V5a2 2 0 0 1 4 0v7" />
      <path d="M16 12V8a2 2 0 0 1 4 0v7c0 5-3 7-7 7h-1c-3 0-5-2-6-5l-2-5a2 2 0 0 1 4-1l1 2" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M10 18h4" />
      <path d="M12 6v6" />
      <path d="M9 9h6" />
    </>
  )
};

export function Icon({ name, className = "", ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
