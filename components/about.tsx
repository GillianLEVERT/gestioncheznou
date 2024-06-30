import Image from "next/image";

import Herobg from "@/app/assets/hero-bg.jpg";

export const About = () => {
  return (
    <section className="h-[1000px] mt-20" id="about">
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="px-4 md:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            {/* Contenu textuel */}
            <div className="md:pt-8">
              <p className="text-center font-bold text-indigo-500 md:text-left">
                Who we are
              </p>

              <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
                Our competitive advantage
              </h1>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
                <br />
                <br />
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is or otherwise generated. It may be used to
                display a sample of fonts or generate text for testing. Filler
                text is dummy text which has no meaning however looks very
                similar to real text.
              </p>

              <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
                About us
              </h2>

              <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
            </div>

            {/* Image */}
            <div>
              <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
                <Image
                  alt="about"
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                  src={Herobg}
                  width={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
