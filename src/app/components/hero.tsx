import { Playfair_Display } from "next/font/google";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function Hero() {
  return (
    <section className="relative bg-[url(/hero.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

      <div className="relative mx-auto px-4 py-32 sm:px-6 lg:flex lg:h-fit lg:items-center lg:px-8">
        <div className="max-w-xl">
          <h1
            className={`${playfair.className} text-3xl font-semibold sm:text-5xl`}
          >
            Your Beauty Journey
            <strong className="block font-extrabold text-[#D4AF37]">
              Begins Here.
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-lg/relaxed">
            Every individual is unique, and so is our approach. We take pride in
            personalizing each treatment, ensuring you shine in your own light.
          </p>

          <div className="mt-4 flex flex-wrap gap-4 text-center">
            <Link
              href="/about"
              className="block w-auto rounded bg-black px-8 py-3 text-sm font-medium text-white shadow hover:bg-black/80 focus:outline-none focus:ring active:bg-black"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
