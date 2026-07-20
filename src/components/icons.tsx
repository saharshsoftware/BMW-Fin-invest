type IconProps = {
  className?: string;
};

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 20 20",
  fill: "none",
  "aria-hidden": true,
} as const;

export function CheckCircleIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.5 10.2L8.7 12.4L13.5 7.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 10H16M16 10L11.5 5.5M16 10L11.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 5.5L10 11L16.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M10 2.5L16.5 5V9.5C16.5 13.5 13.7 16.6 10 17.5C6.3 16.6 3.5 13.5 3.5 9.5V5L10 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7.3 10L9.2 11.9L12.7 8.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DocumentIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5.5 2.5H11.5L14.5 5.5V17.5H5.5V2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11.5 2.5V5.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7.5 10.5H12.5M7.5 13H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UsersIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="7.5" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2.5 16C2.9 13 5 11.3 7.5 11.3C10 11.3 12.1 13 12.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="14" cy="7.5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 11.5C15.2 11.7 16.9 13.2 17.3 15.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MapPinIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M10 17.5C10 17.5 15.5 12.6 15.5 8.3C15.5 5.1 13.0 2.5 10 2.5C7.0 2.5 4.5 5.1 4.5 8.3C4.5 12.6 10 17.5 10 17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="10" cy="8.2" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalLinkIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M8.5 5H4.5C3.9 5 3.5 5.4 3.5 6V15.5C3.5 16.1 3.9 16.5 4.5 16.5H14C14.6 16.5 15 16.1 15 15.5V11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.5 3.5H16.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 11.5L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function BoltIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M10.8 2.5L4.5 11.3H9.3L9.2 17.5L15.5 8.4H10.7L10.8 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function BriefcaseIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="2.5" y="6.5" width="15" height="9.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 6.5V4.8C7 4.1 7.6 3.5 8.3 3.5H11.7C12.4 3.5 13 4.1 13 4.8V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2.5 10.8C5 12 15 12 17.5 10.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function WalletIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M2.5 6.3C2.5 5.3 3.3 4.5 4.3 4.5H14.2C15.2 4.5 16 5.3 16 6.3V14.2C16 15.2 15.2 16 14.2 16H4.3C3.3 16 2.5 15.2 2.5 14.2V6.3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12.5 10.6C12.5 11.3 13 11.8 13.7 11.8H17.5V9.4H13.7C13 9.4 12.5 9.9 12.5 10.6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export function ClockIcon({ className = "" }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="10" cy="10.5" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 6.5V10.5L12.8 12.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
