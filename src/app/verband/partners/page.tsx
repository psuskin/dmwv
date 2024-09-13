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

const Partners = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("Branche A bis Z");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredPartners = useMemo(() => {
    return partners.filter((partner) => {
      if (selectedCategory === "Branche A bis Z") {
        return (
          (!selectedSubcategory ||
            partner.subcategory === selectedSubcategory) &&
          (!searchTerm ||
            partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            partner.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()))
        );
      } else {
        return (
          (!selectedSubcategory ||
            partner.name
              .toLowerCase()
              .startsWith(selectedSubcategory.toLowerCase())) &&
          (!searchTerm ||
            partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            partner.description
              .toLowerCase()
              .includes(searchTerm.toLowerCase()))
        );
      }
    });
  }, [selectedCategory, selectedSubcategory, searchTerm]);

  const groupedPartners = useMemo(() => {
    if (selectedCategory === "Branche A bis Z") {
      return filteredPartners.reduce((acc, partner) => {
        const key = partner.subcategory || "Uncategorized";
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(partner);
        return acc;
      }, {} as Record<string, Partner[]>);
    } else {
      return filteredPartners.reduce((acc, partner) => {
        const key = partner.name[0].toUpperCase();
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(partner);
        return acc;
      }, {} as Record<string, Partner[]>);
    }
  }, [selectedCategory, filteredPartners]);

  const sortedGroups = useMemo(() => {
    return Object.keys(groupedPartners).sort();
  }, [groupedPartners]);

  const alphabetOptions = useMemo(() => {
    return Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  }, []);

  return (
    <>
      <SubHeader
        title="Our Partners"
        subtitle="Discover the organizations that work with us to make a difference"
        backgroundImage="https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81"
        breadcrumbs={[
          { label: "Verband", href: "#" },
          { label: "Partners", href: "/verband/partners" },
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
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
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
                  selectedCategory === "Branche A bis Z" ? "Subcategory" : "A-Z"
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">
                All{" "}
                {selectedCategory === "Branche A bis Z"
                  ? "Subcategories"
                  : "Letters"}
              </SelectItem>
              {selectedCategory === "Branche A bis Z"
                ? subcategories.map((subcategory) => (
                    <SelectItem key={subcategory} value={subcategory}>
                      {subcategory}
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
            placeholder="Search partners..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-auto"
          />
        </div>

        {sortedGroups.map((group) => (
          <div key={group}>
            <h2 className="text-2xl font-bold mt-8 mb-4">{group}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupedPartners[group].map((partner: Partner) => (
                <Card key={partner.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Image
                        src={partner.imageUrl}
                        alt={partner.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                      <div>
                        <CardTitle className="text-lg">
                          {partner.name}
                        </CardTitle>
                        {partner.date && (
                          <CardDescription>{partner.date}</CardDescription>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-primary-600 mb-2">
                      {partner.subcategory || partner.category}
                    </p>
                    <p className="text-sm line-clamp-3">
                      {partner.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button
                      variant="outline"
                      className="text-primary-600 border-primary-300 hover:bg-primary-50"
                      asChild
                    >
                      <Link href={`/verband/partners/${partner.id}`}>
                        Mehr erfahren
                      </Link>
                    </Button>
                    <Button variant="ghost" asChild>
                      <a
                        href={partner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800"
                      >
                        Visit Website
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
