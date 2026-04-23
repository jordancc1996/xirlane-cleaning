import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
}

const baseStyles =
  "inline-flex min-h-12 items-center justify-center px-8 py-3.5 text-[13px] uppercase tracking-widest transition-all duration-300";
const variants: Record<ButtonVariant, string> = {
  primary: "bg-button-primary-bg text-button-primary-text hover:bg-accent",
  ghost:
    "bg-transparent border border-text-primary text-text-primary hover:bg-text-primary hover:text-button-primary-text",
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
