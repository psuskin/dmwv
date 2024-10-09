import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { useLocale } from "next-intl";

interface SubHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  breadcrumbs: { label: string; href: string }[];
}

export default function SubHeader({
  title,
  subtitle,
  backgroundImage,
  breadcrumbs,
}: SubHeaderProps) {
  const locale = useLocale();
  return (
    <div className="relative h-[40vh] min-h-[300px] w-full flex flex-col justify-end overflow-hidden">
      <Image
        src={backgroundImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
      <div className="relative z-20 text-white p-8 max-w-7xl mx-auto w-full">
        <nav className="mb-4" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-xl">
            <li>
              <Link
                href="/"
                className="hover:text-primary-100 transition-colors"
              >
                <Home className="w-6 h-6" />
              </Link>
            </li>
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={index}>
                <ChevronRight className="w-4 h-4 text-gray-100" />
                <li>
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white text-lg font-semibold">
                      {crumb.label}
                    </span>
                  ) : (
                    <Link
                      href={`/${locale}${crumb.href}`}
                      className="hover:text-primary-600 transition-colors text-lg"
                    >
                      {crumb.label}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
