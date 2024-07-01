/* eslint-disable react/no-unescaped-entities */
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function NotFound() {
  return (
    <section className="h-screen">
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center">
            <p className="mb-4 text-sm font-semibold uppercase text-indigo-500 md:text-base">
              Erreur 404
            </p>
            <h1 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
              Page introuvable
            </h1>

            <p className="mb-12 max-w-screen-md text-center text-gray-500 md:text-lg">
              La page que vous recherchez n'existe pas.
            </p>

            <Button className="bg-blue-700 ">
              <Link className="text-black" href="/">
                Retourner à l'acueil
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
