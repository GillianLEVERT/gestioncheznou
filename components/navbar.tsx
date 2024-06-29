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
import Link from "next/link";

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
      className=" bg-primary text-black"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={handleMenuChange}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarItem>
          <Link className="hidden sm:flex font-semibold text-xl" href="/">
            Accueil
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-8 font-medium"
        justify="center"
      >
        <NavbarItem>
          <Link href="#about">A propos</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#service">Services</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#contact">Contact</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-primary-500 font-semibold gap-y-2 list-disc list-inside">
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
