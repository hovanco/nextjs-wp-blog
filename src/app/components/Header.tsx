"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface INavigationItem {
  label: string;
  href: string;
}

const navigation: INavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header: React.FunctionComponent = () => {
  const pathname = usePathname();
  const [active, setActive] = useState<string>(pathname);
  const pathBlog = "/" + pathname.split("/")[1];

  useEffect(() => {
    setActive(pathname);
  }, [pathname]);

  return (
    <header>
      <nav className="header-nav">
        <ul className="header-menu">
          {navigation.map((item) => (
            <li
              key={item.href}
              className={`header-item ${
                active === item.href || pathBlog === item.href
                  ? "is-active"
                  : ""
              }`}
            >
              <Link
                className="header-link"
                href={item.href}
                onClick={() => setActive(item.href)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
