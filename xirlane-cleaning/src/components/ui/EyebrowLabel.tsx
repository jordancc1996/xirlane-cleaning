interface EyebrowLabelProps {
  children: string;
  className?: string;
}

export default function EyebrowLabel({ children, className = "" }: EyebrowLabelProps) {
  return (
    <p className={`text-[11px] font-medium uppercase tracking-eyebrow text-accent ${className}`}>
      {children}
    </p>
  );
}
