"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Search } from "lucide-react";
import SubHeader from "@/components/SubHeader";
import { useTranslations, useLocale } from "next-intl";
import type { ApiNewsItem } from "@/types/news";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://dmwv-news.susko.ai";

type Props = {
  items: ApiNewsItem[];
};

function pickLocalized(obj: Record<string, string>, locale: string, fallbackLang: string) {
  return obj?.[locale] || obj?.[fallbackLang] || obj?.[Object.keys(obj || {})[0]] || "";
}

function stripHtml(html: string, max = 150) {
  const text = (html || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  return text.length > max ? text.slice(0, max) + "…" : text;
}

export default function NewsListClient({ items }: Props) {
  const locale = useLocale();
  const t = useTranslations("NewsPage");
  const [searchTerm, setSearchTerm] = useState("");

  const normalized = useMemo(() => {
    return (items || []).map((item) => {
      const title = pickLocalized(item.title, locale, item.originalLang);
      const content = pickLocalized(item.content, locale, item.originalLang);
      const image = item.coverImage
        ? item.coverImage.startsWith("http")
          ? item.coverImage
          : `${API_BASE}${item.coverImage}`
        : "/images/placeholder.svg";
      return {
        id: item._id,
        title,
        content,
        date: item.createdAt,
        image,
      };
    });
  }, [items, locale]);

  const filtered = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q) return normalized;
    return normalized.filter((n) =>
      [n.title, n.content].some((v) => v?.toLowerCase().includes(q))
    );
  }, [normalized, searchTerm]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <div dir={locale === "ar" ? "rtl" : "ltr"}>
      <SubHeader
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2070&q=80"
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
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-primary-400" size={20} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((n) => (
              <div
                key={n.id}
                className="bg-white rounded-xl border border-primary-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image src={n.image} alt={n.title} fill className="object-cover" />
                </div>
                <Link href={`/${locale}/news/${n.id}`} className="block">
                  <div className="p-6 group">
                    <h2 className="text-xl font-semibold text-primary-800 mb-2 line-clamp-2">{n.title}</h2>
                    <p className="text-primary-600 mb-4 line-clamp-3">{stripHtml(n.content)}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary-500 text-sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(n.date)}
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

          {filtered.length === 0 && (
            <div className="text-center text-primary-600 mt-8">{t("noNewsFound")}</div>
          )}
        </div>
      </div>
    </div>
  );
}
