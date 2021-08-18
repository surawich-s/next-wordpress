import Link from "next/link";
import { useState } from "react";
export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="flex-1 justify-self-start hidden lg:block">
        <div className="flex flex-row gap-x-2 ml-auto justify-start pl-8">
          <svg
            onClick={() => setOpen((prevState) => !prevState)}
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          {open && (
            <input
              className="outline-none text-2xl text-left"
              placeholder="Search"
            ></input>
          )}
        </div>
      </div>
      <div className="flex-1 text-center">
        <button>
          <a href="/">
            <h1 className="text-5xl font-bold mt-5 mb-5">Ton Surawich</h1>
          </a>
        </button>
      </div>
      <div className="flex-1 justify-self-end">
        <div className="flex flex-col md:flex-row items-center mr-auto justify-end md:pr-8">
          <Link href="/">
            <a>
              <span className="text-2xl hover:underline border-b-0 md:border-0">
                Home
              </span>
            </a>
          </Link>
          <span className="hidden md:block px-2">/</span>
          <Link href="/categories">
            <a>
              <span className="text-2xl hover:underline">Categories</span>
            </a>
          </Link>
          <span className="hidden md:block px-2">/</span>
          <Link href="/about">
            <a>
              <span className="text-2xl hover:underline">About</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
