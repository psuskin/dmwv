"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { name: "News", href: "/news" },
  {
    name: "Verband",
    href: "/verband",
    submenu: [
      { name: "Über uns", href: "/verband/uber-uns" },
      { name: "Mitgliedschaft", href: "/verband/mitgliedschaft" },
      { name: "Vorstand", href: "/verband/vorstand" },
    ],
  },
  {
    name: "Zertifizierung",
    href: "/zertifizierung",
    submenu: [
      { name: "Prozess", href: "/zertifizierung/prozess" },
      { name: "Kriterien", href: "/zertifizierung/kriterien" },
      { name: "Anmeldung", href: "/zertifizierung/anmeldung" },
    ],
  },
  {
    name: "Medical Wellness",
    href: "##",
    submenu: [
      { name: "Definition", href: "/medical-wellness/definition" },
      { name: "Angebote", href: "/medical-wellness/angebote" },
      { name: "Studien", href: "/medical-wellness/studien" },
    ],
  },
  {
    name: "Presse",
    href: "#",
    submenu: [
      { name: "Pressemitteilungen", href: "/presse/pressemitteilungen" },
      { name: "Mediathek", href: "/presse/mediathek" },
      { name: "Kontakt", href: "/presse/kontakt" },
    ],
  },
  {
    name: "Service",
    href: "###",
    submenu: [
      { name: "FAQ", href: "/service/faq" },
      { name: "Downloads", href: "/service/downloads" },
      { name: "Support", href: "/service/support" },
    ],
  },
  { name: "Planung", href: "/planning" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  const toggleSubmenu = (itemName: string) => {
    setActiveSubmenu(activeSubmenu === itemName ? null : itemName);
  };

  const handleMobileItemClick = (href: string, hasSubmenu: boolean) => {
    if (!hasSubmenu) {
      router.push(href);
      setIsOpen(false);
    } else {
      toggleSubmenu(href);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <nav className="bg-primary-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 bg-white rounded-full">
              <Image
                src="/images/dmwv-logo.png"
                alt="DMWV Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium hover:bg-primary-400 hover:text-white flex items-center transition-colors duration-200 ${
                      pathname === item.href ||
                      pathname.startsWith(item.href + "/")
                        ? "bg-primary-400"
                        : ""
                    }`}
                  >
                    {item.name}
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-200 ${
                              pathname === subItem.href
                                ? "bg-gray-100 text-gray-900"
                                : ""
                            }`}
                            role="menuitem"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex items-center">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Search..."
                className={`bg-primary-600 text-white placeholder-primary-200 rounded-full py-1 px-4 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-300 ${
                  isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
                }`}
                ref={searchInputRef}
              />
              <button
                onClick={toggleSearch}
                className="p-2 rounded-full hover:bg-primary-600 focus:outline-none transition-colors duration-200 ml-1"
              >
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <div key={item.name}>
              <button
                onClick={() => handleMobileItemClick(item.href, !!item.submenu)}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary-600 transition-colors duration-200 flex justify-between items-center ${
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "bg-primary-600"
                    : ""
                }`}
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeSubmenu === item.href ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {item.submenu && (
                <div
                  className={`pl-4 py-2 transition-all duration-200 ease-in-out ${
                    activeSubmenu === item.href
                      ? "max-h-screen opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary-600 transition-colors duration-200 ${
                        pathname === subItem.href ? "bg-primary-600" : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="px-4 py-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Suche..."
              className="w-full bg-primary-600 text-white placeholder-primary-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-primary-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
