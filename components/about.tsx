/* eslint-disable react/no-unescaped-entities */
import { Link } from "@nextui-org/link";
import Image from "next/image";

export const About = () => {
  return (
    <section className="h-screen  mt-20" id="about">
      <div className="flex justify-center items-center xl:mb-60 mb-20">
        <div className="border-t-2 border-primary-300 w-1/2 " />
      </div>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="px-4 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="xl:pt-20">
              <h1 className="mb-4 text-center text-2xl 2xl:text-4xl font-bold text-secondary-500 sm:text-3xl md:mb-6 md:text-left drop-shadow-xl">
                Qui-suis-je ?
              </h1>

              <div className="mb-6 sm:text-lg 2xl:text-2xl md:mb-8">
                <p className="p-2">
                  J'ai créé ma micro-entreprise en juin 2023. Avant cela, j'ai
                  occupé un poste de chargée de recouvrement et de facturation
                  pendant 7 ans au sein d'une société de BTP.
                </p>
                <p className="p-2">
                  ar la suite, j'ai évolué en tant qu'assistante commerciale au
                  sein de cette entreprise pendant 5 ans. Ces expériences m'ont
                  permis d'acquérir diverses compétences telles que la
                  polyvalence, la gestion de la relation client, la gestion
                  commerciale, et bien d'autres encore. Mon objectif est de vous
                  aider à gérer vos tâches administratives afin que vous
                  puissiez vous concentrer pleinement sur votre métier.
                </p>
                <p className="p-2">
                  Je suis à la recherche de nouvelles collaborations alors
                  n'hésitez pas à me contacter via{" "}
                  <Link
                    className="sm:text-lg 2xl:text-2xl text-secondary-700 font-semibold"
                    href="#contact"
                  >
                    le formulaire{" "}
                  </Link>{" "}
                  ou via{" "}
                  <Link
                    className="sm:text-lg 2xl:text-2xl text-secondary-700 font-semibold"
                    href="#coordonnees"
                  >
                    {" "}
                    mes cooordonnées.
                  </Link>
                </p>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-lg shadow-xl">
                <Image
                  alt="about"
                  className="w-full xl:h-[600px]"
                  height={300}
                  src="/about.jpg"
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
