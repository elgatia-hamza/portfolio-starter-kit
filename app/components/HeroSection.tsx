import Link from "next/link";

function HeroSection() {
  return (
    <section className="w-full py-20 mb-12 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-800 rounded-xl shadow-lg">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start text-left">
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
            Hamza EL GATIA
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-3">
            Software Engineer @ Axelor
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 mb-8 font-medium">
            3+ years of experience leading dematerialization projects.
            <br />
            Passionate about clean code, modern tech, and building impactful
            solutions.
          </p>
          <Link
            href="/project"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow transition-colors text-base md:text-lg"
          >
            View My Projects
          </Link>
        </div>
        {/* Future image placeholder */}
        <div className="w-full md:w-1/3 mt-10 md:mt-0 flex justify-center">
          {/* Insert image here in the future */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
