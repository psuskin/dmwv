"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const teamMembers = [
  {
    name: "Lutz Lungwitz",
    position: "1. Vorsitzender",
    image: "/images/LutzLungwitz.jpeg",
    bio: "Lutz Lungwitz leitet als 1. Vorsitzender den Deutschen Medical Wellness Verband e.V. aus Berlin.",
    linkedin: "https://www.linkedin.com/in/lutz-lungwitz",
    twitter: "https://twitter.com/lutz_lungwitz",
  },
  {
    name: "Axel Donald Sauer",
    position: "1. stellv. Vorsitzender",
    image: "/images/AxelDonaldSauer.jpeg",
    bio: "Axel Donald Sauer unterstützt als 1. stellvertretender Vorsitzender die Leitung des Verbandes.",
    linkedin: "https://www.linkedin.com/in/axel-donald-sauer",
    twitter: "https://twitter.com/axel_d_sauer",
  },
  {
    name: "Prof. Dr. Joachim Willms",
    position: "2. stellv. Vorsitzender",
    image: "/images/ProfDrJoachimWillms.jpeg",
    bio: "Prof. Dr. Joachim Willms ist Hochschulprofessor für Tourismusentwicklung und 2. stellvertretender Vorsitzender des DMWV.",
    linkedin: "https://www.linkedin.com/in/prof-dr-joachim-willms",
    twitter: "https://twitter.com/prof_willms",
  },
  {
    name: "Karsten Urspruch",
    position: "Vorstandsmitglied",
    image: "/images/KarstenUrspruch.jpeg",
    bio: "Karsten Urspruch bringt als Vorstandsmitglied seine Expertise in den Deutschen Medical Wellness Verband ein.",
    linkedin: "https://www.linkedin.com/in/karsten-urspruch",
    twitter: "https://twitter.com/k_urspruch",
  },
  {
    name: "Rigobert Walzer",
    position: "Schatzmeister",
    image: "/images/RigobertWalzer.jpeg",
    bio: "Rigobert Walzer ist geschäftsführender Gesellschafter der W+ST Treuhand GmbH Steuerberatungsgesellschaft und Schatzmeister des DMWV.",
    linkedin: "https://www.linkedin.com/in/rigobert-walzer",
    twitter: "https://twitter.com/r_walzer",
  },
  {
    name: "Michael Häckel",
    position: "Vorstandsmitglied (assoziiert)",
    image: "/images/MichaelHäckel.jpeg",
    bio: "Konsul a.h. Michael Häckel von der DMZ‑R&E Häckel GmbH ist assoziiertes Vorstandsmitglied des Deutschen Medical Wellness Verbandes.",
    linkedin: "https://www.linkedin.com/in/michael-haeckel",
    twitter: "https://twitter.com/michael_haeckel",
  },
];

export default function MeetOurTeam() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const t = useTranslations("Team");

  return (
    <div
      className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="team-section-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-primary-600 text-lg sm:text-xl lg:text-2xl font-semibold mb-3 tracking-wide uppercase">
            {t("ourExperts")}
          </h2>
          <h3
            id="team-section-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-6 leading-tight"
          >
            {t("teamTitle")}
          </h3>
          <div
            className="w-24 h-1 bg-primary-500 mx-auto mb-6 sm:mb-8 rounded-full"
            aria-hidden="true"
          ></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-600 max-w-3xl mx-auto">
            {t("teamDescription")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
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
                  alt={t("memberImageAlt", { name: member.name })}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                  aria-hidden="true"
                ></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h4 className="text-2xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-lg opacity-75">
                    {t(`members.${index}.position`)}
                  </p>
                </div>
                <AnimatePresence>
                  {hoveredMember === index && (
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-primary-500 p-6 flex flex-col justify-between text-white"
                      initial={{ opacity: 0, y: "100%" }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: "100%" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <h4 className="text-2xl font-semibold mb-2">
                          {member.name}
                        </h4>
                        <p className="text-lg mb-4">
                          {t(`members.${index}.position`)}
                        </p>
                        <p className="text-base">{t(`members.${index}.bio`)}</p>
                      </div>
                      <div className="flex justify-start space-x-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-200 transition-colors"
                          aria-label={t("linkedinAria", { name: member.name })}
                        >
                          <LinkedinIcon className="w-8 h-8" />
                        </a>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-200 transition-colors"
                          aria-label={t("twitterAria", { name: member.name })}
                        >
                          <TwitterIcon className="w-8 h-8" />
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
  );
}
