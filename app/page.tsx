import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Service } from "@/components/service";

export default function Home() {
  return (
    <div className="bg-gray-300 noise ">
      <section className="mx-4 lg:mx-[80px] xl:mx-[160px] 2xl:mx-[320px] ">
        <Hero />
        <About />
        <Service />
        <Contact />
      </section>
    </div>
  );
}
