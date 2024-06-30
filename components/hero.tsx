/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Button } from "@nextui-org/button";

import Logo from "@/app/assets/logo-transparent.png";

export const Hero = () => {
  return (
    <section
      className="h-screen lg:h-[800px] flex items-center pb-20"
      id="hero"
    >
      <div className="w-full flex flex-col md:flex-row 2xl:gap-x-40 xl:gap-x-10 gap-x-4 justify-center">
        <Image
          alt="logo"
          className="xl:h-[450px] xl:w-[450px] md:w-[350px] md:h-[350px] 2xl:w-[600px] 2xl:h-[600px]"
          src={Logo}
        />
        <div className="flex flex-col justify-center  p-4">
          <h1 className="text-2xl 2xl:text-4xl p-4 font-bold text-[#345995] ">
            {" "}
            Une micro entreprise..
          </h1>
          <p className="text-lg 2xl:text-2xl pl-4">
            Spécialisée dans l'assistance administrative indépendante, dédiée à
            soutenir les entrepreneurs, les petites et moyennes entreprises,
            ainsi que les professionnels libéraux dans leurs tâches
            administratives quotidiennes.
          </p>
          <p className="text-lg 2xl:text-2xl font-medium p-4">
            Pour toute information complémentaire, je suis à votre disposition.
          </p>
          <Button className="w-44 ml-4 bg-[#345995] text-lg">
            Me contacter
          </Button>
        </div>
      </div>
    </section>
  );
};
