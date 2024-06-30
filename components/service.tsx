import Image from "next/image";

import { ServiceCard } from "./card";

const services = [
  {
    title: "Gestion Commerciale",
    descriptionPoints: [
      "Saisie et suivi des commandes commerciales",
      "Facturation et devis",
      "Gestion des achats auprès des fournisseurs",
      "Gestion du planning",
    ],
  },
  {
    title: "Gestion Administrative",
    descriptionPoints: [
      "Gestion du courrier et des mails",
      "Gestion des appels téléphoniques entrants et sortants",
      "Rédaction de documents administratifs",
      "Suivi clients",
      "Numérisation et archivage",
    ],
  },
  {
    title: "Gestion Financière",
    descriptionPoints: [
      "Suivi des règlements clients et fournisseurs",
      "Relance des factures impayées",
      "Pointage et rapprochement bancaire",
    ],
  },
  {
    title: "Echange avec le cabinet comptable",
    descriptionPoints: ["Préparation des documents à transmettre"],
  },
];

export const Service = () => {
  return (
    <section
      className="relative md:h-screen h-full justify-center"
      id="service"
    >
      <div className="absolute w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] h-full">
        <Image
          fill
          alt="service"
          className="opacity-50 hidden md:flex"
          sizes="100vw"
          src="/service.jpg"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-8 mt-20">
          Mes Services.
        </h1>
        <div className="flex justify-center items-center">
          <div className="border-t-8 border-gray-500 w-36" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 2xl:gap-16 mt-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              descriptionPoints={service.descriptionPoints}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
