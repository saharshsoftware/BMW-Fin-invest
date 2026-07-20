export const site = {
  brandName: "BMW Fin-Invest",
  legalName: "BMW FIN-INVEST PRIVATE LIMITED",
  registeredOffice:
    "10th Floor, Poddar Point, Block-A, 113, Park Street, Kolkata – 700016",
  gstin: "10AADCS5140D1Z3",
  rbiRegistrationNumber: "B-05.05626 dated 17 Oct 2003",
  rbiRegistration:
    "RBI Registration No. B-05.05626 dated 17 Oct 2003, issued under Section 45-IA of the RBI Act, 1934",
  grievanceEmail: "grievance@bmwfininvest.com",
  supportEmail: "support@bmwfininvest.com",
  rbiCmsUrl: "https://cms.rbi.org.in",
  sachetUrl: "https://sachet.rbi.org.in",
  gro: {
    name: "Prashanth Kabra",
    designation: "Grievance Redressal Officer",
    email: "grievance@bmwfininvest.com",
    phone: "[TO BE ADDED LATER]",
  },
  lsps: [
    {
      name: "ZapCash",
      legalEntity: "Omnistack Innovation Pvt Ltd.",
      website: "www.zapcash.in",
      websiteUrl: "https://www.zapcash.in",
      tag: "Digital Lending Partner",
      description:
        "Digital lending platform providing quick personal loans with instant approval.",
      logo: "/zapcash-logo.png",
      logoWidth: 172,
      logoHeight: 40,
    },
  ],
} as const;

export const lspNames = site.lsps.map((partner) => partner.name).join(" and ");

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/our-lsp", label: "Our LSPs" },
  { href: "/contact", label: "Contact" },
] as const;

export const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/our-lsp", label: "Our LSPs" },
  { href: "/grievance", label: "Grievance Redressal" },
  { href: "/faq", label: "FAQ" },
] as const;

export const legalLinks = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms & Conditions" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
] as const;
