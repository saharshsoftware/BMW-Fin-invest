import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { MailIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Grievance Redressal",
  description:
    "How to raise a complaint with BMW Fin-Invest and the escalation path via the RBI Complaint Management System and Sachet Portal.",
};

const steps = [
  {
    number: "01",
    title: "Email your complaint",
    description: (
      <>
        Write to{" "}
        <a
          href={`mailto:${site.grievanceEmail}`}
          className="font-medium text-teal hover:text-navy"
        >
          {site.grievanceEmail}
        </a>{" "}
        with your name, loan or application reference (if any), and details
        of your complaint.
      </>
    ),
  },
  {
    number: "02",
    title: "Escalate to the RBI Complaint Management System",
    description: (
      <>
        If your complaint is not resolved within 30 days, escalate it
        through the RBI&apos;s{" "}
        <a
          href={site.rbiCmsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-teal hover:text-navy"
        >
          Complaint Management System
        </a>
        .
      </>
    ),
  },
  {
    number: "03",
    title: "Or file via the Sachet Portal",
    description: (
      <>
        You may alternatively file your complaint on the RBI&apos;s{" "}
        <a
          href={site.sachetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-teal hover:text-navy"
        >
          Sachet Portal
        </a>
        .
      </>
    ),
  },
];

export default function GrievancePage() {
  return (
    <>
      <PageIntro
        eyebrow="Grievance Redressal"
        heading="Grievance Redressal"
        lede="If something has gone wrong, here is how to raise it with us and, if needed, escalate it to the regulator."
      />

      <section className="bg-background">
        <Container className="py-16 sm:py-20">
          <ol className="grid auto-rows-fr items-stretch gap-5 sm:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-hairline bg-surface p-7"
              >
                <span className="font-display text-2xl font-bold text-teal">
                  {step.number}
                </span>
                <h2 className="mt-3 font-display text-base font-bold text-navy">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-grey">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>

          <div className="mx-auto mt-14 max-w-xl rounded-2xl border border-hairline bg-surface p-8">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-dim text-teal">
                <MailIcon className="h-5 w-5" />
              </span>
              <h2 className="font-display text-lg font-bold text-navy">
                Grievance Redressal Officer
              </h2>
            </div>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex flex-wrap justify-between gap-2 border-t border-hairline pt-3">
                <dt className="text-grey">Name</dt>
                <dd className="font-medium text-text">{site.gro.name}</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2 border-t border-hairline pt-3">
                <dt className="text-grey">Designation</dt>
                <dd className="font-medium text-text">{site.gro.designation}</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2 border-t border-hairline pt-3">
                <dt className="text-grey">Email</dt>
                <dd>
                  <a
                    href={`mailto:${site.gro.email}`}
                    className="font-medium text-teal hover:text-navy"
                  >
                    {site.gro.email}
                  </a>
                </dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2 border-t border-hairline pt-3">
                <dt className="text-grey">Phone</dt>
                <dd className="font-medium text-grey">{site.gro.phone}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>
    </>
  );
}
