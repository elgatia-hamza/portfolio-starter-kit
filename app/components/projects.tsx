import Link from "next/link";
import { formatDate, getProjects } from "app/project/utils";

export function ProjectsList() {
  let allProjects = getProjects();

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((project) => (
          <Link
            key={project.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/project/${project.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(project.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                {project.metadata.title}
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                {project.metadata.summary}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
