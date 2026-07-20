export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal-dim px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy">
      <span className="h-1.5 w-1.5 rounded-full bg-teal" />
      {children}
    </span>
  );
}
