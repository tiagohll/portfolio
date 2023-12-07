import ProjectsCard from "@/components/Cards/projects";
import Link from "next/link";

export default function ProjectSection() {
  return (
    <section className="bg-black-900 p-5">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-2">
        <h2 className="text-center text-2xl font-bold lg:text-center lg:text-4xl my-4">
          Projetos em destaque
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          <ProjectsCard />
          <ProjectsCard />
          <ProjectsCard />
        </div>
        <Link
          href="/projects"
          className="font-semibold hover:bg-zinc-700 p-2 rounded text-center duration-200"
        >
          VER MAIS PROJETOS
        </Link>
      </div>
    </section>
  );
}
