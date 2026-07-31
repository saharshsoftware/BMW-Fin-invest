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
      <PageIntro
        eyebrow="Legal"
        heading="Terms & Conditions"
        lede="Delivering secure, transparent and customer-centric financial solutions through innovative digital lending services across India."
      />

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

            <LegalSection title="10. Definitions & Interpretation">
              <p>
                Welcome to {site.legalName} (&quot;{site.brandName}&quot;),
                which operates the ZapCash digital lending platform. Please
                read these Terms and Conditions carefully before accessing
                or using our loan products, digital platforms, or related
                services. By accessing, browsing, or using our services,
                you acknowledge that you have read, understood, and agreed
                to be bound by these Terms and Conditions and any
                applicable policies.
              </p>
              <p>
                Unless the context otherwise requires, the following terms
                shall have the meanings assigned to them below:
              </p>
              <ul>
                <li>
                  <strong>Agreement</strong> — Refers to these Terms and
                  Conditions, including all annexures, schedules,
                  addendums, amendments, and modifications made from time
                  to time.
                </li>
                <li>
                  <strong>Applicable Law</strong> — Means all laws,
                  statutes, rules, regulations, notifications, guidelines,
                  and directives applicable within the territory of India,
                  including those prescribed under the General Clauses
                  Act, 1897, and issued by relevant regulatory authorities.
                </li>
                <li>
                  <strong>Application Form</strong> — Refers to the loan
                  application submitted by the borrower, whether in
                  physical or electronic form, along with all required
                  information, declarations, and supporting documents.
                </li>
                <li>
                  <strong>Bounce Charges</strong> — Means the charges or
                  penalties levied in the event of dishonour, rejection, or
                  failure of any payment instrument or electronic payment
                  instruction issued by the borrower.
                </li>
                <li>
                  <strong>Business Day</strong> — Refers to any day on
                  which banks and financial institutions are open for
                  business in Kolkata, West Bengal, excluding public
                  holidays.
                </li>
                <li>
                  <strong>Due Date</strong> — Means the date specified in
                  the loan agreement on which repayment of instalments,
                  interest, fees, charges, or any other amounts becomes
                  payable by the borrower.
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="11. Loan Terms">
              <ul>
                <li>
                  The borrower agrees to borrow, and the lender agrees to
                  lend, the sanctioned loan amount in accordance with the
                  approved application and loan agreement.
                </li>
                <li>
                  Disbursement may be made in one or more instalments as
                  specified in the loan schedule.
                </li>
                <li>
                  The lender may revise interest rates or loan terms in
                  line with applicable laws, regulatory requirements, or
                  internal policies.
                </li>
                <li>
                  The borrower must ensure timely repayment through
                  approved payment modes, including ECS, NACH, or
                  authorized online transfers.
                </li>
                <li>
                  Any delay or default may attract additional interest,
                  bounce charges, or other applicable penalties.
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="12. Interest, Fees & Charges">
              <ul>
                <li>
                  Interest is calculated on a daily reducing balance and
                  compounded monthly, as specified in the loan agreement.
                  Additional interest or penalties may apply in case of
                  delayed or defaulted payments.
                </li>
                <li>
                  All applicable fees and charges, including processing
                  fees, prepayment charges, and service-related costs, are
                  disclosed in the Schedule of Charges available on our
                  website.
                </li>
                <li>
                  The borrower agrees to indemnify the lender against
                  reasonable legal, administrative, or recovery-related
                  expenses incurred due to default, in accordance with
                  applicable laws.
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="13. Default & Penalties">
              <p>
                Failure to make any payment on or before the due date shall
                constitute an event of default.
              </p>
              <ul>
                <li>
                  Upon default, the lender may initiate recovery actions in
                  accordance with applicable laws, which may include legal
                  proceedings or reporting to credit information bureaus.
                </li>
                <li>
                  The occurrence of events such as the borrower&apos;s
                  death, insolvency, or initiation of legal proceedings
                  against the borrower shall also be treated as an event of
                  default.
                </li>
                <li>
                  All outstanding amounts shall continue to attract
                  applicable penal interest and charges until full
                  settlement of dues.
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="14. Contact">
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
