import type { ReactNode } from "react";

interface PrivacySectionProps {
  id: string;
  title: string;
  children: ReactNode;
  last?: boolean;
}

export function PrivacySection({
  id,
  title,
  children,
  last = false,
}: PrivacySectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${
        last ? "" : "border-b border-zinc-200 pb-10 sm:pb-12"
      } ${last ? "" : "mb-10 sm:mb-12"}`}
    >
      {" "}
      <h2 className="text-2xl font-bold leading-tight tracking-tight text-zinc-950 sm:text-2xl lg:text-[26px]">
        {title}{" "}
      </h2>
      <div className="privacy-prose mt-5 text-base leading-7 text-zinc-600 sm:mt-6 sm:text-[17px] sm:leading-8 lg:text-base lg:leading-8">
        {children}
      </div>
    </section>
  );
}
