"use client";

import { TiagohllLogo } from "../Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-10 px-5 flex flex-col items-center w-full bg-black-950 justify-center">
      <div className="container flex flex-col sm:flex-row items-start justify-center gap-16">
        <>
          <div className="flex flex-col">
            <Link href="/">
              <TiagohllLogo color="white" size={150} />
            </Link>

            <span className="font-bold text-xs mx-1">©2023</span>
          </div>
          <div className="w-full flex flex-wrap gap-16">
            <div className="flex flex-col items-start gap-2">
              <span className="font-semibold text-xl py-1">Páginas</span>
              <div className="flex flex-col gap-0.5">
                <Link
                  href="/"
                  className="text-sm border-b border-transparent dark:border-b dark:border-transparent hover:border-white py-1"
                >
                  Início
                </Link>
                <Link
                  href="/about"
                  className="text-sm border-b border-transparent hover:border-white py-1"
                >
                  Sobre mim
                </Link>
                <Link
                  href="/projects"
                  className="text-sm border-b border-transparent hover:border-white py-1"
                >
                  Projetos
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col items-start gap-2">
              <Link
                href="/projects"
                className="font-semibold text-xl border-b border-transparent hover:border-white py-1"
              >
                Projetos recentes
              </Link>
              <div className="flex flex-col gap-0.5">
                <Link
                  href="/tblog"
                  className="text-sm border-b border-transparent hover:border-white py-1"
                >
                  TBlog
                </Link>
              </div>
            </div>
          </div>
        </>
        <button
          onClick={() => scrollTo(0, 0)}
          className="bg-tblue-600 flex font-bold group p-1 px-2 rounded -rotate-90 text-white"
        >
          <span className="group-active:translate-x-0.5 duration-200">
            {"-"}
            {">"}
          </span>
        </button>
      </div>
    </footer>
  );
}
