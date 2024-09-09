"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Dr. Anna Schmidt",
    position: "Vorstandsvorsitzende",
    image:
      "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    bio: "Dr. Anna Schmidt ist eine erfahrene Ärztin mit Schwerpunkt auf ganzheitlicher Gesundheit und Wellness. Sie leitet den Verband mit Visionen für innovative medizinische Wellnessprogramme.",
    linkedin: "https://www.linkedin.com/in/dr-anna-schmidt",
    twitter: "https://twitter.com/dr_anna_schmidt",
  },
  {
    name: "Thomas Müller",
    position: "Geschäftsführer",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
    bio: "Thomas Müller bringt umfangreiche Erfahrung im Gesundheitsmanagement mit. Er ist verantwortlich für die strategische Ausrichtung und das Tagesgeschäft des Verbandes.",
    linkedin: "https://www.linkedin.com/in/thomas-mueller",
    twitter: "https://twitter.com/thomas_mueller",
  },
  {
    name: "Dr. Lisa Weber",
    position: "Leiterin Forschung & Entwicklung",
    image:
      "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    bio: "Dr. Lisa Weber leitet die Forschungsabteilung des Verbandes. Ihr Fokus liegt auf der Entwicklung innovativer Wellnessprogramme und der Integration neuester wissenschaftlicher Erkenntnisse.",
    linkedin: "https://www.linkedin.com/in/dr-lisa-weber",
    twitter: "https://twitter.com/dr_lisa_weber",
  },
  {
    name: "Michael Bauer",
    position: "Leiter Mitgliederbetreuung",
    image:
      "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    bio: "Michael Bauer ist für die Betreuung und Unterstützung der Verbandsmitglieder zuständig. Er sorgt für exzellenten Service und fördert den Austausch innerhalb des Netzwerks.",
    linkedin: "https://www.linkedin.com/in/michael-bauer",
    twitter: "https://twitter.com/michael_bauer",
  },
  {
    name: "Sarah Hoffmann",
    position: "Leiterin Öffentlichkeitsarbeit",
    image:
      "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    bio: "Sarah Hoffmann verantwortet die Kommunikation des Verbandes. Sie sorgt für eine starke Präsenz in der Öffentlichkeit und fördert das Bewusstsein für medizinisches Wellness.",
    linkedin: "https://www.linkedin.com/in/sarah-hoffmann",
    twitter: "https://twitter.com/sarah_hoffmann",
  },
  {
    name: "Dr. Markus Klein",
    position: "Medizinischer Berater",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
    bio: "Dr. Markus Klein berät den Verband in allen medizinischen Fragen. Seine Expertise hilft bei der Entwicklung und Umsetzung von qualitativ hochwertigen Wellnessprogrammen.",
    linkedin: "https://www.linkedin.com/in/dr-markus-klein",
    twitter: "https://twitter.com/dr_markus_klein",
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
