import { Playfair } from "next/font/google";
import Image from "next/image";
import { CTA } from "../components/cta";

const playfair = Playfair({ subsets: ["latin"] });

export default function Services() {
  return (
    <div className="flex flex-col">
      <Image
        src={"/services.webp"}
        height={500}
        width={2000}
        alt="Services Page Header Image"
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-8">
          <div>
            <p className="text-sm font-semibold leading-7 text-[#D4AF37] md:text-base">
              Services
            </p>
            <h2
              className={`${playfair.className} mb-4 mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl`}
            >
              Elevate Every Strand
            </h2>
            <p className="text-sm leading-7 text-gray-700 md:text-base">
              From tailored trims to radiant color transformations, our expert
              stylists are here to craft your ideal look. Dive into our curated
              offerings, each designed with precision, passion, and a touch of
              Phoenix flair. Let's embark on your hair's next beautiful journey
              together.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 py-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-8">
          <h2
            className={`${playfair.className} bg-white pb-3 text-2xl font-extrabold lg:sticky lg:top-24 lg:text-4xl`}
          >
            Styling
          </h2>
          <div>
            <ul role="list" className="mt-4 space-y-8 text-gray-600">
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Cut & Style
                  </strong>
                  Whether you're after a chic bob, a daring asymmetrical, or a
                  classic straight cut, our team at Simply Hair crafts styles
                  that truly reflect your essence. Every haircut is paired with
                  a complimentary blowout, ensuring you step out with a flawless
                  finish.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Blowouts & Styling
                  </strong>{" "}
                  Be it a gala event or a casual get-together, our range of
                  blowouts and sets are tailored to suit the occasion. From
                  elegant finger-waves to sleek blowouts, we've got the
                  expertise to elevate your look.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Wave & Curl Enhancement
                  </strong>{" "}
                  For those seeking added volume and texture, our perms are the
                  perfect solution. Especially suited for medium to long hair,
                  they infuse your tresses with a natural bounce and wave.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Sleek & Straight
                  </strong>{" "}
                  Bid farewell to unmanageable frizz and curls. Our
                  straightening service transforms your hair into silky,
                  effortlessly smooth locks that require minimal upkeep.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Glamorous Updos
                  </strong>{" "}
                  For those special moments when you want to stand out, our
                  updos are the answer. Whether it's a grand wedding or a night
                  out, we'll sculpt your hair into a masterpiece fit for the
                  occasion.
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-full border-t-2 border-gray-200"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 py-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-8">
          <h2
            className={`${playfair.className} pb-3 text-2xl font-extrabold lg:sticky lg:top-24 lg:text-4xl`}
          >
            Color
          </h2>
          <div>
            <ul role="list" className="mt-4 space-y-8 text-gray-600">
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Single Process
                  </strong>
                  Achieve a uniform and vibrant hue tailored to your hair type
                  with our single process color. Whether you're seeking a
                  lasting change or a temporary transformation, we've got you
                  covered.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Double Process
                  </strong>{" "}
                  For those with darker tresses aiming for a lighter shade, our
                  double process begins with a meticulous bleaching followed by
                  a color infusion, ensuring a lasting, radiant change.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Glossing
                  </strong>{" "}
                  FRevitalize lackluster locks with our glossing treatment. It
                  not only adds a luminous shine but also balances out intense
                  shades, resulting in a naturally lustrous appearance.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Partial Foil
                  </strong>{" "}
                  Illuminate your look with our partial foil technique. Starting
                  from the hairline and reaching mid-head, it's perfect for
                  those who prefer their hair down and desire a touch of depth
                  and dimension.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Full Foil
                  </strong>{" "}
                  For a comprehensive highlight experience, our full foil method
                  ensures shimmering strands from the hairline down to the nape.
                  Ideal for updos, as the highlights seamlessly blend
                  throughout.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Corrective Color
                  </strong>{" "}
                  Mistakes happen, but we're here to set things right. If a
                  previous color treatment didn't go as planned, our corrective
                  color service is tailored to bring back your hair's original
                  charm. Consult with us for the best approach.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Post-Color Styling
                  </strong>{" "}
                  Elevate your fresh color with our expert after-color blow-dry
                  styling, available for a nominal additional charge.
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-full border-t-2 border-gray-200"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 py-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-8">
          <h2
            className={`${playfair.className} pb-3 text-2xl font-extrabold lg:sticky lg:top-24 lg:text-4xl`}
          >
            Treatments
          </h2>
          <div>
            <ul role="list" className="mt-4 space-y-8 text-gray-600">
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    RIKOKO
                  </strong>
                  Discover the magic of Rikoko, a line of treatments crafted
                  from exotic ingredients designed to lock in color, reduce
                  fade, and boost hair health. Dive into our Rikoko Lock range,
                  complemented by the Reset and Seal duo, a quick remedy for
                  post-color itchy scalps. Infused with coconut oil, natural
                  blends, and fortifying lemongrass, our treatments suit all
                  hair types. And with Kokobalm, enjoy a paraben-, silicone-,
                  and colorant-free experience.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Kerasilk
                  </strong>{" "}
                  Transform frizzy challenges into silky triumphs with Kerasilk.
                  Our Keratin Treatment promises up to 3-5 months of smooth,
                  soft hair, thanks to the power of KeraShapeTechnology. Embrace
                  the fabulous transformation.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Keratin Complex
                  </strong>{" "}
                  Pioneered by top chemists and hair experts, Keratin Complex
                  taps into the strength of keratin for unmatched smoothing
                  without compromising hair bonds. With our patented formula,
                  including a special variant for blonde hair, and the Express
                  Blow OutTM, we've set a new standard in haircare.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Olaplex
                  </strong>{" "}
                  Venture into deep restoration with Olaplex. Our unique
                  three-step process targets and mends broken hair bonds caused
                  by various damages. Especially beneficial for over-highlighted
                  hair, Olaplex rejuvenates, strengthening your hair's core.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Brazilian Blowout
                  </strong>{" "}
                  Experience the versatility of the Brazilian Blowout, tailored
                  to either retain curls or achieve sleekness. Not only does it
                  slash drying and styling time for up to 12 weeks, but it also
                  offers the freedom to immediately style post-treatment. Step
                  out of the salon ready to shine.
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-full border-t-2 border-gray-200"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 py-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-8">
          <h2
            className={`${playfair.className} pb-3 text-2xl font-extrabold lg:sticky lg:top-24 lg:text-4xl`}
          >
            Bridal
          </h2>
          <div>
            <ul role="list" className="mt-4 space-y-8 text-gray-600">
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Bridal Elegance: Hair & Makeup
                  </strong>
                  For the bride, every detail matters. At Simply Hair, we're
                  dedicated to ensuring your hair mirrors the significance of
                  your special day. Whether you envision a classic updo or a
                  modern, breezy style, our experts will craft a look that
                  harmonizes with your wedding theme and personal flair.
                  Schedule a consultation or a trial updo to explore and
                  finalize your dream hairstyle.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Groom's Grooming
                  </strong>{" "}
                  The groom's appearance is equally paramount. Our stylists are
                  committed to delivering a polished, distinguished look that
                  aligns with your personal style, ensuring you stand out on
                  your big day.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    For the Entourage: Bridal Party Styling
                  </strong>{" "}
                  Weddings are a collective celebration. Simply Hair is equipped
                  to style the entire bridal party, ensuring cohesive, stunning
                  looks that complement the bride and groom. Reach out to us for
                  group bookings and details.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Trial Sessions: Perfecting the Look
                  </strong>{" "}
                  To guarantee your wedding day unfolds seamlessly, we recommend
                  our trial updo sessions. This allows us to collaboratively
                  explore and decide on the ideal hairstyle, ensuring no
                  surprises on the big day.
                </span>
              </li>
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Makeup Mastery
                  </strong>{" "}
                  A bride's glow is accentuated with the right makeup. Our
                  artists focus on enhancing your natural beauty, ensuring a
                  radiant look that's camera-ready and synchronizes with your
                  attire. Consider a pre-wedding makeup trial to fine-tune
                  shades, techniques, and overall style.
                </span>
              </li>
            </ul>
          </div>
          <div className="col-span-full border-t-2 border-gray-200"></div>
        </div>
        <div className="grid grid-cols-1 gap-8 py-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-8">
          <h2
            className={`${playfair.className} pb-3 text-2xl font-extrabold lg:sticky lg:top-24 lg:text-4xl`}
          >
            Makeup
          </h2>
          <div>
            <ul role="list" className="mt-4 space-y-8 text-gray-600">
              <li className="flex gap-x-3 pb-3">
                <span className="text-sm leading-7 text-gray-700 md:text-base">
                  <strong className="block font-semibold text-gray-900">
                    Makeup Mastery for Every Occasion
                  </strong>
                  Whether it's a romantic date, a night out with friends, or a
                  pivotal business meeting, our makeup artists are here to
                  ensure you shine. Drawing from the latest in beauty trends and
                  with a keen eye for detail, we craft looks that not only turn
                  heads but also resonate with your unique charm.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
