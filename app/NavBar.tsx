"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b mb-5 h-10 px-5 items-center">
      <Link href="/">
        <FaBug></FaBug>
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-zinc-900 border border-zinc-900": link.href === currentPath,
              "text-zinc-500 border border-zinc-500": link.href !== currentPath,
              "hover:bg-zinc-200 transition-colors focus-within:bg-xinc-200 outline-none px-2 py-1":
                true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
