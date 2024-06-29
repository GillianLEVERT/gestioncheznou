import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Service } from "@/components/service";

export default function Home() {
  return (
    <>
      {/* Grille de fond */}
      <div className="fixed inset-0 grid grid-cols-12 gap-x-1 sm:gap-x-3 lg:gap-x-4 xl:gap-x-6 mx-6 lg:mx-[80px] xl:mx-[160px] 2xl:mx-[320px] opacity-10 z-0 pointer-events-none">
        <div className="bg-red-100">.</div>
        <div className="bg-red-100">.</div>
        <div className="bg-red-100">.</div>
        <div className="bg-red-100">:</div>
        <div className="bg-red-100">:</div>
        <div className="bg-red-100">:</div>
        <div className="bg-red-100">:</div>
        <div className="bg-red-100">:</div>
        <div className="bg-red-100">:</div>
        <div className="bg-red-100">:</div>
        <div className="bg-red-100">:</div>
        <div className="bg-red-100">:</div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10">
        <section className="mx-6 lg:mx-[80px] xl:mx-[160px] 2xl:mx-[320px]">
          <Hero />
          <About />
          <Service />
          <Contact />
        </section>
      </div>
    </>
  );
}