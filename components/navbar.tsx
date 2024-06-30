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
      className="bg-transparent blur-background  text-black"
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
            className="hidden sm:flex font-semibold text-2xl text-black"
            href="/"
            title="Accueil"
          >
            <FaHome />
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-8 font-medium"
        justify="center"
      >
        <NavbarItem>
          <Link className="text-black" href="#about">
            A propos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="#service">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black" href="#contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-gray-300 noise font-semibold gap-y-2 list-disc list-inside">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              className="w-full "
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
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
