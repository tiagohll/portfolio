import { NextJs, Tailwind, Ts } from "@/components/Icons";
import Link from "next/link";

export default function Techs() {
  return (
    <section className="bg-black-900 p-5">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-2">
        <h2 className="text-center text-2xl font-bold lg:text-center lg:text-4xl my-4">
          Principais Tecnologias
        </h2>
        <div className="flex items-center justify-center">
          <div className="flex flex-col gap-3 items-start">
            <span className="flex gap-2">
              <Ts />
              <Link
                href="https://www.typescriptlang.org/"
                target="_blank"
                className="text-[#3178c6]"
              >
                Typescript
              </Link>{" "}
              Nível médio/avançado
            </span>
            <span className="flex gap-2">
              <NextJs />
              <Link
                href="https://nextjs.org/"
                target="_blank"
                className="text-zinc-200"
              >
                Next.js
              </Link>{" "}
              Nível avançado
            </span>
            <span className="flex gap-2">
              <Tailwind />
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                className="text-[#38bdf8]"
              >
                Tailwind CSS
              </Link>{" "}
              Nível avançado
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
