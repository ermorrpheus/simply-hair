import { CTA } from "./components/cta";
import { Hero } from "./components/hero";
import { Intro } from "./components/intro";
import { Testimonials } from "./components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Intro />
      <Testimonials />
      <CTA />
    </div>
  );
}
