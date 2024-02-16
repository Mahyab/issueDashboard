"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FcLinux } from "react-icons/fc";
import classNames from "classnames";
const Navbar = () => {
  const currentPath = usePathname();
  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  return (
    <nav className="flex items-center space-x-2 border-b ">
      <Link href="/">
        <FcLinux style={{ fontSize: "5rem" }} />
      </Link>
      <ul className="flex">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              className={classNames({
                "mx-3  hover:text-zinc-900 transition-colors": true,
                "text-zinc-900": link.href === currentPath,
                "text-zinc-600": link.href !== currentPath,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
