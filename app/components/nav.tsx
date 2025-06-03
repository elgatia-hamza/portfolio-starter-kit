import Link from "next/link";
import Logo from "./logo";

const navItems = {
  "/about": { name: "About" },
  "/project": { name: "Projects" },
  "/blog": { name: "Blog" },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          {/* Logo on the far left */}
          <Link href="/" className="mr-6 flex items-center" aria-label="Home">
            <Logo width={48} height={32} />
          </Link>
          {/* Navigation Items */}
          <div className="flex flex-row space-x-0 pr-10 items-center">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                target={path.startsWith("http") ? "_blank" : undefined}
                rel={
                  path.startsWith("http") ? "noopener noreferrer" : undefined
                }
              >
                {name}
              </Link>
            ))}
          </div>
          {/* Primary Action Button on the far right */}
          <Link
            href="mailto:hamzaelgatia7@gmail.com"
            className="bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 ml-4 shadow hover:bg-blue-700 transition-colors"
          >
            Hire Me
          </Link>
        </nav>
      </div>
    </aside>
  );
}
