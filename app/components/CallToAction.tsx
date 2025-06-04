import React from "react";

export default function CallToAction() {
  return (
    <section className="w-full flex items-center justify-center py-20 px-4">
      <div className="max-w-xl w-full flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
          Let’s work together.
        </h2>
        <p className="text-lg text-neutral-400 mb-8">
          Open to freelance &amp; full-time roles.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block bg-blue-600 text-white font-semibold rounded-full px-8 py-3 shadow hover:bg-neutral-800 transition-colors"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}