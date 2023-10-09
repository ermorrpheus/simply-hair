import Image from "next/image";
import { ScrollToTop } from "./scroll-to-top";

export function Footer() {
  return (
    <footer className="bg-zinc-100">
      <div className="relative px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
        <ScrollToTop />

        <div className="lg:flex lg:items-end lg:justify-between">
          <div>
            <div className="flex justify-center text-black lg:justify-start">
              <Image src={"/logo.png"} alt="Logo" width={180} height={100} />
            </div>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-sm text-gray-700 transition hover:text-gray-700/75"
                href="/about"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                className="text-sm text-gray-700 transition hover:text-gray-700/75"
                href="/services"
              >
                Services
              </a>
            </li>

            <li>
              <a
                className="text-sm text-gray-700 transition hover:text-gray-700/75"
                href="/testimonials"
              >
                Testimonials
              </a>
            </li>

            <li>
              <a
                className="text-sm text-gray-700 transition hover:text-gray-700/75"
                href="/contact"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-xs text-gray-500">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
