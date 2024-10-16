"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SearchModal from "@/components/SearchModal";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "News", href: "/news" },
  {
    name: "Association",
    href: "/#",
    submenu: [
      { name: "Organisation", href: "/verband/organisation" },
      { name: "Expertise", href: "/verband/expertise" },
      { name: "Cooperation", href: "/verband/kooperation" },
      { name: "Membership", href: "/verband/mitgliedschaft" },
      { name: "AreasOfCompetence", href: "/verband/kompetenzfelder" },
      { name: "Partners", href: "/verband/partners" },
    ],
  },
  { name: "Certification", href: "/zertifizierung" },
  { name: "MedicalWellness", href: "/medical-wellness" },
  { name: "Planning", href: "/planning" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("");
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

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
      router.push(`/${locale}${href}`);
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

  const isActive = (href: string) => {
    return (
      pathname === `/${locale}${href}` ||
      pathname.startsWith(`/${locale}${href}/`)
    );
  };

  const toggleSearchModal = () => {
    setIsSearchModalOpen(!isSearchModalOpen);
  };

  const getLogoPath = () => {
    return locale === "de" ? "/images/dmwv-logo-de.png" : "/images/dmwv-logo-en.png";
  };

  return (
    <nav className="bg-primary-800 text-white shadow-md relative z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="flex-shrink-0">
              <Image
                src={getLogoPath()}
                alt="DMWV Logo"
                width={68}
                height={68}
                className="h-[75px] w-auto bg-white rounded-full p-0"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
              {menuItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={`/${locale}${item.href}`}
                    className={`px-2 lg:px-3 xl:px-4 py-2 lg:py-3 rounded-md text-sm lg:text-base xl:text-xl font-medium hover:text-[#BFD2F8] flex items-center transition-colors duration-200 relative
                      ${
                        isActive(item.href)
                          ? "text-[#BFD2F8]"
                          : "text-white hover:bg-[#2A3A8C]"
                      }`}
                    onMouseEnter={() => item.submenu && openSubmenu(item.name)}
                    onMouseLeave={() => item.submenu && closeSubmenu()}
                  >
                    <span className="relative">
                      {t(item.name)}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#BFD2F8] transform origin-left transition-transform duration-300 ease-out
                        ${
                          isActive(item.href)
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </span>
                    {item.submenu && (
                      <ChevronDown className="ml-1 h-4 w-4 lg:h-5 lg:w-5" />
                    )}
                  </Link>
                  {item.submenu && (
                    <div
                      className={`absolute left-0 mt-2 w-48 lg:w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 transition-all duration-200 ${
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
                            href={`/${locale}${subItem.href}`}
                            className={`block px-4 py-2 text-sm lg:text-base font-medium text-[#1F2B6C] hover:bg-[#E6EAF8] hover:text-[#1F2B6C] transition-colors duration-200 ${
                              isActive(subItem.href)
                                ? "bg-[#BFD2F8] text-[#1F2B6C]"
                                : ""
                            }`}
                            role="menuitem"
                            onClick={() => closeSubmenu()}
                          >
                            {t(subItem.name)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <button
              onClick={toggleSearchModal}
              className="p-2 rounded-full hover:bg-[#5C69A8] focus:outline-none focus:ring-2 transition-colors duration-200"
              aria-label="Toggle search"
            >
              <Search className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
            </button>
            <LanguageSwitcher />
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <button
              onClick={toggleSearchModal}
              className="p-2 rounded-md text-white hover:bg-[#5C69A8] focus:outline-none focus:ring-2 transition-colors duration-200"
              aria-label="Toggle search"
            >
              <Search className="h-7 w-7" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-[#5C69A8] focus:outline-none focus:ring-2 transition-colors duration-200"
              aria-expanded={isOpen}
              aria-label="Main menu"
            >
              {isOpen ? (
                <X className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden inset-x-0 top-24 bg-[#1F2B6C] shadow-lg transition-all duration-300 ease-in-out z-50 ${
          isOpen
            ? "max-h-[calc(100vh-6rem)] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 overflow-y-auto max-h-[calc(100vh-6rem)]">
          {menuItems.map((item) => (
            <div key={item.name}>
              <button
                onClick={() => handleMobileItemClick(item.href, !!item.submenu)}
                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3D4A8A] transition-colors duration-200 flex justify-between items-center ${
                  isActive(item.href) ? "bg-[#3D4A8A]" : ""
                }`}
                aria-expanded={activeSubmenu === item.href}
              >
                {t(item.name)}
                {item.submenu && (
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-200 ${
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
                      href={`/${locale}${subItem.href}`}
                      className={`block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3D4A8A] transition-colors duration-200 ${
                        isActive(subItem.href) ? "bg-[#3D4A8A]" : ""
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        setActiveSubmenu(null);
                      }}
                    >
                      {t(subItem.name)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
    </nav>
  );
}
