import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { newsData, NewsItem } from "@/constants/newsData";

const NewsSection: React.FC = () => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("de-DE", options);
  };

  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary-800 mb-4">
            Aktuelle Neuigkeiten
          </h2>
          <p className="text-lg text-primary-600 max-w-4xl mx-auto">
            Bleiben Sie informiert über die neuesten Entwicklungen und Trends in
            der Welt des Wellness und der Gesundheit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Featured Article */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <Image
              src={newsData[0].image}
              alt={newsData[0].title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <Link href={`/news/${newsData[0].id}`} className="block">
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="inline-block bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {newsData[0].category}
                </span>
                <h3 className="text-2xl font-bold mb-2">{newsData[0].title}</h3>
                <p className="mb-3 line-clamp-2">{newsData[0].excerpt}</p>
                <p className="inline-flex items-center text-white hover:underline">
                  Weiterlesen{" "}
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </p>
              </div>
            </Link>
          </div>

          {/* Secondary Articles */}
          {newsData.slice(1, 4).map((item: NewsItem, index: number) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl border overflow-hidden transition-shadow hover:shadow-lg group ${
                index === 0 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
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
                <div className="p-4">
                  <h3 className="font-semibold text-primary-800 mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-primary-600 text-sm mb-3 line-clamp-2">
                    {item.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-primary-500">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(item.date)}
                    </div>
                    <p className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                      Lesen
                      <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-end">
          <Link
            href="/news"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition duration-300 group"
          >
            Mehr Neuigkeiten entdecken
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
