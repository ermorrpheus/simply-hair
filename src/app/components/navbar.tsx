"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <a className="block text-black" href="/">
          <span className="sr-only">Home</span>
          <Image src={"/logo.png"} alt="Logo" width={90} height={50} />
        </a>

        <div className="flex flex-1 items-center justify-end">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <button className="text-gray-500 transition hover:text-gray-500/75">
                  About
                </button>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/services"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-500 transition hover:text-gray-500/75"
                  href="/testimonials"
                >
                  Testimonials
                </Link>
              </li>

              <li>
                <Link
                  className="block w-auto rounded bg-black px-6 py-2.5 text-sm font-medium text-white shadow hover:bg-black/80 focus:outline-none focus:ring active:scale-95"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <button
              className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
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
        {/* mobile menu that opens when the above button is clicked */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute left-0 right-0 top-16 bg-white py-8 shadow-md`}
        >
          <div className="flex flex-col items-center gap-6 text-center text-base">
            <ul className="m-0 list-none p-0">
              <li>
                <Link
                  className="block py-2 text-gray-500 transition hover:text-gray-500/75"
                  href="/about"
                  onClick={() => {
                    router.push('/about')
                    setIsMenuOpen(false)
                  }}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  className="block py-2 text-gray-500 transition hover:text-gray-500/75"
                  href="/services"
                  onClick={() => {
                    router.push('/services')
                    setIsMenuOpen(false)
                  }}
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  className="block py-2 text-gray-500 transition hover:text-gray-500/75"
                  href="/testimonials"
                  onClick={() => {
                    router.push('/testimonials')
                    setIsMenuOpen(false)
                  }}
                >
                  Testimonials
                </Link>
              </li>

              <li>
                <Link
                  className="mt-4 block w-auto rounded bg-black px-6 py-2.5 text-sm font-medium text-white shadow hover:bg-black/80 focus:outline-none focus:ring active:scale-95"
                  href="/contact"
                  onClick={() => {
                    router.push('/contact')
                    setIsMenuOpen(false)
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
