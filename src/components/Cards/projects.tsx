import Image from "next/image";
import Link from "next/link";

export default function ProjectsCard() {
  return (
    <div className="p-2 flex flex-col gap-3 bg-zinc-950 rounded">
      <div className="">
        <Image
          width={336}
          height={140}
          src="https://www.rocketseat.com.br/_next/static/media/java.52f50f16.svg"
          alt="logo"
          className="w-full"
        />
      </div>

      <div className="">
        <span className="text-lg font-bold text-white lg:text-xl">Blog</span>
        <p className="text-base">
          Para testar meus conhecimentos e buscar aprender mais desenvolvi este
          blog. Utilizei o <strong>Next.js, Tailwind e Firebase</strong>
        </p>
      </div>

      <button className="bg-blue-700 hover:bg-blue-500 p-2 w-full rounded font-bold duration-200">
        VER DETALHES
      </button>
    </div>
  );
}
