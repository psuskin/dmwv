"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { newsData, NewsItem, Locale } from "@/constants/newsData";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const NewsSection: React.FC = () => {
  const t = useTranslations("NewsSection");
  const pathname = usePathname();
  const locale = pathname.split('/')[1] as Locale;

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(locale, options);
  };

  return (
    <section
      className="bg-gradient-to-b from-primary-50 to-white py-20 px-4 sm:px-6 lg:px-8"
      aria-labelledby="news-section-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-primary-600 text-base sm:text-lg font-semibold mb-3 tracking-wide uppercase">
            {t("stayInformed")}
          </h2>
          <h3
            id="news-section-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 mb-6 leading-tight"
          >
            {t("latestNews")}
          </h3>
          <div
            className="w-24 h-1 bg-primary-500 mx-auto mb-6 sm:mb-8 rounded-full"
            aria-hidden="true"
          ></div>
          <p className="max-w-4xl mx-auto text-xl text-black">
            {t("newsDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Featured Article */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <Image
              src={newsData[0].image}
              alt=""
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <Link
              href={`/${locale}/news/${newsData[0].id}`}
              className="block"
              aria-labelledby="featured-article-title"
            >
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block bg-primary-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                  {newsData[0].category[locale]}
                </span>
                <h4
                  id="featured-article-title"
                  className="text-3xl font-bold mb-2"
                >
                  {newsData[0].title[locale]}
                </h4>
                <p className="mb-3 line-clamp-2">
                  {newsData[0].excerpt[locale]}
                </p>
                <p className="inline-flex items-center text-white hover:underline">
                  {t("readMore")}{" "}
                  <ArrowRight
                    className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    aria-hidden="true"
                  />
                </p>
              </div>
            </Link>
          </div>

          {/* Secondary Articles */}
          {newsData.slice(1, 4).map((item: NewsItem, index: number) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl border overflow-hidden transition-shadow hover:shadow-lg group${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-0 left-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
                  {item.category[locale]}
                </div>
              </div>
              <Link
                href={`/${locale}/news/${item.id}`}
                className="block"
                aria-labelledby={`article-title-${item.id}`}
              >
                <div className="p-4">
                  <h4
                    id={`article-title-${item.id}`}
                    className="font-semibold text-primary-800 mb-2 line-clamp-2 text-2xl"
                  >
                    {item.title[locale]}
                  </h4>
                  <p className="text-primary-600 text-base mb-3 line-clamp-2">
                    {item.excerpt[locale]}
                  </p>
                  <div className="flex items-center justify-between text-base">
                    <div className="flex items-center text-primary-500">
                      <Calendar className="w-6 h-6 mr-1" aria-hidden="true" />
                      <time dateTime={item.date}>{formatDate(item.date)}</time>
                    </div>
                    <p className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                      {t("read")}
                      <ArrowRight
                        className="ml-2 h-6 w-6 transform group-hover:translate-x-1 transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-end">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition duration-300 group"
            aria-label={t("discoverMoreNews")}
          >
            {t("discoverMoreNews")}
            <ArrowRight
              className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
