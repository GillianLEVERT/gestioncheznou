import { TbMoneybag, TbBriefcase, TbClipboardList } from "react-icons/tb";
import { MdOutlineHandshake } from "react-icons/md";

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
    icon: TbBriefcase,
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
    icon: TbClipboardList,
  },
  {
    title: "Gestion Financière",
    descriptionPoints: [
      "Suivi des règlements clients et fournisseurs",
      "Relance des factures impayées",
      "Pointage et rapprochement bancaire",
    ],
    icon: TbMoneybag,
  },
  {
    title: "Echange avec le cabinet comptable",
    descriptionPoints: ["Préparation des documents à transmettre"],
    icon: MdOutlineHandshake,
  },
];

export const Service = () => {
  return (
    <section
      className="relative 2xl:h-[1100px] xl:h-[1000px] md:h-[1400px] h-[1800px] xl:pt-10 pt-20 justify-center"
      id="service"
    >
      <div className="absolute w-screen left-[50%] ml-[-50.35vw] h-full">
        <img
          alt="service"
          className="opacity-50 hidden md:flex w-full h-full object-cover"
          src="/service.webp"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        <h1 className="text-4xl font-bold text-center mb-8 mt-20 text-secondary-700 drop-shadow-2xl ">
          Mes Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6 2xl:gap-16 mt-20">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              descriptionPoints={service.descriptionPoints}
              icon={service.icon}
              title={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
