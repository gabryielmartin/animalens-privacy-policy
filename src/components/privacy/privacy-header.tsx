import Image from "next/image";

export function PrivacyHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur">
      {" "}
      <div className="mx-auto flex h-72px w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* AnimaLens Logo */}{" "}
        <div className="flex min-w-0 shrink-0 items-center">
          {" "}
          <Image
            src="/images/animalens-logo.png"
            alt="AnimaLens"
            width={160}
            height={52}
            priority
            className="block h-52px w-160px shrink-0 object-contain"
          />{" "}
        </div>
        ```
        {/* Privacy Policy Label */}
        <div className="ml-4 flex min-w-0 shrink-0 items-center gap-2 text-sm text-zinc-500">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#7ed321]" />
          <span className="whitespace-nowrap">Privacy Policy</span>
        </div>
      </div>
    </header>
  );
}
