import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <header className="text-white">
      <div className="mx-auto flex h-20 max-w-screen justify-evenly items-center gap-8 px-4 sm:px-6 lg:px-8">
        
        <Image src="/logo.svg" width={80} height={100} alt="Logo" />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex flex-row-reverse items-center gap-6 text-sm">
              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  {" "}
                  About{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  {" "}
                  Careers{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  {" "}
                  History{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  {" "}
                  Services{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  {" "}
                  Projects{" "}
                </a>
              </li>

              <li>
                <a
                  className="text-white transition hover:text-gray-300"
                  href="#"
                >
                  {" "}
                  Blog{" "}
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <a
                className="block rounded-md bg-rose-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-rose-700"
                href="#"
              >
                Login
              </a>

              <a
                className="hidden rounded-md bg-yellow-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-yellow-700 sm:block"
                href="#"
              >
                Register
              </a>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
