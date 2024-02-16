import Link from "next/link";
import React from "react";
import { IconContext } from "react-icons";
import { FcLinux } from "react-icons/fc";

const Navbar = () => {
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
              className="mx-3 text-zinc-600 hover:text-zinc-900 transition-colors "
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
