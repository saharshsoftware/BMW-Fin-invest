import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { LegalSection } from "@/components/LegalSection";
import { site, lspNames } from "@/lib/site";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Disclaimer covering the informational nature of this website and the relationship between BMW Fin-Invest Private Limited and its lending partners.",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        heading="Disclaimer"
        lede="Delivering secure, transparent and customer-centric financial solutions through innovative digital lending services across India."
      />

      <section className="bg-background">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-hairline bg-surface px-7 py-10 sm:px-10">
            <LegalSection title="1. Informational Website">
              <p>
                This website is published by {site.legalName}
                {" "}for informational purposes only, including a general
                overview of the loan categories we offer. It does not
                offer, and cannot be used to apply for, disburse, or repay
                a loan. Loan origination and servicing take place
                exclusively on the platform of the relevant digital lending
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

            <LegalSection title="2. Regulatory Status">
              <p>
                {site.legalName}
                {" "}is registered with the Reserve Bank of India as a
                Non-Banking Financial Company under Section 45-IA of the
                RBI Act, 1934 (Registration No.{" "}
                {site.rbiRegistrationNumber}). RBI registration does not
                constitute an endorsement or guarantee of the
                company&apos;s financial soundness, nor a guarantee of the
                correctness of any statement made on this website.
              </p>
            </LegalSection>

            <LegalSection title="3. Relationship With Our Lending Partners">
              <p>
                {lspNames}
                {" "}are engaged by {site.legalName}
                {" "}as Lending Service Providers (LSPs) for customer
                acquisition and loan servicing. {site.legalName}
                {" "}remains the sole Regulated Entity and lender of
                record for every loan; neither partner lends on its own
                account or is itself an RBI-regulated lender.
              </p>
            </LegalSection>

            <LegalSection title="4. No Guarantee of Approval">
              <p>
                Nothing on this website constitutes an offer of credit or a
                guarantee that any loan application will be approved.
                Approval is subject to eligibility criteria, verification,
                and applicable RBI regulations, as assessed at the time of
                application on the relevant lending partner&apos;s
                platform.
              </p>
            </LegalSection>

            <LegalSection title="5. Accuracy of Content">
              <p>
                While we take reasonable care to ensure the information on
                this website is accurate, figures and policy details that
                have not been finalised are marked as such rather than
                stated definitively. For current, binding terms applicable
                to your loan, refer to your loan agreement and the
                {" "}relevant lending partner&apos;s platform.
              </p>
            </LegalSection>

            <LegalSection title="6. External Links">
              <p>
                This website links to external resources, including the
                RBI&apos;s Complaint Management System, the Sachet Portal,
                and the {lspNames}
                {" "}platforms. {site.legalName}
                {" "}does not control and is not responsible for the
                content of these external websites.
              </p>
            </LegalSection>

            <LegalSection title="7. General Notice">
              <p>
                {site.legalName} is committed to maintaining transparency,
                accuracy, and integrity in all communications. Users are
                advised to read this Disclaimer carefully before accessing
                or engaging with our products or services.
              </p>
              <p>
                All information provided on this website or through
                associated communication channels is intended for general
                informational purposes only. While reasonable efforts are
                made to ensure accuracy and reliability, the Company does
                not warrant that such information is complete, current, or
                free from errors at all times.
              </p>
            </LegalSection>

            <LegalSection title="8. Financial Awareness">
              <p>
                Financial products, including lending and
                investment-related services, involve inherent risks. Users
                are encouraged to conduct independent due diligence and,
                where appropriate, seek advice from qualified financial or
                legal professionals before making any financial decisions.
              </p>
            </LegalSection>

            <LegalSection title="9. No Guaranteed Returns">
              <p>
                {site.legalName} does not guarantee or assure any fixed
                returns, outcomes, or benefits in relation to any financial
                product or service. Actual results may vary based on market
                conditions, regulatory factors, and individual
                circumstances.
              </p>
            </LegalSection>

            <LegalSection title="10. Third-Party Content">
              <p>
                The website may contain references or links to third-party
                websites or content for convenience. The Company does not
                control, endorse, or assume responsibility for the
                accuracy, content, or practices of such third-party
                platforms.
              </p>
            </LegalSection>

            <LegalSection title="11. Limitation of Liability">
              <p>
                To the extent permitted by applicable law, {site.legalName}
                {" "}shall not be liable for any direct, indirect,
                incidental, or consequential losses arising from reliance
                on information provided on this website or through related
                communication channels.
              </p>
            </LegalSection>

            <LegalSection title="12. Policy Updates">
              <p>
                This Disclaimer may be revised or updated from time to time
                without prior notice. Continued use of the website or
                services constitutes acceptance of the latest version of
                this Disclaimer.
              </p>
            </LegalSection>

            <LegalSection title="13. Important Security Notice">
              <p>
                {site.legalName} does not request confidential information
                such as passwords, OTPs, or login credentials through
                email, SMS, or unsolicited communication. Users are advised
                to report any suspicious activity through official
                communication channels only.
              </p>
            </LegalSection>

            <LegalSection title="14. Our Commitment">
              <p>
                We value the trust placed in us by our customers and
                stakeholders. {site.legalName} remains committed to ethical
                conduct, regulatory compliance, and transparent practices in
                every interaction, reinforcing our dedication to
                responsible financial services.
              </p>
            </LegalSection>

            <LegalSection title="15. Contact">
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
