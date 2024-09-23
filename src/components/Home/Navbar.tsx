"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  {
    name: "Verband",
    href: "/verband",
    submenu: [
      { name: "Organisation", href: "/verband/organisation" },
      { name: "Expertise", href: "/verband/expertise" },
      { name: "Kooperation", href: "/verband/kooperation" },
      { name: "Mitgliedschaft", href: "/verband/mitgliedschaft" },
      { name: "Kompetenzfelder", href: "/verband/kompetenzfelder" },
      { name: "Partners", href: "/verband/partners" },
    ],
  },
  { name: "Zertifizierung", href: "/zertifizierung" },
  { name: "Medical Wellness", href: "/medical-wellness" },
  { name: "Planung", href: "/planning" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const openSubmenu = (itemName: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
    setActiveSubmenu(itemName);
  };

  const closeSubmenu = () => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300);
  };

  const handleMobileItemClick = (href: string, hasSubmenu: boolean) => {
    if (!hasSubmenu) {
      router.push(href);
      setIsOpen(false);
    } else {
      setActiveSubmenu(activeSubmenu === href ? null : href);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeSubmenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current);
      }
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

  const toggleMobileSearch = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
    if (!isMobileSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <nav className="bg-primary-600 text-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/dmwv-logo.png"
                alt="DMWV Logo"
                width={140}
                height={50}
                className="h-12 w-auto bg-white rounded-full"
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`px-4 py-3 rounded-md text-base font-medium hover:text-primary-50 flex items-center transition-colors duration-200 relative
                      ${
                        pathname === item.href ||
                        pathname.startsWith(item.href + "/")
                          ? "text-primary-50"
                          : "text-white"
                      }`}
                    onMouseEnter={() => item.submenu && openSubmenu(item.name)}
                    onMouseLeave={() => item.submenu && closeSubmenu()}
                  >
                    <span className="relative">
                      {item.name}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary-200 transform origin-left transition-transform duration-300 ease-out
                        ${
                          pathname === item.href ||
                          pathname.startsWith(item.href + "/")
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </span>
                    {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                  </Link>
                  {item.submenu && (
                    <div
                      className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 ${
                        activeSubmenu === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      onMouseEnter={() => openSubmenu(item.name)}
                      onMouseLeave={() => closeSubmenu()}
                    >
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
                            className={`block px-4 py-2 text-base font-medium text-primary-600 hover:bg-primary-50 hover:text-primary-800 transition-colors duration-200 ${
                              pathname === subItem.href
                                ? "bg-primary-50 text-primary-800"
                                : ""
                            }`}
                            role="menuitem"
                            onClick={() => closeSubmenu()}
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
                className={`bg-primary-50 text-primary-800 placeholder-primary-400 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-all duration-300 ${
                  isSearchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
                }`}
                ref={searchInputRef}
              />
              <button
                onClick={toggleSearch}
                className="p-2 rounded-full hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-colors duration-200 ml-1"
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleMobileSearch}
              className="p-2 rounded-md text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-colors duration-200"
              aria-label="Toggle search"
            >
              <Search className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-300 transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Main menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileSearchOpen
              ? "max-h-20 opacity-100 pb-3"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="relative px-4 py-2">
            <input
              type="text"
              placeholder="Suche..."
              className="w-full bg-primary-50 text-primary-800 placeholder-primary-400 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-primary-300 text-sm"
              ref={searchInputRef}
            />
            <button
              className="absolute right-6 top-1/2 transform -translate-y-1/2"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-primary-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden  inset-x-0 top-20 bg-primary-600 shadow-lg transition-all duration-300 ease-in-out z-50 ${
          isOpen
            ? "max-h-[calc(100vh-5rem)] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 overflow-y-auto max-h-[calc(100vh-5rem)]">
          {menuItems.map((item) => (
            <div key={item.name}>
              <button
                onClick={() => handleMobileItemClick(item.href, !!item.submenu)}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary-500 transition-colors duration-200 flex justify-between items-center ${
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "bg-primary-500"
                    : ""
                }`}
                aria-expanded={activeSubmenu === item.href}
              >
                {item.name}
                {item.submenu && (
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      activeSubmenu === item.href ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
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
                      className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary-500 transition-colors duration-200 ${
                        pathname === subItem.href ? "bg-primary-500" : ""
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        setActiveSubmenu(null);
                      }}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
