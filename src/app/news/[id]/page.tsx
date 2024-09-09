import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { newsData, NewsItem } from "@/constants/newsData";
import Breadcrumbs from "@/components/Breadcrumbs";

export async function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id.toString(),
  }));
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

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("de-DE", options);
}

export default function NewsDetail({ params }: { params: { id: string } }) {
  const news = newsData.find((item) => item.id.toString() === params.id);

  if (!news) {
    notFound();
  }

  const paragraphs = splitIntoParagraphs(news.excerpt);
  const readingTime = Math.ceil(news.excerpt.split(" ").length / 200);

  const breadcrumbItems = [
    { label: "News", href: "/news" },
    { label: news.title, href: `/news/${news.id}` },
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
              <div className="relative h-64 sm:h-80 md:h-96">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <h1 className="text-3xl font-bold text-primary-800 mb-4">
                  {news.title}
                </h1>
                <div className="flex flex-wrap items-center text-sm text-primary-600 mb-6 gap-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <time dateTime={news.date}>{formatDate(news.date)}</time>
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {readingTime} min read
                  </span>
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                    {news.category}
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
                href="/news"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Zurück zur Übersicht
              </Link>
            </div>
          </main>
          <aside className="lg:w-1/3">
            <div className="bg-white shadow-sm rounded-lg p-6">
              <h2 className="text-xl font-semibold text-primary-800 mb-4">
                Aktuelle News
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
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="ml-4 flex flex-col justify-between flex-grow">
                      <h3 className="text-sm font-medium text-primary-800">
                        <Link
                          href={`/news/${item.id}`}
                          className="relative inline-block overflow-hidden group-hover:text-primary-600 transition-colors duration-300"
                        >
                          <span className="relative z-10 line-clamp-2">{item.title}</span>
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </Link>
                      </h3>
                      <p className="text-xs text-primary-500 mt-1">
                        {formatDate(item.date)}
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
