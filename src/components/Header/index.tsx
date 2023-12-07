import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="p-3 w-full flex flex-col bg-black-900 text-white">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" className="font-bold text-xl max-w-fit">
              tiagohll
            </Link>
          </div>
          <div className="flex gap-10">
            <Link
              href="/"
              className="font-medium text-lg hover:text-zinc-400 active:text-zinc-300 duration-200"
            >
              Início
            </Link>
            <Link
              href="/about"
              className="font-medium text-lg hover:text-zinc-400 active:text-zinc-300 duration-200"
            >
              Sobre mim
            </Link>
            <Link
              href="/projects"
              className="font-medium text-lg hover:text-zinc-400 active:text-zinc-300 duration-200"
            >
              Projetos
            </Link>
          </div>
          <div />
        </div>
      </header>
    </>
  );
}
