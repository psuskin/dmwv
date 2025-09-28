import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import type { Locale } from "@/constants/newsData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { unstable_setRequestLocale } from "next-intl/server";
import { fetchNewsById, fetchNews } from "@/lib/fetchNews";
import type { ApiNewsItem } from "@/types/news";

export async function generateMetadata({
  params: { id, locale },
}: {
  params: { id: string; locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("metadata");
  const safeLocale = locale as Locale;
  const item = await fetchNewsById(id);

  if (!item) {
    return { title: "News Not Found" };
  }

  const title =
    item.title?.[safeLocale] || item.title?.[item.originalLang] || "News";
  const rawDesc =
    item.content?.[safeLocale] || item.content?.[item.originalLang] || "";
  const description = rawDesc
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return {
    metadataBase: new URL(
      process.env.NODE_ENV === "production"
        ? "https://dmwv.de"
        : "http://localhost:3000"
    ),
    title: `${title} | ${t("siteName")}`,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: item.coverImage || "/images/placeholder.svg",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    keywords: [
      "Medical Wellness News",
      "Healthcare Updates",
      "Wellness Industry News",
      "DMWV News",
      "Medical News",
      "Healthcare Insights",
      "Wellness Developments",
    ],
  };
}

export async function generateStaticParams() {
  // No pre-generated IDs; render on-demand for dynamic DB content
  return [] as { locale: string; id: string }[];
}

function htmlToText(html: string): string {
  return (html || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(dateString: string, locale: Locale) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString(locale, options);
}

export default async function NewsDetail({
  params: { id, locale },
}: {
  params: { id: string; locale: string };
}) {
  const safeLocale = locale as Locale;
  unstable_setRequestLocale(safeLocale);
  const t = await getTranslations("NewsDetails");

  const item = await fetchNewsById(id);
  if (!item) {
    notFound();
  }

  const title =
    item.title?.[safeLocale] || item.title?.[item.originalLang] || "";
  const content =
    item.content?.[safeLocale] || item.content?.[item.originalLang] || "";
  const contentText = htmlToText(content);
  const readingTime = Math.ceil(contentText.split(/\s+/).length / 200);

  const breadcrumbItems = [
    { label: t("backToOverview"), href: `/${safeLocale}/news` },
    { label: title, href: `/${safeLocale}/news/${id}` },
  ];

  // Fetch related news (exclude current)
  let relatedNews: ApiNewsItem[] = [];
  try {
    const all = await fetchNews(1);
    relatedNews = all.filter((n) => n._id !== item._id).slice(0, 3);
  } catch (_) {}

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
          <main className="lg:w-2/3">
            <article className="bg-white shadow-sm rounded-lg overflow-hidden">
              <Image
                src={item.coverImage || "/images/placeholder.svg"}
                alt={title}
                width={1920}
                height={1080}
                className="w-full h-auto"
                quality={100}
              />
              <div className="p-6">
                <h1 className="text-3xl font-bold text-primary-800 mb-4">
                  {title}
                </h1>
                <div className="flex flex-wrap items-center text-sm text-primary-600 mb-6 gap-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={item.createdAt}>
                      {formatDate(item.createdAt, safeLocale)}
                    </time>
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {t("readingTime", { time: readingTime })}
                  </span>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                    News
                  </span>
                </div>
                <div
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
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
                {relatedNews.map((n) => (
                  <div
                    key={n._id}
                    className="group flex items-start border border-gray-200 p-3 rounded-lg transition-all duration-300 hover:shadow-md hover:border-primary-300"
                  >
                    <div className="flex-shrink-0 w-20 h-20 relative rounded-md overflow-hidden">
                      <Image
                        src={n.coverImage || "/images/placeholder.svg"}
                        alt={
                          n.title?.[safeLocale] ||
                          n.title?.[n.originalLang] ||
                          ""
                        }
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="ml-4 flex flex-col justify-between flex-grow">
                      <h3 className="text-sm font-medium text-primary-800">
                        <Link
                          href={`/${safeLocale}/news/${n._id}`}
                          className="relative inline-block overflow-hidden group-hover:text-primary-600 transition-colors duration-300"
                        >
                          <span className="relative z-10 line-clamp-2">
                            {n.title?.[safeLocale] ||
                              n.title?.[n.originalLang] ||
                              ""}
                          </span>
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                      </h3>
                      <p className="text-xs text-primary-500 mt-1">
                        {formatDate(n.createdAt, safeLocale)}
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
