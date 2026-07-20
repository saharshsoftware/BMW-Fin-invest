import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { ExternalLinkIcon } from "@/components/icons";
import { site, lspNames } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our LSPs",
  description:
    "ZapCash is the digital lending partner engaged by BMW Fin-Invest for customer acquisition and loan servicing.",
};

export default function OurLspPage() {
  return (
    <>
      <PageIntro
        eyebrow="Lending Service Providers"
        heading="Our Digital Lending Partners"
        lede="BMW Fin-Invest works with digital lending partners to reach and service customers online."
      />

      <section className="bg-background">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-3xl auto-rows-fr items-stretch gap-6 sm:grid-cols-2">
            {site.lsps.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col rounded-2xl border border-hairline bg-surface p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={partner.logoWidth}
                    height={partner.logoHeight}
                    className="h-9 w-28 object-contain object-left"
                  />
                  <span className="shrink-0 whitespace-nowrap rounded-full bg-teal-dim px-3 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
                    {partner.tag}
                  </span>
                </div>
                <h2 className="sr-only">{partner.name}</h2>

                <p className="mt-5 text-sm leading-relaxed text-grey">
                  {partner.description}
                </p>

                <dl className="mt-6 space-y-3 border-t border-hairline pt-5 text-sm">
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="text-grey">Website</dt>
                    <dd className="font-medium text-text">{partner.website}</dd>
                  </div>
                  <div className="flex flex-wrap justify-between gap-2">
                    <dt className="text-grey">Legal Entity Name</dt>
                    <dd className="font-medium text-text">{partner.legalEntity}</dd>
                  </div>
                </dl>

                <a
                  href={partner.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white hover:bg-navy-deep sm:mt-auto"
                >
                  Visit Website
                  <ExternalLinkIcon className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-grey">
            {lspNames} are engaged by BMW Fin-Invest as its Lending Service
            Providers (LSPs) for customer acquisition and loan servicing.
            BMW Fin-Invest remains the sole Regulated Entity and lender of
            record; neither partner lends on its own account.
          </p>

          <div className="mx-auto mt-14 max-w-2xl border-t border-hairline pt-10">
            <h3 className="font-display text-base font-bold text-navy">
              What is a Lending Service Provider?
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-grey">
              A Lending Service Provider is a third party that a Regulated
              Entity, such as an NBFC, engages to carry out functions like
              customer sourcing, onboarding, and loan servicing on its
              behalf. The LSP does not lend its own funds; the Regulated
              Entity remains fully responsible for the loan and for
              compliance with RBI regulations.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
