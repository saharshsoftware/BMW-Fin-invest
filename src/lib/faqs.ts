import { lspNames } from "@/lib/site";

export const faqs = [
  {
    question: "What types of loans does BMW Fin-Invest offer?",
    answer:
      `BMW Fin-Invest is the RBI-registered Regulated Entity and lender of record for Instant, Personal, and Business loans originated through its digital lending partners, ${lspNames}.`,
  },
  {
    question: "Who is eligible to apply for a loan?",
    answer:
      "Eligibility criteria, such as age, income, and credit requirements, are set out on the lending partner's platform at the time of application. BMW Fin-Invest, as the lender of record, ensures every approved application meets applicable RBI lending norms.",
  },
  {
    question: "How will I receive my loan amount?",
    answer:
      "Approved loan amounts are disbursed directly to your registered bank account, in line with the RBI's digital lending guidelines.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      `Yes. BMW Fin-Invest and its lending partners follow data protection practices aligned with applicable law, including the Digital Personal Data Protection Act, 2023. See our Privacy Policy for details on how your data is collected, used, and retained.`,
  },
  {
    question: "How can I track my loan application?",
    answer:
      "You can track the status of your application directly on the platform of the lending partner where it was originally submitted.",
  },
  {
    question: "How can I contact BMW Fin-Invest for assistance?",
    answer:
      "For general inquiries, email support@bmwfininvest.com. For complaints, email grievance@bmwfininvest.com or visit our Grievance Redressal page for the full escalation process.",
  },
] as const;
