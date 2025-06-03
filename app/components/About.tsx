import Image from "next/image";

function About() {
  return (
    <>
      {/* Full‐Width “About Hamza El Gatia” Block */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">About Hamza El Gatia</h3>
        <p className="leading-relaxed">
          Hamza El Gatia is a software engineer with 3 years of experience at
          Axelor. Skilled in modern web technologies, he specializes in building
          clean, maintainable, and performant applications.
        </p>
        <p className="leading-relaxed">
          With a passion for code quality and an eye for detail, Hamza shares
          technical insights on his blog and delivers impactful project
          solutions for clients and employers.
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
    </>
  );
}

export default About;
