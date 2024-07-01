export const Footer = () => {
  return (
    <footer className="flex justify-between xl:gap-0 gap-10 p-4 text-sm noise lg:text-md text-black border-t-1 border-primary-300">
      <p className="flex flex-row gap-2">
        Gestion chez Nou <span className="hidden md:flex">| </span>
        <a className="font-bold text-secondary-700" href="/mentionslegales">
          Mentions Légales
        </a>
      </p>
      <p>
        Copyright © 2024 <span className="font-bold">Gestion chez Nou</span> -
        droit réservés - Site réalisé par{" "}
        <a
          className="text-secondary-700"
          href="https://www.gillianlevert.fr/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Gillian LEVERT
        </a>
      </p>
    </footer>
  );
};
