import Image from "next/image";

import { ServiceCard } from "./card";

const services = [
  {
    title: "GESTION COMMERCIALE",
    description: "Création de sites web modernes et réactifs.",
  },
  {
    title: "GESTION ADMINISTRATIVE",
    description: "Conception d'interfaces utilisateur intuitives.",
  },
  {
    title: "GESTION FINANCIERE",
    description: "Optimisation pour les moteurs de recherche.",
  },
  {
    title: "ECHANGE AVEC LE CABINET COMPTABLE",
    description: "Support technique et mises à jour régulières.",
  },
];

export const Service = () => {
  return (
    <section className="relative h-screen justify-center" id="service">
      <div className="absolute w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] h-full">
        <Image
          fill
          alt="service"
          className="opacity-30"
          sizes="100vw"
          src="/service.jpg"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-8 mt-20">
          Mes Services.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              description={service.description}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
