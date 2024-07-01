/* eslint-disable react/no-unescaped-entities */
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

            <p className="mb-12 max-w-screen-md text-center text-black md:text-lg">
              La page que vous recherchez n'existe pas.
            </p>

            <Link
              className="inline-block rounded-lg bg-blue-700 px-8 py-3 text-center text-sm font-semibold text-black outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              href="/"
            >
              Retourner à l'acueil
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
