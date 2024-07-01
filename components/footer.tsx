export const Footer = () => {
  return (
    <footer className="flex justify-between p-4 text-sm noise lg:text-md text-black">
      <p>
        Gestion chez Nou <span>| </span>
        <a className="font-bold" href="/">
          Mentions Légales
        </a>
      </p>
      <p>
        Copyright © 2024 <span className="font-bold">Gestion chez Nou</span> -
        droit réservés - Site réalisé par{" "}
        <a
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
