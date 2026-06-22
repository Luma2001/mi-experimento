import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "cta" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  ariaLabel?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  ariaLabel,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-sans font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-primary-blue focus-visible:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-primary-blue text-white hover:bg-blue-700 shadow-md",
    secondary: "bg-primary-teal text-white hover:bg-teal-700 shadow-md",
    cta: "bg-cta-orange text-text-dark hover:bg-orange-600 shadow-lg border-2 border-transparent",
    outline:
      "bg-transparent text-primary-blue border-2 border-primary-blue hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base min-h-[48px]", // Asegura área táctil móvil >= 48px
    lg: "px-8 py-4 text-lg min-h-[54px]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
