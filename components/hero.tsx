/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { Divider } from "@nextui-org/divider";
import { MdMail } from "react-icons/md";
import { FaLinkedin, FaPhoneSquare } from "react-icons/fa";
import { Link } from "@nextui-org/link";

export const Hero = () => {
  return (
    <section className="h-screen flex items-center pb-20" id="hero">
      <div className="w-full flex flex-col md:flex-row 2xl:gap-x-40 xl:gap-x-10 gap-x-4 justify-center">
        <Image
          alt="logo"
          className="xl:h-[450px] xl:w-[450px] md:w-[350px] md:h-[350px] 2xl:w-[600px] 2xl:h-[600px]"
          height={500}
          src="/logo-transparent.png"
          width={500}
        />
        <div className="flex flex-col justify-center  p-4">
          <h1 className="text-2xl 2xl:text-4xl p-4 font-bold text-secondary-500 drop-shadow-xl ">
            {" "}
            Une micro entreprise..
          </h1>
          <p className="text-lg 2xl:text-2xl pl-4 ">
            Spécialisée dans l'assistance administrative indépendante, dédiée à
            soutenir les entrepreneurs, les petites et moyennes entreprises,
            ainsi que les professionnels libéraux dans leurs tâches
            administratives quotidiennes.
          </p>
          <p className="text-lg 2xl:text-2xl font-medium p-4">
            Pour toute information complémentaire, je suis à votre disposition
            sur mes réseaux sociaux, mail et téléphone que vous retrouverez
            ci-dessous.
          </p>
          <div className="flex flex-row gap-4 p-4">
            <Link
              className="text-black "
              href="mailto:gestioncheznou@outlook.fr"
            >
              <MdMail
                className="text-3xl hover:text-secondary-600 drop-shadow-xl "
                title="Email"
              />
            </Link>
            <Divider className="bg-secondary-500" orientation="vertical" />
            <Link
              className="text-black"
              href="https://www.linkedin.com/in/nou-de-arede-a7048a21b/"
              id="coordonnees"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin
                className="text-3xl hover:text-secondary-600 drop-shadow-xl"
                title="Linkedin"
              />
            </Link>
            <Divider className="bg-secondary-500" orientation="vertical" />
            <Link className="text-black" href="tel:0615817045">
              <FaPhoneSquare
                className="text-3xl hover:text-secondary-600 drop-shadow-xl"
                title="Téléphone"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
