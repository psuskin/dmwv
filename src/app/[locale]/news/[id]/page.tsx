import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { newsData, NewsItem, Locale } from "@/constants/newsData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export async function generateMetadata({
  params: { id, locale },
}: {
  params: { id: string; locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("metadata");
  const news = newsData.find((item) => item.id.toString() === id);
  const safeLocale = locale as Locale;

  if (!news) {
    return {
      title: "News Not Found",
    };
  }

  return {
    metadataBase: new URL(
      process.env.NODE_ENV === "production"
        ? "https://dmwv.de"
        : "http://localhost:3000"
    ),
    title: `${news.title[safeLocale]} | ${t("siteName")}`,
    description: news.excerpt[safeLocale],
    openGraph: {
      title: news.title[safeLocale],
      description: news.excerpt[safeLocale],
      images: [
        {
          url: news.image,
          width: 1200,
          height: 630,
          alt: news.title[safeLocale],
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: news.title[safeLocale],
      description: news.excerpt[safeLocale],
    },
    keywords: [
      "Medical Wellness News",
      "Healthcare Updates",
      "Wellness Industry News",
      news.category[safeLocale],
      "DMWV News",
      "Medical News",
      "Healthcare Insights",
      "Wellness Developments",
    ],
  };
}

export function generateStaticParams() {
  return newsData.flatMap((news) => [
    { locale: "de", id: news.id.toString() },
    { locale: "en", id: news.id.toString() },
    { locale: "es", id: news.id.toString() },
    { locale: "fr", id: news.id.toString() },
    { locale: "it", id: news.id.toString() },
    { locale: "ru", id: news.id.toString() },
    { locale: "ar", id: news.id.toString() },
    { locale: "tr", id: news.id.toString() },
  ]);
}

function splitIntoParagraphs(text: string): string[] {
  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g) || [];
  const paragraphs = [];
  for (let i = 0; i < sentences.length; i += 3) {
    paragraphs.push(
      sentences
        .slice(i, i + 3)
        .join(" ")
        .trim()
    );
  }
  return paragraphs;
}

function formatDate(dateString: string, locale: Locale) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(locale, options);
}

export default function NewsDetail({
  params: { id, locale },
}: {
  params: { id: string; locale: string };
}) {
  const safeLocale = locale as Locale;
  unstable_setRequestLocale(safeLocale);
  const t = useTranslations("NewsDetails");

  const news = newsData.find((item) => item.id.toString() === id);

  if (!news) {
    notFound();
  }

  const paragraphs = splitIntoParagraphs(news.excerpt[safeLocale]);
  const readingTime = Math.ceil(
    news.excerpt[safeLocale].split(/\s+/).length / 200
  );

  const breadcrumbItems = [
    { label: t("backToOverview"), href: `/${safeLocale}/news` },
    { label: news.title[safeLocale], href: `/${safeLocale}/news/${news.id}` },
  ];

  const relatedNews = newsData
    .filter((item) => item.id !== news.id)
    .slice(0, 3);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <main className="lg:w-2/3">
            <article className="bg-white shadow-sm rounded-lg overflow-hidden">
              <Image
                src={news.image}
                alt={news.title[safeLocale]}
                width={1920}
                height={1080}
                className="w-full h-auto"
                quality={100}
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold text-primary-800 mb-4">
                  {news.title[safeLocale]}
                </h1>
                <div className="flex flex-wrap items-center text-sm text-primary-600 mb-6 gap-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={news.date}>
                      {formatDate(news.date, safeLocale)}
                    </time>
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {t("readingTime", { time: readingTime })}
                  </span>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                    {news.category[safeLocale]}
                  </span>
                </div>
                <div className="prose prose-lg max-w-none">
                  {paragraphs.map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
            <div className="mt-8">
              <Link
                href={`/${safeLocale}/news`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t("backToOverview")}
              </Link>
            </div>
          </main>
          <aside className="lg:w-1/3">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary-800 mb-4">
                {t("relatedNews")}
              </h2>
              <div className="space-y-4">
                {relatedNews.map((item: NewsItem) => (
                  <div
                    key={item.id}
                    className="group flex items-start border border-gray-200 p-3 rounded-lg transition-all duration-300 hover:shadow-md hover:border-primary-300"
                  >
                    <div className="flex-shrink-0 w-20 h-20 relative rounded-md overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title[safeLocale]}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="ml-4 flex flex-col justify-between flex-grow">
                      <h3 className="text-sm font-medium text-primary-800">
                        <Link
                          href={`/${safeLocale}/news/${item.id}`}
                          className="relative inline-block overflow-hidden group-hover:text-primary-600 transition-colors duration-300"
                        >
                          <span className="relative z-10 line-clamp-2">
                            {item.title[safeLocale]}
                          </span>
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                      </h3>
                      <p className="text-xs text-primary-500 mt-1">
                        {formatDate(item.date, safeLocale)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
