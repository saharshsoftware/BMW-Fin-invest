import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { LegalSection } from "@/components/LegalSection";
import { site, lspNames } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions governing use of the BMW Fin-Invest Private Limited informational website.",
};

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" heading="Terms & Conditions" />

      <section className="bg-background">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-hairline bg-surface px-7 py-10 sm:px-10">
            <LegalSection title="1. Acceptance of Terms">
              <p>
                These Terms & Conditions govern your use of this website,
                operated by {site.legalName}, a Non-Banking Financial
                Company registered with the Reserve Bank of India. By
                accessing this website, you agree to be bound by these
                Terms. If you do not agree, please do not use this website.
              </p>
            </LegalSection>

            <LegalSection title="2. Purpose of This Website">
              <p>
                This website is informational only. It describes{" "}
                {site.legalName}
                {" "}as an RBI-registered NBFC and its digital lending
                partners, {lspNames}, and provides a general overview
                of the loan categories offered. No loan application,
                disbursal, or repayment can be carried out on this
                website. Loan origination and servicing take place
                exclusively on the platform of the relevant lending
                partner:{" "}
                {site.lsps.map((partner, i) => (
                  <span key={partner.name}>
                    {i > 0 && (i === site.lsps.length - 1 ? " and " : ", ")}
                    <a href={partner.websiteUrl} target="_blank" rel="noopener noreferrer">
                      {partner.website}
                    </a>
                  </span>
                ))}
                .
              </p>
            </LegalSection>

            <LegalSection title="3. No Financial or Investment Advice">
              <p>
                Content on this website is provided for general information
                and does not constitute financial, investment, or legal
                advice. You should not rely on this website when making a
                borrowing decision; refer to your loan agreement and the
                {" "}relevant lending partner&apos;s platform for terms
                specific to your loan.
              </p>
            </LegalSection>

            <LegalSection title="4. Intellectual Property">
              <p>
                All content on this website, including text, graphics, and
                the {site.legalName} logo, is owned by or licensed to
                {" "}{site.legalName}
                {" "}and is protected by applicable intellectual property
                law. You may not reproduce or distribute this content
                without our prior written permission.
              </p>
            </LegalSection>

            <LegalSection title="5. Third-Party Links">
              <p>
                This website links to third-party resources, including the
                {" "}{lspNames}
                {" "}platforms and the Reserve Bank of India&apos;s
                Complaint Management System and Sachet Portal. We are not
                responsible for the content or practices of third-party
                websites, which are governed by their own terms.
              </p>
            </LegalSection>

            <LegalSection title="6. Accuracy of Information">
              <p>
                We take reasonable care to keep the information on this
                website accurate and up to date, but we do not warrant that
                it is complete or error-free at all times. Where a specific
                figure or policy detail is not confirmed on this website, it
                is marked accordingly and you should verify current terms
                on the relevant lending partner&apos;s platform.
              </p>
            </LegalSection>

            <LegalSection title="7. Limitation of Liability">
              <p>
                To the extent permitted by law, {site.legalName}
                {" "}will not be liable for any indirect, incidental, or
                consequential loss arising from your use of, or inability
                to use, this website.
              </p>
            </LegalSection>

            <LegalSection title="8. Governing Law and Jurisdiction">
              <p>
                These Terms are governed by the laws of India. Courts at
                Kolkata, West Bengal shall have exclusive jurisdiction over
                any dispute arising out of or in connection with these
                Terms.
              </p>
            </LegalSection>

            <LegalSection title="9. Changes to These Terms">
              <p>
                We may revise these Terms from time to time. Continued use
                of this website after changes are posted constitutes your
                acceptance of the revised Terms.
              </p>
            </LegalSection>

            <LegalSection title="10. Contact">
              <p>
                {site.legalName}
                <br />
                Registered Office: {site.registeredOffice}
                <br />
                General Inquiries:{" "}
                <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
              </p>
            </LegalSection>
          </div>
        </Container>
      </section>
    </>
  );
}
