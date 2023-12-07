import { GithubLogo } from "@/components/Icons";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-black-950 h-[75vh] max-w-[1280px] p-2 mx-auto flex flex-col justify-center">
      <div className="flex flex-col items-center md:items-start gap-3">
        <code className="bg-zinc-900 max-w-fit p-1 rounded">Olá mundo!</code>
        <hgroup className="flex flex-col items-center md:items-start text-center md:text-start">
          <h1 className="font-bold text-4xl">Prazer, eu sou o Tiago</h1>
          <p>
            Sou um desenvolvedor <strong>front-end</strong> especializado em{" "}
            <strong>React</strong>. Estou buscando aprender back-end estudando{" "}
            <strong>Node.js</strong>
          </p>
        </hgroup>

        <Link
          href="https://github.com/tiagohll"
          className="hover:translate-y-[-5px] active:scale-110 max-w-fit rounded duration-200 mb-10"
          target="_blank"
        >
          <GithubLogo color="white" />
        </Link>
      </div>
      <button className="bg-zinc-900 hover:bg-zinc-700 active:bg-zinc-800 rounded p-2 max-w-fit font-semibold duration-200">
        Fale comigo
      </button>
    </section>
  );
}
