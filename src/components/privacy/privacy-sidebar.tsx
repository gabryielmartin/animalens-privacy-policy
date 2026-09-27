import { List } from "lucide-react";

interface PrivacySectionLink {
  id: string;
  title: string;
}

interface PrivacySidebarProps {
  sections: PrivacySectionLink[];
}

export function PrivacySidebar({ sections }: PrivacySidebarProps) {
  return (
    <aside className="w-full lg:sticky lg:top-24 lg:self-start">
      {" "}
      <div className="w-full overflow-hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-5">
        {" "}
        <div className="mb-4 flex items-center gap-2 px-1 text-base font-semibold text-zinc-900">
          {" "}
          <List className="h-5 w-5 shrink-0 text-[#467a3d]" />{" "}
          <span>On this page</span>{" "}
        </div>
        <nav
          aria-label="Privacy Policy sections"
          className="grid w-full grid-cols-1 gap-1 sm:grid-cols-2 lg:block lg:space-y-1"
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="
            block w-full min-w-0 rounded-lg
            px-3 py-2.5
            text-sm leading-5 text-zinc-600
            transition-colors
            hover:bg-[#f0f8ee]
            hover:text-[#467a3d]
            sm:text-[15px]
            lg:text-sm
          "
            >
              <span className="block break-word">{section.title}</span>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
