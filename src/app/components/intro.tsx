import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export function Intro() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-4 py-24 sm:px-6 sm:py-32 lg:overflow-visible lg:pl-8 lg:pr-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8 lg:pr-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-[#D4AF37]">
                Where beauty meets authenticity
              </p>
              <h2
                className={`${playfair.className} mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl`}
              >
                Welcome to Simply Hair
              </h2>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 pb-6 lg:sticky lg:top-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:pb-12">
          <img
            className="max-h-96 w-[48rem] max-w-none rounded-xl bg-gray-900 object-cover shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:max-h-full md:object-[unset]"
            src="/salon.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:grid-cols-2 lg:gap-x-8 lg:pr-8">
          <div className="lg:pr-4">
            <div className="text-sm leading-7 text-gray-700 md:text-base">
              <p>
                At Simply Hair, we understand that true beauty stems from
                choices that resonate with your inner self. Our curated range of
                clean beauty products marries luxury with integrity, ensuring
                you don&apos;t compromise on either. We&apos;re not just about
                outer appearances; we&apos;re about healing and empowerment from
                within. Dive into the transformative journey of self-care with
                us.
              </p>
              <p className="mt-4">
                Experience unparalleled haircare at Simply Hair,
                Phoenix&apos;apos;s premier salon. Our comprehensive services
                are crafted to cater to every hair need, ensuring you step out
                not just looking, but feeling your absolute best.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Styling.
                    </strong>{" "}
                    We tailor cuts and styles to accentuate your individuality,
                    complemented by a complimentary blowout. From transformative
                    perms and sleek straightening to event-ready updos, our
                    range ensures you&apos;re always looking and feeling your
                    best.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Color.
                    </strong>{" "}
                    Our expert stylists personalize each hair coloring
                    experience, ensuring your desired look is achieved and
                    maintained. From uniform single process colors to
                    transformative double processes, enhancing glossing
                    treatments, and precise foiling techniques, we&apos;ve got
                    you covered. For those seeking color corrections or a
                    finishing touch with an after-color blow-dry, our team is
                    here to ensure perfection.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Treatments.
                    </strong>{" "}
                    We offer a diverse range of premium treatments, from
                    Rikoko&apos;s natural, color-locking solutions and
                    Kerasilk&apos;s transformative perms to Keratin
                    Complex&apos;s bond-preserving smoothing treatments. Dive
                    into the revolutionary Olaplex process for hair restoration,
                    or opt for the customizable and immediate-results-driven
                    Brazilian Blowout for up to 12 weeks of effortless styling.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Bridal.
                    </strong>{" "}
                    We specialize in making wedding days unforgettable. Our
                    dedicated team offers tailored hair designs for both the
                    bride and groom, ensuring every look is as unique as their
                    love story. From traditional updos to modern styles,
                    we&apos;ve got the bride covered, while the groom can expect
                    a polished, impeccable finish. We also cater to the entire
                    bridal party, ensuring cohesive and stunning looks.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Makeup.
                    </strong>{" "}
                    Our makeup specialists are attuned to the latest trends and
                    colors, ensuring you shine in any setting, be it a date, a
                    girls&apos; night out, or an important meeting. Let us
                    enhance your natural beauty with our expert touch and share
                    some of our favorite beauty secrets along the way.
                  </span>
                </li>
              </ul>
              <h3
                className={`${playfair.className} mt-16 text-2xl font-bold tracking-tight text-gray-900`}
              >
                Community & Commitment
              </h3>
              <p className="mt-6">
                At the heart of Simply Hair is a commitment to the Phoenix
                community. Beyond providing exceptional hair and beauty
                services, we strive to create a space where everyone feels
                welcomed, valued, and heard. Our salon is more than just a place
                to get a haircut or makeup session; it&apos;s a sanctuary where
                relationships are nurtured, stories are shared, and
                transformations go beyond the physical. We&apos;re proud to be a
                cornerstone in Phoenix, and we invite you to join our Simply
                Hair family, where every visit is a celebration of beauty,
                inside and out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
