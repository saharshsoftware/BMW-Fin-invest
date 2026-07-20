import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { LegalSection } from "@/components/LegalSection";
import { site, lspNames } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BMW Fin-Invest Private Limited collects, uses, stores, and protects personal data in line with the Digital Personal Data Protection Act, 2023.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro eyebrow="Legal" heading="Privacy Policy" />

      <section className="bg-background">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-hairline bg-surface px-7 py-10 sm:px-10">
            <LegalSection title="1. Introduction">
              <p>
                {site.legalName}
                {" "}(&quot;{site.legalName}&quot;, &quot;we&quot;,
                &quot;us&quot;, or &quot;our&quot;) is a Non-Banking Financial
                Company registered with the Reserve Bank of India. This
                Privacy Policy explains how we collect, use, store, share,
                and protect personal data in connection with loans for
                which we act as the Regulated Entity and lender of record,
                including data collected through our digital lending
                partners, {lspNames}. This Policy is framed in
                accordance with the Digital Personal Data Protection Act,
                2023 (&quot;DPDP Act&quot;) and other applicable Indian law.
              </p>
            </LegalSection>

            <LegalSection title="2. Information We Collect">
              <p>
                Depending on your interaction with us or with {lspNames}
                {" "}on our behalf, we may process personal data such as your
                name, contact details, identity and address proof, income
                and employment details, bank account information, loan
                application and repayment history, and technical data such
                as device and log information collected in the course of
                loan origination and servicing.
              </p>
            </LegalSection>

            <LegalSection title="3. Consent and Purpose Limitation">
              <p>
                We collect and process personal data only for specified,
                lawful purposes disclosed to you at the time of collection
                — such as assessing loan eligibility, disbursing and
                servicing loans, meeting regulatory and KYC obligations, and
                communicating with you about your application. Where the
                DPDP Act requires it, we rely on your free, specific,
                informed, and unambiguous consent, given through a clear
                affirmative action. You may withdraw consent for
                non-mandatory processing at any time by writing to us,
                though this may affect our ability to continue servicing an
                existing application or loan.
              </p>
            </LegalSection>

            <LegalSection title="4. How Your Data Is Shared">
              <p>
                As {lspNames}
                {" "}are engaged as our Lending Service Providers, personal
                data necessary for customer acquisition, onboarding, and
                loan servicing is shared between {site.legalName}
                {" "}and the relevant partner for that purpose. We may also share data with credit
                bureaus, regulators including the Reserve Bank of India,
                auditors, and service providers who process data on our
                behalf, and where required by law or a competent court or
                authority. We do not sell personal data to third parties.
              </p>
            </LegalSection>

            <LegalSection title="5. Data Localisation and Storage">
              <p>
                Personal data collected in connection with our lending
                operations is stored on servers located within India. Where
                any processing activity requires data to be transferred
                outside India, such transfer will only take place in
                accordance with the DPDP Act and any conditions notified by
                the Central Government from time to time.
              </p>
            </LegalSection>

            <LegalSection title="6. Data Retention">
              <p>
                We retain personal data only for as long as necessary to
                fulfil the purposes for which it was collected, including
                to comply with our legal, regulatory, accounting, and audit
                obligations as an RBI-regulated entity. Once these purposes
                are no longer applicable and retention is not otherwise
                required by law, we take reasonable steps to erase or
                anonymise the data.
              </p>
            </LegalSection>

            <LegalSection title="7. Your Rights">
              <p>
                Subject to the DPDP Act, you have the right to obtain a
                summary of the personal data we hold about you and the
                processing activities carried out, to seek correction or
                erasure of your personal data, to withdraw consent, and to
                nominate another individual to exercise these rights on
                your behalf in the event of death or incapacity. You may
                also register a grievance regarding the handling of your
                personal data.
              </p>
            </LegalSection>

            <LegalSection title="8. Data Security">
              <p>
                We implement reasonable technical and organisational
                safeguards designed to protect personal data against
                unauthorised access, alteration, disclosure, or
                destruction, appropriate to the nature of the data we
                process.
              </p>
            </LegalSection>

            <LegalSection title="9. Cookies and Tracking">
              <p>
                This website does not use analytics, advertising, or
                tracking cookies. Any data collection relating to your loan
                application takes place on the relevant lending partner&apos;s
                platform, which is governed by its own privacy notice.
              </p>
            </LegalSection>

            <LegalSection title="10. Grievances Relating to Your Data">
              <p>
                If you have a concern about how your personal data has been
                handled, please write to{" "}
                <a href={`mailto:${site.grievanceEmail}`}>
                  {site.grievanceEmail}
                </a>
                . [TO BE CONFIRMED BY CLIENT: details of any dedicated Data
                Protection Officer or Consent Manager, if applicable.]
              </p>
            </LegalSection>

            <LegalSection title="11. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to
                reflect changes in law or our practices. Material changes
                will be reflected in a revised version of this page.
              </p>
            </LegalSection>

            <LegalSection title="12. Contact">
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
