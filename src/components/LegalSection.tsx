import { ReactNode } from "react";

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-hairline py-8 first:border-t-0 first:pt-0">
      <h2 className="font-display text-lg font-bold text-navy">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-text [&_a]:font-medium [&_a]:text-teal [&_a]:hover:text-navy [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-1.5">
        {children}
      </div>
    </section>
  );
}
