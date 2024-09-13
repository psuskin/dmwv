import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, ArrowLeft } from "lucide-react";
import { partners } from "@/constants/partnersData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function PartnerDetails({ params }: { params: { id: string } }) {
  const partner = partners.find((p) => p.id === params.id);

  if (!partner) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <Link
        href="/verband/partners"
        className="text-primary-600 hover:text-primary-700 mb-8 inline-flex items-center transition-colors duration-200"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Zurück
      </Link>

      <Card className="overflow-hidden border-gray-100">
        <div className="md:flex">
          <div className="md:w-1/3 p-8 flex items-center justify-center bg-gray-50">
            <Image
              src={partner.imageUrl}
              alt={partner.name}
              width={200}
              height={200}
              objectFit="contain"
              className="max-w-full max-h-48"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <CardHeader className="p-0">
              <div className="flex items-center justify-between mb-4">
                <Badge
                  variant="secondary"
                  className="text-sm bg-primary-100 text-primary-700"
                >
                  {partner.subcategory || partner.category}
                </Badge>
                {partner.date && (
                  <div className="text-gray-600 flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {partner.date}
                  </div>
                )}
              </div>
              <CardTitle className="text-3xl font-bold mb-2 text-gray-800">
                {partner.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-lg leading-relaxed mt-4 text-gray-600">
                {partner.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-0 mt-6">
              <Button
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white"
                asChild
              >
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  Visit Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
