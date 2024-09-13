"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";

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

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-12">
          Unser Team
        </h1>
        <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
          Lernen Sie die engagierten Experten kennen, die den Deutscher Medical
          Wellness Verband e.V. leiten und unsere Mission vorantreiben.
        </p>
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
                  alt={member.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm opacity-75">{member.position}</p>
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
                        <h3 className="text-2xl font-semibold mb-2">
                          {member.name}
                        </h3>
                        <p className="text-sm mb-4">{member.position}</p>
                        <p className="text-sm">{member.bio}</p>
                      </div>
                      <div className="flex justify-start space-x-4">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-200 transition-colors"
                        >
                          <LinkedinIcon className="w-6 h-6" />
                        </a>
                        <a
                          href={member.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-200 transition-colors"
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
  );
}
