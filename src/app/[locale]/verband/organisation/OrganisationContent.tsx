"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LinkedinIcon, TwitterIcon, ChevronDownIcon } from "lucide-react";
import { teamMembers } from "@/constants/teamsData";
import SubHeader from "@/components/SubHeader";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const OrganisationContent = () => {
  const t = useTranslations("organisation");
  const locale = useLocale();
  const [activeTeam, setActiveTeam] = useState("all");
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const teamCategories = [
    "all",
    t("categories.board"),
    t("categories.medicine"),
    t("categories.development"),
    t("categories.quality"),
    t("categories.training"),
  ];

  const filteredMembers =
    activeTeam === "all"
      ? teamMembers
      : teamMembers.filter(
          (member) =>
            member[`team${locale === "en" ? "EN" : "DE"}`] === activeTeam
        );

  const handleCategorySelect = (category: string) => {
    setActiveTeam(category);
    setIsSheetOpen(false);
  };

  return (
    <>
      <SubHeader
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: t("home"), href: "/" },
          { label: t("association"), href: "/verband/organisation" },
          { label: t("organisation"), href: "/verband/organisation" },
        ]}
      />
      <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {t("teamCategories")}
            </h2>
            <div className="md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    {activeTeam === "all" ? t("allTeams") : activeTeam}
                    <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="bottom" className="h-[50vh]">
                  <SheetHeader>
                    <SheetTitle>{t("selectCategory")}</SheetTitle>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    {teamCategories.map((category, index) => (
                      <Button
                        key={index}
                        variant={activeTeam === category ? "default" : "ghost"}
                        onClick={() => handleCategorySelect(category)}
                        className="w-full justify-start"
                      >
                        {category === "all" ? t("allTeams") : category}
                      </Button>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            <ScrollArea className="hidden md:block w-full whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {teamCategories.map((category, index) => (
                  <Button
                    key={index}
                    variant={activeTeam === category ? "default" : "ghost"}
                    onClick={() => setActiveTeam(category)}
                    className="flex-shrink-0"
                  >
                    {category === "all" ? t("allTeams") : category}
                  </Button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredMember(index)}
                onHoverEnd={() => setHoveredMember(null)}
              >
                <div className="relative h-96">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded">
                    {member[`team${locale === "en" ? "EN" : "DE"}`]}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm opacity-75">
                      {member[`role${locale === "en" ? "EN" : "DE"}`]}
                    </p>
                  </div>
                  <AnimatePresence>
                    {hoveredMember === index && (
                      <motion.div
                        className="absolute top-0 left-0 w-full h-full bg-primary p-6 flex flex-col justify-between text-primary-foreground"
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ duration: 0.3 }}
                      >
                        <div>
                          <h3 className="text-2xl font-semibold mb-2">
                            {member.name}
                          </h3>
                          <p className="text-sm mb-4">
                            {member[`role${locale === "en" ? "EN" : "DE"}`]}
                          </p>
                          <p className="text-sm">
                            {member[`team${locale === "en" ? "EN" : "DE"}`]}
                          </p>
                        </div>
                        <div className="flex justify-start space-x-4">
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                          >
                            <LinkedinIcon className="w-6 h-6" />
                          </a>
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                          >
                            <TwitterIcon className="w-6 h-6" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganisationContent;
