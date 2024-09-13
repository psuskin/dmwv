"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Search, ChevronDown } from "lucide-react";
import { newsData, NewsItem } from "@/constants/newsData";
import SubHeader from "@/components/SubHeader";

const NewsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };

  const filteredNews = newsData.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = Array.from(new Set(newsData.map((item) => item.category)));

  return (
    <div>
      <SubHeader
        title="Neuigkeiten und Aktuelles"
        subtitle="Bleiben Sie informiert über die neuesten Entwicklungen in der Welt des Medical Wellness"
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Neuigkeiten", href: "/news" },
        ]}
      />
      <div className="bg-gradient-to-br from-primary-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Suchen Sie nach Neuigkeiten..."
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
                {selectedCategory || "Alle Kategorien"}
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
                    Alle Kategorien
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
            {filteredNews.map((item: NewsItem) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-primary-100 overflow-hidden transition-all duration-300 hover:shadow-md transform hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute top-0 left-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
                    {item.category}
                  </div>
                </div>
                <Link href={`/news/${item.id}`} className="block">
                  <div className="p-6 group">
                    <h2 className="text-xl font-semibold text-primary-800 mb-2 line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-primary-600 mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary-500 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(item.date)}
                      </div>
                      <p className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                        Weiterlesen
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
              Keine Neuigkeiten gefunden. Bitte versuchen Sie eine andere Suche
              oder Kategorie.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
