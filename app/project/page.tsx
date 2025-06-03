import { ProjectsList } from "app/components/projects";

export const metadata = {
  title: "Projects | Hamza EL GATIA",
  description:
    "A showcase of projects led and developed by Hamza EL GATIA, R&D Software Engineer at Axelor.",
};

export default function Page() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 tracking-tighter">
        My Projects
      </h1>
      <ProjectsList />
    </section>
  );
}
