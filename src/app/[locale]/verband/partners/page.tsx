"use client";

import React, { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import {
  categories,
  Partner,
  partners,
  subcategories,
} from "@/constants/partnersData";
import Link from "next/link";
import SubHeader from "@/components/SubHeader";
import { useTranslations } from "next-intl";

const Partners = () => {
  const t = useTranslations("partners");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    t("categories.Branche A bis Z")
  );
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredPartners = useMemo(() => {
    return partners.filter((partner) => {
      const matchesSubcategory =
        !selectedSubcategory ||
        (selectedCategory === t("categories.Branche A bis Z") &&
          partner.subcategory === selectedSubcategory) ||
        (selectedCategory === t("categories.Unternehmen von A bis Z") &&
          partner.name.startsWith(selectedSubcategory));

      const matchesSearch =
        !searchTerm ||
        partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t(`partnerDescriptions.${partner.id}`)
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return matchesSubcategory && matchesSearch;
    });
  }, [selectedCategory, selectedSubcategory, searchTerm, t]);

  const groupedPartners = useMemo(() => {
    return filteredPartners.reduce((acc, partner) => {
      let key;
      if (selectedCategory === t("categories.Branche A bis Z")) {
        key = partner.subcategory || t("uncategorized");
      } else {
        key = partner.name[0].toUpperCase();
      }
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(partner);
      return acc;
    }, {} as Record<string, Partner[]>);
  }, [selectedCategory, filteredPartners, t]);

  const sortedGroups = useMemo(() => {
    return Object.keys(groupedPartners).sort((a, b) => {
      if (selectedCategory === t("categories.Branche A bis Z")) {
        return subcategories.indexOf(a) - subcategories.indexOf(b);
      }
      return a.localeCompare(b);
    });
  }, [groupedPartners, selectedCategory, t]);

  const alphabetOptions = useMemo(() => {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  }, []);

  return (
    <>
      <SubHeader
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81"
        breadcrumbs={[
          { label: t("breadcrumbs.association"), href: "/verband/partners" },
          { label: t("breadcrumbs.partners"), href: "/verband/partners" },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <Select
            onValueChange={(value) => {
              setSelectedCategory(value);
              setSelectedSubcategory(null);
            }}
          >
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder={t("category")} />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={t(`categories.${category}`)}>
                  {t(`categories.${category}`)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select
            onValueChange={(value) =>
              setSelectedSubcategory(value === "all" ? null : value)
            }
          >
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue
                placeholder={
                  selectedCategory === t("categories.Branche A bis Z")
                    ? t("subcategory")
                    : t("az")
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                {t("all")}{" "}
                {selectedCategory === t("categories.Branche A bis Z")
                  ? t("subcategoriesTitle")
                  : t("letters")}
              </SelectItem>
              {selectedCategory === t("categories.Branche A bis Z")
                ? subcategories.map((subcategory) => (
                    <SelectItem key={subcategory} value={subcategory}>
                      {t(`subcategories.${subcategory}`)}
                    </SelectItem>
                  ))
                : alphabetOptions.map((letter) => (
                    <SelectItem key={letter} value={letter}>
                      {letter}
                    </SelectItem>
                  ))}
            </SelectContent>
          </Select>

          <Input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-auto"
          />
        </div>

        {sortedGroups.map((group) => (
          <div key={group}>
            <h2 className="text-2xl font-bold mt-8 mb-4">
              {selectedCategory === t("categories.Branche A bis Z")
                ? t(`groups.${group}`)
                : group}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedPartners[group].map((partner: Partner) => (
                <Card key={partner.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={partner.imageUrl}
                        alt={t(`partnerNames.${partner.id}`)}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <div>
                        <CardTitle className="text-lg">
                          {t(`partnerNames.${partner.id}`)}
                        </CardTitle>
                        {partner.date && (
                          <CardDescription>
                            {t(`partnerDates.${partner.id}`)}
                          </CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-primary-600 mb-2">
                      {t(`subcategories.${partner.subcategory}`) ||
                        t(`categories.${partner.category}`)}
                    </p>
                    <p className="text-sm line-clamp-3">
                      {t(`partnerDescriptions.${partner.id}`)}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      className="text-primary-600 border-primary-300 hover:bg-primary-50"
                      asChild
                    >
                      <Link href={`/verband/partners/${partner.id}`}>
                        {t("learnMore")}
                      </Link>
                    </Button>
                    <Button variant="ghost" asChild>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        {t("visitWebsite")}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Partners;
