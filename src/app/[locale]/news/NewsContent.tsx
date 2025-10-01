"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Search, ChevronDown } from "lucide-react";
import { newsData, Locale, type LocalizedString } from "@/constants/newsData";
import SubHeader from "@/components/SubHeader";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import type { ApiNewsItem } from "@/types/news";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL || "https://dmwv-news.susko.ai";

type DisplayItem = {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  date: string;
  category: LocalizedString;
  image: string;
};

type Props = {
  items?: ApiNewsItem[];
};

const NewsContent: React.FC<Props> = ({ items }) => {
  const locale = useLocale() as Locale;
  const t = useTranslations("NewsPage");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const displayItems: DisplayItem[] = useMemo(() => {
    if (items && items.length > 0) {
      const cat: LocalizedString = {
        de: "News",
        en: "News",
        es: "News",
        fr: "News",
        it: "News",
        ru: "News",
        ar: "News",
        tr: "News",
      };
      return items.map(
        (n): DisplayItem => ({
          id: n._id,
          title: n.title as LocalizedString,
          excerpt: n.content as LocalizedString,
          date: n.createdAt,
          category: cat,
          image: n.coverImage
            ? n.coverImage.startsWith("http")
              ? n.coverImage
              : `${API_BASE}${n.coverImage}`
            : "/images/placeholder.svg",
        })
      );
    }
    // Fallback to existing static data
    return newsData.map((n) => ({
      id: String(n.id),
      title: n.title,
      excerpt: n.excerpt,
      date: n.date,
      category: n.category,
      image: n.image,
    }));
  }, [items]);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Intl.DateTimeFormat(locale, options).format(date);
  };

  const htmlToText = (html?: string, max = 180) => {
    const text = (html || "")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    return text.length > max ? text.slice(0, max) + "…" : text;
  };

  const filteredNews = displayItems.filter((item) => {
    const matchesSearch =
      item.title[locale]?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt[locale]?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || item.category[locale] === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(
    new Set(displayItems.map((item) => item.category[locale]))
  );

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"}>
      <SubHeader
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: t("home"), href: `/${locale}` },
          { label: t("news"), href: `/${locale}/news` },
        ]}
      />
      <div className="bg-gradient-to-br from-primary-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                className="w-full pl-10 pr-4 py-2 rounded-full border border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400"
                size={20}
              />
            </div>
            <div className="relative w-full md:w-64" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="w-full px-4 py-2 rounded-full border border-primary-300 bg-white text-primary-800 text-left focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 hover:border-primary-400"
              >
                {selectedCategory || t("allCategories")}
                <ChevronDown
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`absolute z-10 w-full mt-1 bg-white border border-primary-300 rounded-md shadow-md overflow-hidden transition-all duration-300 ${
                  isOpen ? "opacity-100 max-h-[400px]" : "opacity-0 max-h-0"
                }`}
              >
                <ul
                  className={`py-1 overflow-y-auto scrollbar-hide transition-all duration-300 ${
                    isOpen ? "max-h-[400px]" : "max-h-0"
                  }`}
                >
                  <li
                    className="px-4 py-2 hover:bg-primary-100 cursor-pointer"
                    onClick={() => handleCategorySelect("")}
                  >
                    {t("allCategories")}
                  </li>
                  {categories.map((category) => (
                    <li
                      key={category}
                      className="px-4 py-2 hover:bg-primary-100 cursor-pointer"
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item: DisplayItem) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-primary-100 overflow-hidden transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title[locale]}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-0 left-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
                    {item.category[locale]}
                  </div>
                </div>
                <Link href={`/${locale}/news/${item.id}`} className="block">
                  <div className="p-6 group">
                    <h2 className="text-xl font-semibold text-primary-800 mb-2 line-clamp-2">
                      {item.title[locale]}
                    </h2>
                    <p className="text-primary-600 mb-4 line-clamp-3">
                      {htmlToText(item.excerpt[locale] || item.excerpt.en)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary-500 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(item.date)}
                      </div>
                      <p className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                        {t("readMore")}
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center text-primary-600 mt-8">
              {t("noNewsFound")}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsContent;