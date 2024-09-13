"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import { teamMembers } from "@/constants/teamsData";
import SubHeader from "@/components/SubHeader";

const Organisation = () => {
  const [activeTeam, setActiveTeam] = useState("all");
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamCategories = [
    "all",
    "Vorstand DMWV",
    "Medizin und Lebensführung",
    "Projektentwicklung, Bauen und Technik",
    "Qualitätsmanagement",
    "Personal und Ausbildung",
  ];

  const filteredMembers =
    activeTeam === "all"
      ? teamMembers
      : teamMembers.filter((member) => member.team === activeTeam);

  return (
    <>
      <SubHeader
        title="Unser Team"
        subtitle="Lernen Sie die engagierten Experten kennen, die den Deutscher Medical Wellness Verband e.V. leiten und unsere Mission vorantreiben."
        backgroundImage="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Verband", href: "/verband/organisation" },
          { label: "Organisation", href: "/verband/organisation" },
        ]}
      />
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {teamCategories.map((category, index) => (
              <Button
                key={index}
                variant={activeTeam === category ? "default" : "outline"}
                onClick={() => setActiveTeam(category)}
                className="text-sm md:text-base rounded-full"
              >
                {category === "all" ? "Alle Teams" : category}
              </Button>
            ))}
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
                  <div className="absolute top-0 right-0 m-2 px-2 py-1 bg-primary-500 text-white text-xs font-semibold rounded">
                    {member.team}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-semibold mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm opacity-75">{member.role}</p>
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
                          <p className="text-sm mb-4">{member.role}</p>
                          <p className="text-sm">{member.team}</p>
                        </div>
                        <div className="flex justify-start space-x-4">
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-200 transition-colors"
                          >
                            <LinkedinIcon className="w-6 h-6" />
                          </a>
                          <a
                            href="#"
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
    </>
  );
};

export default Organisation;
