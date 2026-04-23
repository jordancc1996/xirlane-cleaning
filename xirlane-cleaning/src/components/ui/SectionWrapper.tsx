import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  alternate?: boolean;
}

export default function SectionWrapper({
  children,
  className = "",
  alternate = false,
}: SectionWrapperProps) {
  return (
    <section className={`section-spacing ${alternate ? "bg-section-alt-bg" : "bg-background"} ${className}`}>
      <div className="site-container">{children}</div>
    </section>
  );
}
