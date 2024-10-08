"use client";

import { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { FaHome } from "react-icons/fa";

type MenuItem = {
  name: string;
  href: string;
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuChange = (isOpen: boolean): void => {
    setIsMenuOpen(isOpen);
  };

  const menuItems: MenuItem[] = [
    { name: "Accueil", href: "#accueil" },
    { name: "A propos", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <NextUINavbar
      className="sm:bg-transparent sm:backdrop-blur-md sm:backdrop-saturate-100 navbar-custom"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={handleMenuChange}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarItem>
          <Link
            className="hidden sm:flex font-semibold text-2xl 2xl:text-3xl text-[#262220] hover:text-secondary-700 "
            href="/"
            title="Accueil"
          >
            <FaHome />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-8 2xl:gap-16 font-medium"
        justify="center"
      >
        <NavbarItem>
          <Link
            className="text-[#262220] font-medium hover:text-secondary-700  2xl:text-xl"
            href="#about"
          >
            A propos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[#262220] font-medium hover:text-secondary-700   2xl:text-xl"
            href="#service"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-[#262220] font-medium hover:text-secondary-700  2xl:text-xl"
            href="#contact"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="noise font-semibold gap-y-2 list-disc list-inside text-secondary-700">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="text-secondary-700 "
              href={item.href}
              onClick={() => handleMenuChange(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
