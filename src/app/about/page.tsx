import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { ShieldIcon, UsersIcon, DocumentIcon } from "@/components/icons";
import { site, lspNames } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "BMW Fin-Invest is an RBI-registered NBFC headquartered in Kolkata, committed to responsible lending, transparency, and regulatory compliance.",
};

const points = [
  {
    icon: DocumentIcon,
    title: "Transparent Practices",
    description:
      "Clear communication on how we operate and how our lending service provider engages with customers on our behalf.",
  },
  {
    icon: ShieldIcon,
    title: "RBI Compliant",
    description:
      "Registered with the Reserve Bank of India under the RBI Act, 1934, and operated in line with its regulatory framework.",
  },
  {
    icon: UsersIcon,
    title: "Customer-First Approach",
    description:
      "Every process is built around fair treatment, data protection, and a straightforward grievance redressal path.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Us"
        heading="About BMW Fin-Invest"
        lede="An RBI-registered Non-Banking Financial Company built on responsible lending and regulatory discipline."
      />

      <section className="bg-background">
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-base leading-relaxed text-text">
              {site.brandName}
              {" "}is a Non-Banking Financial Company registered with the
              Reserve Bank of India, with its registered office in
              Kolkata. The company lends through its digital lending
              partners, {lspNames}, while remaining the sole Regulated
              Entity and lender of record for every loan originated on
              either platform.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text">
              We are committed to responsible lending, transparent
              disclosure, and full compliance with the RBI&apos;s regulatory
              requirements for NBFCs. Our processes are designed to be
              straightforward for customers to understand, from how loans
              are serviced to how a grievance is resolved.
            </p>
          </div>

          <div className="mt-14 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-3">
            {points.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-hairline bg-surface p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-dim text-teal">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display text-base font-bold text-navy">
                    {title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
