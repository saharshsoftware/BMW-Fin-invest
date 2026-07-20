import { Container } from "./Container";

export function PageIntro({
  eyebrow,
  heading,
  lede,
}: {
  eyebrow?: string;
  heading: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-hairline bg-surface">
      <Container className="py-16 sm:py-20">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wide text-teal">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
          {heading}
        </h1>
        {lede && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-grey">
            {lede}
          </p>
        )}
      </Container>
    </section>
  );
}
