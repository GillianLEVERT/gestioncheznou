import { Button } from "@nextui-org/button";
import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
const name = "gestioncheznou.fr";
const sct = "GestionChezNou";
const email = "gestioncheznou@outlook.fr";

export default function Page() {
  return (
    <section className="h-screen bg-gray-300 noise text-gray-900 font-sans">
      <header className=" text-secondary-500 py-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Mentions Légales</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Informations Générales
          </h2>
          <p>
            Le site <strong>{name}</strong> est édité par :
            <br />
            <strong>Mr LEVERT Gillian</strong>
            <br />
            Adresse : 22 rue Aristide Briand 77100 MEAUX
            <br />
            Email : gillianlevert.dev@protonmail.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
          <p>
            Le site est hébergé par :
            <br />
            <strong>Hostinger</strong>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Propriété Intellectuelle
          </h2>
          <p>
            Le contenu du site <strong>{name}</strong> (textes, images,
            graphismes, logo, icônes, etc.) est la propriété de{" "}
            <strong>{sct}</strong>, sauf mentions contraires. Toute
            reproduction, distribution, modification, adaptation, retransmission
            ou publication, même partielle, de ces différents éléments est
            strictement interdite sans l'accord exprès par écrit de{" "}
            <strong>{sct}</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Données Personnelles</h2>
          <p>
            Conformément à la loi n°78-17 du 6 janvier 1978 relative à
            l'informatique, aux fichiers et aux libertés, vous disposez des
            droits d'opposition (art. 26), d'accès (art. 34 à 38), et de
            rectification (art. 36) des données vous concernant. Pour exercer ce
            droit, adressez-vous à <strong>{sct}</strong> par email à{" "}
            <strong>{email}</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
          <p>
            Le site <strong>{name}</strong> peut-être amené à vous demander
            l’acceptation des cookies pour des besoins de statistiques et
            d'affichage. Un cookie est une information déposée sur votre disque
            dur par le serveur du site que vous visitez. Il contient plusieurs
            données qui sont stockées sur votre ordinateur dans un simple
            fichier texte auquel un serveur accède pour lire et enregistrer des
            informations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            Pour toute demande d'information ou contact, vous pouvez nous écrire
            à l'adresse suivante : <strong>{email}</strong>.
          </p>
        </section>
      </main>
      <div className="flex justify-center">
        <Link href="/">
          <Button className="bg-secondary-600">Revenir l'accueil</Button>
        </Link>
      </div>
    </section>
  );
}
