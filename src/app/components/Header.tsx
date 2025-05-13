"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
// import ThemeToggle from "./ThemeToggle";

interface NavigationItem {
  label: string;
  href: string;
}

const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
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
        <div className="header-wrapper-logo">
          <Link className="header-logo" href="/">
            HOCO
          </Link>
        </div>
        <div className="header-content">
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
          <div className="theme-wrapper">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
