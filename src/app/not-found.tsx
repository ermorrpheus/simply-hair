import Image from "next/image";
import Link from "next/link";
import { CTA } from "./components/cta";

export default function NotFound() {
  return (
    <div className="flex min-h-full w-full flex-col">
      <div className="flex  flex-col items-center justify-center gap-4 py-12">
        <h2 className="lg:5xl text-3xl font-bold">
          Hair Today, Gone Tomorrow!
        </h2>
        <p className="max-w-md text-center text-lg lg:text-xl">
          Oops! Looks like the page you&apos;re searching for has had a little
          trim. But don&apos;t worry, our stylists are on it!
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex shrink-0 items-center gap-2 rounded bg-black px-8 py-3 text-white shadow transition hover:bg-black/80 md:mt-0"
        >
          Return Home
        </Link>
        <Image src="/scissors.svg" alt="404" width={160} height={160} />
      </div>
      <CTA />
    </div>
  );
}
