import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

/* eslint-disable react/no-unescaped-entities */
const email = "gestioncheznou@outlook";

export default function Page() {
  return (
    <section className="h-full bg-gray-300 noise text-gray-900 mb-20">
      <header className="py-10">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-secondary-500">
            Conformité au RGPD
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Nous prenons très au sérieux la confidentialité de vos données
            personnelles et nous nous engageons à protéger les informations que
            nous collectons. Cette politique de confidentialité explique comment
            nous collectons, utilisons et protégeons vos données conformément au
            Règlement Général sur la Protection des Données (RGPD).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Collecte des Données</h2>
          <p>
            Nous pouvons collecter et traiter les données personnelles suivantes
            :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Nom et prénom</li>
            <li>Adresse e-mail</li>
            <li>Numéro de téléphone</li>
            <li>Adresse postale</li>
            <li>Données de connexion et d'utilisation</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Utilisation des Données
          </h2>
          <p>Les données que nous collectons peuvent être utilisées pour :</p>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Fournir et gérer nos services</li>
            <li>Personnaliser votre expérience sur notre site</li>
            <li>Améliorer notre site et nos services</li>
            <li>Communiquer avec vous, notamment pour le support client</li>
            <li>Se conformer à nos obligations légales et réglementaires</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Partage des Données</h2>
          <p>
            Nous ne partageons pas vos données personnelles avec des tiers, sauf
            dans les cas suivants :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Avec votre consentement explicite</li>
            <li>Pour se conformer à une obligation légale</li>
            <li>Pour protéger et défendre nos droits ou notre propriété</li>
            <li>
              Pour prévenir ou enquêter sur d'éventuelles activités illégales
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Sécurité des Données</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité techniques et
            organisationnelles appropriées pour protéger vos données
            personnelles contre toute destruction, perte, altération,
            divulgation ou accès non autorisé.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Vos Droits</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants concernant
            vos données personnelles :
          </p>
          <ul className="list-disc pl-5 space-y-2 text-lg">
            <li>Le droit d'accès</li>
            <li>Le droit de rectification</li>
            <li>Le droit à l'effacement</li>
            <li>Le droit à la limitation du traitement</li>
            <li>Le droit à la portabilité des données</li>
            <li>Le droit d'opposition</li>
          </ul>
          <p>
            Pour exercer ces droits, vous pouvez nous contacter à l'adresse
            suivante : <strong>{email}</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>
            Pour toute question concernant cette politique de confidentialité ou
            pour toute demande relative à vos données personnelles, veuillez
            nous contacter à : <strong>{email}</strong>.
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
