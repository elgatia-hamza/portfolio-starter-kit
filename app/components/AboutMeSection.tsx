import React from "react";

function PlaceholderIcon({
  type,
}: {
  type: "square" | "circle" | "triangle";
}) {
  const baseClass =
    "w-10 h-10 text-gray-300 opacity-60 mx-auto my-auto block";
  if (type === "square") {
    return (
      <svg className={baseClass} fill="none" viewBox="0 0 40 40">
        <rect x="8" y="8" width="24" height="24" rx="3" fill="currentColor" />
      </svg>
    );
  }
  if (type === "circle") {
    return (
      <svg className={baseClass} fill="none" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="12" fill="currentColor" />
      </svg>
    );
  }
  // triangle
  return (
    <svg className={baseClass} fill="none" viewBox="0 0 40 40">
      <polygon
        points="20,10 32,30 8,30"
        fill="currentColor"
      />
    </svg>
  );
}

const blockClass =
  "rounded-xl p-6 flex flex-col justify-center min-h-[120px] shadow-sm";

export default function AboutMeSection() {
  return (
    <section
      className="max-w-6xl mx-auto my-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-6"
      aria-label="About Me"
    >
      {/* Top-left: Main content */}
      <div className={`${blockClass} row-span-1`}>
        <h2 className="text-2xl font-bold mb-2">
          Experienced engineer.
        </h2>
        <p className="text-gray-500">
          Three years at Axelor building scalable, robust applications and solving real-world challenges.
        </p>
      </div>
      {/* Top-right: Square placeholder */}
      <div className={`${blockClass} bg-gray-100 flex items-center justify-center`}>
        <PlaceholderIcon type="square" />
      </div>
      {/* Middle-left: Circle placeholder */}
      <div className={`${blockClass} bg-gray-100 flex items-center justify-center`}>
        <PlaceholderIcon type="circle" />
      </div>
      {/* Middle-right: Main content */}
      <div className={`${blockClass} row-span-1`}>
        <h2 className="text-2xl font-bold mb-2">
          Technical articles.
        </h2>
        <p className="text-gray-500">
          SEO-friendly posts covering code, frameworks, and development insights. Syntax-highlighted code.
        </p>
      </div>
      {/* Bottom-left: Main content */}
      <div className={`${blockClass} row-span-1`}>
        <h2 className="text-2xl font-bold mb-2">
          Open to opportunities.
        </h2>
        <p className="text-gray-500">
          Available for freelance and full-time roles. Let's collaborate on your next project.
        </p>
      </div>
      {/* Bottom-right: Triangle placeholder */}
      <div className={`${blockClass} bg-gray-100 flex items-center justify-center`}>
        <PlaceholderIcon type="triangle" />
      </div>
    </section>
  );
}