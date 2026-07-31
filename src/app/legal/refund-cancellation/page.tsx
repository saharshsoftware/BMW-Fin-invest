import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { LegalSection } from "@/components/LegalSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation",
  description: `The Refund and Cancellation Policy governing loan facilitation, advisory, and related services offered by ${site.legalName}.`,
};

export default function RefundCancellationPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        heading="Refund & Cancellation"
        lede="Delivering secure, transparent and customer-centric financial solutions through innovative digital lending services across India."
      />

      <section className="bg-background">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-hairline bg-surface px-7 py-10 sm:px-10">
            <p className="mb-8 text-sm leading-relaxed text-grey">
              At {site.legalName}, transparency and fairness form the
              foundation of our customer relationships. We encourage you to
              review this Refund and Cancellation Policy carefully before
              availing any of our financial products or services.
            </p>

            <LegalSection title="1. Introduction">
              <p>
                This Refund and Cancellation Policy outlines the principles
                governing cancellation of services and refunds, if any, in
                relation to the services offered by {site.legalName}. By
                accessing or using our platform or services, you agree to
                be bound by the terms set out below.
              </p>
            </LegalSection>

            <LegalSection title="2. Nature of Services">
              <p>
                {site.brandName} provides loan facilitation, financial
                advisory, and related services. All payments made towards
                these services are service-based and non-transferable.
                Once processing, verification, or documentation review has
                commenced, refunds are generally not applicable.
              </p>
            </LegalSection>

            <LegalSection title="3. Cancellation Policy">
              <p>
                Customers may request cancellation of an application or
                service within twenty-four (24) hours of submission,
                provided that verification, underwriting, or financial
                processing has not begun.
              </p>
              <p>
                Cancellation requests must be submitted via email to{" "}
                <a href={`mailto:${site.supportEmail}`}>
                  {site.supportEmail}
                </a>
                , along with relevant details such as application ID,
                transaction reference, and date of request.
              </p>
            </LegalSection>

            <LegalSection title="4. Refund Conditions">
              <ul>
                <li>
                  Refunds are considered only if cancellation is requested
                  within the permitted timeframe.
                </li>
                <li>
                  No refunds shall be issued once loan approval, advisory
                  services, or financial processing has commenced.
                </li>
                <li>
                  In cases of duplicate payment due to technical errors,
                  the excess amount shall be refunded in full.
                </li>
                <li>
                  Approved refunds, if applicable, will be processed within
                  7–10 business days to the original payment method.
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="5. Non-Refundable Charges">
              <p>
                Fees paid towards administrative, processing, credit
                assessment, or compliance-related activities are
                non-refundable, as these are incurred towards service
                execution and verification.
              </p>
            </LegalSection>

            <LegalSection title="6. Force Majeure">
              <p>
                {site.brandName} shall not be liable for delays, cancellations,
                or non-performance resulting from events beyond reasonable
                control, including natural disasters, regulatory actions,
                system failures, or network disruptions.
              </p>
            </LegalSection>

            <LegalSection title="7. Policy Updates">
              <p>
                The Company reserves the right to amend or update this
                Refund & Cancellation Policy at its discretion. Any changes
                will be reflected on this page, and continued use of
                services constitutes acceptance of the revised policy.
              </p>
            </LegalSection>

            <LegalSection title="8. Contact Information">
              <p>
                For queries related to refunds or cancellations, please
                contact:
              </p>
              <p>
                Email
                <br />
                <a href={`mailto:${site.grievanceEmail}`}>
                  {site.grievanceEmail}
                </a>
                <br />
                Phone
                <br />
                <a href={`tel:${site.supportPhone}`}>{site.supportPhone}</a>
              </p>
            </LegalSection>
          </div>

          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-hairline bg-surface px-7 py-8 text-center sm:px-10">
            <h2 className="font-display text-lg font-bold text-navy">
              Need More Clarity?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-grey">
              Have questions about our terms, products, or services? Our
              support team is available to assist you with clear,
              transparent guidance.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
