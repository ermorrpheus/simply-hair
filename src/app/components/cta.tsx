import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
});

export function CTA() {
  return (
    <section className="overflow-hidden bg-[url(/blowdry.jpg)] bg-cover bg-top bg-no-repeat">
      <div className="bg-black/70 px-4 py-24 sm:px-6 lg:px-8">
        <div className="">
          <h2
            className={`${playfair.className} text-2xl font-bold text-white sm:text-4xl`}
          >
            The Hair Clipping
          </h2>

          <p className="mt-6 max-w-lg text-sm text-white/90 md:block md:text-base md:leading-relaxed">
            Dive into the world of Simply Hair with our exclusive "Hair
            Clipping" newsletter. From the latest styling trends and haircare
            tips to special promotions and salon events, we've got you covered.
            Stay ahead of the curve and let beauty insights come straight to
            your inbox. Sign up now and be part of our vibrant community. Your
            hair will thank you!
          </p>

          <div className="mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="group mt-6 inline-flex shrink-0 items-center gap-2 rounded bg-black px-8 py-3 text-white shadow transition hover:bg-black/80 md:mt-0"
              >
                <span className="text-sm font-medium"> Sign Up </span>

                <svg
                  className="h-5 w-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
