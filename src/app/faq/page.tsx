import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { ChevronDownIcon } from "@/components/icons";
import { faqs } from "@/lib/faqs";
import { lspNames } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Answers to common questions about loans serviced through ${lspNames}, with BMW Fin-Invest as the RBI-registered lender of record.`,
};

export default function FaqPage() {
  return (
    <>
      <PageIntro
        eyebrow="FAQ"
        heading="Frequently Asked Questions"
        lede={`Loan origination and servicing happens on our lending partners' platforms. BMW Fin-Invest is the RBI-registered lender of record.`}
      />

      <section className="bg-background">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl divide-y divide-hairline rounded-2xl border border-hairline bg-surface">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-semibold text-navy">
                  {faq.question}
                  <ChevronDownIcon className="h-5 w-5 shrink-0 text-grey group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-grey">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
