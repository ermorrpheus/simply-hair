import {
  GlobeAmericasIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UserGroupIcon,
} from "@heroicons/react/20/solid";
import { Playfair } from "next/font/google";
import Image from "next/image";
import { CTA } from "../components/cta";

const playfair = Playfair({ subsets: ["latin"] });

export default function About() {
  return (
    <div className="flex flex-col">
      <Image
        src={"/about.webp"}
        height={500}
        width={2000}
        alt="About Page Header Image"
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-4">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8 lg:pr-8">
            <div className="lg:pr-4">
              <div>
                <p className="text-sm font-semibold leading-7 text-[#D4AF37] md:text-base">
                  About Us
                </p>
                <h2
                  className={`${playfair.className} mb-4 mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl`}
                >
                  Our Story
                </h2>
                <p className="text-sm leading-7 text-gray-700 md:text-base">
                  Founded in 2010 in the heart of Phoenix, Simply Hair began as
                  a dream to offer a unique salon experience. Over the years,
                  we've grown from a modest two-chair salon to a bustling hub of
                  beauty and creativity, all while maintaining our commitment to
                  personalized service. Our journey has been shaped by the
                  vibrant Phoenix community, and we're proud to be a local
                  favorite.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-full min-h-[40rem] p-12 pb-6 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:pb-12">
            <Image
              className="rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="/hairwash.jpg"
              alt="Hairdresser"
              fill
            />
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8 lg:pr-8">
            <div className="lg:pr-4">
              <div className="text-sm leading-7 text-gray-700 md:text-base">
                <h2
                  className={`${playfair.className} mb-4 mt-8 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl`}
                >
                  Our Mission
                </h2>
                <p>
                  At Simply Hair, we believe that beauty is an inside-out
                  process. Our mission is to empower individuals to feel
                  confident and radiant, not just in their appearance but in
                  their very essence. We aim to provide unparalleled haircare
                  and beauty services that resonate with each client's unique
                  personality and style.
                </p>
                <h2
                  className={`${playfair.className} mb-4 mt-8 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl`}
                >
                  Our Core Values
                </h2>
                <ul role="list" className="mt-4 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <ShieldCheckIcon
                      className="mt-1 h-5 w-5 flex-none text-[#D4AF37]"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Integrity.
                      </strong>{" "}
                      We uphold the highest standards in our services, products,
                      and interactions.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <SparklesIcon
                      className="mt-1 h-5 w-5 flex-none text-[#D4AF37]"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Empowerment.
                      </strong>{" "}
                      We believe in empowering our clients, helping them embrace
                      and express their true selves.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <LightBulbIcon
                      className="mt-1 h-5 w-5 flex-none text-[#D4AF37]"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Innovation.
                      </strong>{" "}
                      We stay ahead of beauty trends, continuously updating our
                      skills and offerings.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <UserGroupIcon
                      className="mt-1 h-5 w-5 flex-none text-[#D4AF37]"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Community.
                      </strong>{" "}
                      We cherish our Phoenix roots and strive to foster a sense
                      of community within our salon walls.
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <GlobeAmericasIcon
                      className="mt-1 h-5 w-5 flex-none text-[#D4AF37]"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-gray-900">
                        Sustainability.
                      </strong>{" "}
                      We are committed to using and promoting products that are
                      environmentally friendly and cruelty-free.
                    </span>
                  </li>
                </ul>
                <p className="mt-6 font-bold">
                  At Simply Hair, every strand tells a story, and we're here to
                  help you tell yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
