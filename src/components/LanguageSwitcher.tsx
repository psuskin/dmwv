"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale } from "next-intl";

const languages = [
  {
    code: "de",
    label: "Deutsch",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 5 3"
        width="24"
        height="14"
      >
        <rect width="5" height="3" y="0" fill="#000" />
        <rect width="5" height="2" y="1" fill="#D00" />
        <rect width="5" height="1" y="2" fill="#FFCE00" />
      </svg>
    ),
  },
  {
    code: "en",
    label: "English",
    flag: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 30"
        width="24"
        height="12"
      >
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z" />
        </clipPath>
        <clipPath id="t">
          <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
        </clipPath>
        <g clipPath="url(#s)">
          <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
          <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
          <path
            d="M0,0 L60,30 M60,0 L0,30"
            clipPath="url(#t)"
            stroke="#C8102E"
            strokeWidth="4"
          />
          <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
          <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    ),
  },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const [currentLocale, setCurrentLocale] = useState(locale);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentLocale(locale);
    setIsLoading(false);
  }, [locale, pathname]);

  const toggleLanguage = (newLocale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPathname);
    setCurrentLocale(newLocale);
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  if (isLoading) {
    return (
      <div className="w-[80px] h-[35px] bg-[#5C69A8] rounded-md animate-pulse"></div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="default"
          className="flex items-center space-x-2 bg-[#3D4A8A] text-white border-[#3D4A8A] hover:bg-[#5C69A8] hover:text-white rounded-lg"
        >
          {currentLanguage?.flag}
          <span className="uppercase ml-2">{currentLocale}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 bg-primary-50 border-primary-200"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => toggleLanguage(lang.code)}
            className={`flex items-center justify-between hover:bg-primary-100 ${
              currentLocale === lang.code
                ? "bg-primary-200 text-primary-800"
                : "text-primary-700"
            }`}
          >
            <span className="flex items-center space-x-2">
              {lang.flag}
              <span className="ml-2">{lang.label}</span>
            </span>
            {currentLocale === lang.code && (
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
