import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import {
  ArrowRightIcon,
  BoltIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ClockIcon,
  DocumentIcon,
  ExternalLinkIcon,
  ShieldIcon,
  UsersIcon,
  WalletIcon,
} from "@/components/icons";
import { site, lspNames } from "@/lib/site";
import { faqs } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "BMW Fin-Invest | RBI Registered NBFC",
  description: `BMW Fin-Invest is an RBI-registered NBFC lending through its digital lending partners, ${lspNames}, built on transparency and regulatory compliance.`,
};

const trustItems = ["RBI Registered", "GST Registered", "Secure & Compliant"];

const whyChooseUs = [
  {
    icon: ShieldIcon,
    title: "RBI-Regulated Lender",
    description:
      "BMW Fin-Invest is the registered NBFC and lender of record behind every loan, so there is always a regulated entity accountable to you.",
  },
  {
    icon: ClockIcon,
    title: "Fast, Digital Process",
    description:
      "Apply and get a decision online through our digital lending partners, without paperwork or branch visits.",
  },
  {
    icon: DocumentIcon,
    title: "Transparent Terms",
    description:
      "Loan terms, fees, and repayment schedules are disclosed upfront, before you ever accept an offer.",
  },
  {
    icon: UsersIcon,
    title: "Dedicated Grievance Support",
    description:
      "A named Grievance Redressal Officer and a clear escalation path if something needs fixing.",
  },
];

const loanProducts = [
  {
    icon: BoltIcon,
    title: "Instant Loan",
    description:
      "Short-tenure credit for immediate needs, with a fully digital application through our lending partners.",
  },
  {
    icon: BriefcaseIcon,
    title: "Business Loan",
    description:
      "Working capital and growth funding for small and medium businesses, sanctioned through our lending partners.",
  },
  {
    icon: WalletIcon,
    title: "Personal Loan",
    description:
      "Flexible, unsecured credit for personal expenses, with paperless approval via our lending partners.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface">
        <Container className="grid gap-12 py-20 sm:py-24 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-navy sm:text-5xl">
              Empowering Your Financial Journey
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-grey">
              BMW Fin-Invest is an RBI-registered Non-Banking Financial
              Company (NBFC), built on a commitment to transparency,
              security, and regulatory compliance.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm font-medium text-navy">
                  <CheckCircleIcon className="h-4 w-4 text-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex items-center justify-center lg:translate-x-8">
            <div
              aria-hidden="true"
              className="absolute h-[80%] w-[80%] rounded-full bg-teal-dim/80 blur-3xl"
            />
            <Image
              src="/hero.png"
              alt="Rising returns backed by security and responsible growth"
              width={767}
              height={591}
              className="relative w-full max-w-md"
              priority
            />
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="bg-background">
        <Container className="py-16 text-center sm:py-20">
          <div className="mx-auto max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal">
              About Us
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              About BMW Fin-Invest
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text">
              {site.brandName}
              {" "}is a Non-Banking Financial Company registered with
              the Reserve Bank of India, with its registered office in
              Kolkata. We are committed to responsible lending,
              transparent disclosure, and full compliance with the
              RBI&apos;s regulatory requirements for NBFCs.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-navy"
            >
              Learn More
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal">
              Why Choose Us
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Why Choose BMW Fin-Invest
            </h2>
          </div>

          <div className="mt-10 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-2">
            {whyChooseUs.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-hairline bg-background p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-dim text-teal">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Loan Products */}
      <section className="bg-background">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal">
              Loan Products
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Loans We Offer
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-grey">
              Every loan is originated and serviced through our digital
              lending partners, {lspNames}, with BMW Fin-Invest as the
              Regulated Entity and lender of record.
            </p>
          </div>

          <div className="mt-10 grid auto-rows-fr items-stretch gap-5 sm:grid-cols-3">
            {loanProducts.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-hairline bg-surface p-7"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-dim text-teal">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-bold text-navy">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-grey">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Partners */}
      <section className="bg-surface">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal">
              Lending Partners
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Our Partners
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-grey">
              {lspNames} handle customer acquisition and loan servicing on
              our behalf, giving borrowers a fast, fully digital application
              experience backed by an RBI-registered lender.
            </p>
          </div>

          <div className="mt-10 grid auto-rows-fr items-stretch gap-6 sm:grid-cols-2">
            {site.lsps.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col rounded-2xl border border-hairline bg-background p-8"
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

          <Link
            href="/our-lsp"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:text-navy"
          >
            View Details
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-background">
        <Container className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wide text-teal">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto mt-10 divide-y divide-hairline rounded-2xl border border-hairline bg-surface">
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
