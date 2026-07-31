import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { PageIntro } from "@/components/PageIntro";
import { LegalSection } from "@/components/LegalSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.brandName} collects, uses, stores, discloses, and protects personal and financial information under the Information Technology Act, 2000.`,
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Legal"
        heading="Privacy Policy"
        lede="Delivering secure, transparent and customer-centric financial solutions through innovative digital lending services across India."
      />

      <section className="bg-background">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-hairline bg-surface px-7 py-10 sm:px-10">
            <LegalSection title="Overview">
              <p>
                This Privacy Policy is formulated in accordance with the
                Information Technology Act, 2000, and the applicable rules
                framed thereunder relating to data protection and
                information security. It outlines how personal and
                financial information is collected, used, stored, disclosed,
                and protected.
              </p>
              <p>
                {site.brandName} is dedicated to safeguarding the
                confidentiality, integrity, and security of customer data
                through robust technical, administrative, and organisational
                measures, while ensuring compliance with applicable laws and
                regulatory requirements.
              </p>
            </LegalSection>

            <LegalSection title="Information We Collect">
              <p>
                When you register or use our platform, we may collect
                personal and financial information, including but not
                limited to:
              </p>
              <ul>
                <li>Name, gender, contact details, and date of birth</li>
                <li>
                  Residential address and government-issued identification
                  documents
                </li>
                <li>Employment or business-related information</li>
                <li>
                  Banking, transactional, and repayment-related details
                </li>
                <li>Credit history and loan performance data</li>
              </ul>
            </LegalSection>

            <LegalSection title="How We Use Your Information">
              <p>
                The information collected is used for the following
                purposes:
              </p>
              <ul>
                <li>
                  Processing loan applications and delivering tailored
                  financial services
                </li>
                <li>
                  Communicating service updates, notifications, and customer
                  support
                </li>
                <li>
                  Preventing fraud, unauthorized access, and misuse of
                  services
                </li>
                <li>Enhancing platform functionality and service quality</li>
                <li>
                  Complying with applicable laws, regulatory guidelines, and
                  reporting obligations
                </li>
              </ul>
            </LegalSection>

            <LegalSection title="Sharing of Information">
              <p>
                {site.legalName} may share customer information with
                regulatory authorities, RBI-approved credit information
                bureaus, or authorized third-party service providers
                strictly on a need-to-know basis and in accordance with
                applicable laws.
              </p>
            </LegalSection>

            <LegalSection title="Phishing Awareness">
              <p>
                {site.brandName} does not request passwords, OTPs, or sensitive
                financial information via email, SMS, or unsolicited
                communication. Customers are advised to report any
                suspicious messages claiming to represent the Company.
              </p>
            </LegalSection>

            <LegalSection title="Use of Cookies">
              <p>
                Cookies are used to enhance user experience and manage
                session preferences. Users may disable cookies through
                browser settings; however, certain features of the platform
                may not function optimally.
              </p>
            </LegalSection>

            <LegalSection title="Third-Party Links">
              <p>
                Our website may contain links to external websites for
                informational purposes. We do not control or assume
                responsibility for the privacy practices or content of such
                third-party websites.
              </p>
            </LegalSection>

            <LegalSection title="Disclosure & Credit Information Bureaus">
              <p>
                In accordance with regulatory requirements or in the event
                of default, customer information may be shared with
                RBI-approved credit information bureaus or authorized
                agencies to maintain financial transparency and credit
                discipline.
              </p>
            </LegalSection>

            <LegalSection title="Legal Jurisdiction">
              <p>
                This Privacy Policy shall be governed by the laws of India.
                Any disputes arising in relation to this Policy shall be
                subject to the exclusive jurisdiction of the courts located
                in Kolkata, West Bengal, India.
              </p>
            </LegalSection>

            <LegalSection title="Policy Updates">
              <p>
                {site.brandName} reserves the right to amend or update this
                Privacy Policy from time to time. Any changes will be
                published on this page, and continued use of the platform
                constitutes acceptance of the revised Policy.
              </p>
            </LegalSection>

            <LegalSection title="Contact Us">
              <p>
                If you have any questions, concerns, or requests regarding
                this Privacy Policy or the way your personal information is
                collected and processed, please feel free to contact us.
              </p>
              <p>
                Company Name
                <br />
                {site.legalName}
                <br />
                Registered Office
                <br />
                {site.registeredOffice}, West Bengal, India
                <br />
                Email
                <br />
                <a href={`mailto:${site.supportEmail}`}>
                  {site.supportEmail}
                </a>
                <br />
                Customer Support
                <br />
                <a href={`tel:${site.supportPhone}`}>{site.supportPhone}</a>
                <br />
                Working Hours
                <br />
                Monday to Saturday, 10:00 AM – 6:00 PM (IST)
              </p>
            </LegalSection>
          </div>
        </Container>
      </section>
    </>
  );
}
