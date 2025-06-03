import Image from "next/image";

export const metadata = {
  title: "About | Hamza EL GATIA",
  description:
    "Learn more about Hamza EL GATIA, R&D Software Engineer at Axelor, his journey, expertise, and passion for building innovative solutions.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-6 tracking-tighter">About Me</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          Hello! I’m <strong>Hamza EL GATIA</strong>, an R&D Software Engineer
          at Axelor, passionate about building robust, scalable, and innovative
          solutions. Over the years, I’ve led dematerialization projects and
          worked with a wide range of technologies, including Java, React, and
          React Native.
        </p>
        <p>
          My journey in software engineering is driven by curiosity and a desire
          to solve real-world problems through technology. At Axelor, I’ve honed
          my skills in full-stack development, project leadership, and digital
          transformation, always striving to deliver high-quality results and
          foster collaboration within my teams.
        </p>
        <p>
          This portfolio is a space where I share insights, tutorials, and
          updates from my professional journey. Whether you’re interested in
          software architecture, best practices in Java and React, or the latest
          trends in digital transformation, you’ll find valuable content here.
        </p>
        <p>
          Feel free to connect with me on{" "}
          <a
            href="https://www.linkedin.com/in/hamzaelgatia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>{" "}
          or reach out if you’d like to discuss technology, collaboration, or
          new opportunities.
        </p>
        {/* Signature placeholder */}
        <div className="mt-6">
          <Image
            src="/assets/signature.svg"
            alt="My Signature"
            width={148}
            height={148}
            priority={true}
            className="invert"
          />
        </div>
      </div>
    </section>
  );
}
