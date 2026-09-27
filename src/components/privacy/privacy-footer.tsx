interface PrivacyFooterProps {
  effectiveDate: string;
}

export function PrivacyFooter({ effectiveDate }: PrivacyFooterProps) {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-8 text-sm text-zinc-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} AnimaLens. All rights reserved.</p>

        <p>
          Last updated:{" "}
          <span className="font-medium text-zinc-700">{effectiveDate}</span>
        </p>
      </div>
    </footer>
  );
}
