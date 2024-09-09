"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, MapPin, Search } from "lucide-react";

// Expanded mock data for all wellness hotels
const allHotels = [
  {
    id: 1,
    name: "Wellness Resort Sonnenberg",
    location: "Baden-Baden",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.8,
    features: ["Spa", "Pool", "Yoga"],
  },
  {
    id: 2,
    name: "Spa Hotel Schwarzwald",
    location: "Freiburg",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.9,
    features: ["Massage", "Sauna", "Fitness"],
  },
  {
    id: 3,
    name: "Gesundheitszentrum Bodensee",
    location: "Konstanz",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.7,
    features: ["Therapie", "Ernährung", "Meditation"],
  },
  {
    id: 4,
    name: "Vitalhotel Alpenblick",
    location: "Garmisch-Partenkirchen",
    image:
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    rating: 4.9,
    features: ["Bergblick", "Wandern", "Wellness"],
  },
  // Add more hotels as needed
];

const AllPartnersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredHotels = allHotels.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-primary-800">Alle Wellness-Partner</h1>

      <div className="mb-12 flex gap-4">
        <input
          type="text"
          placeholder="Suche nach Hotels oder Orten"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow max-w-md px-4 py-2 border border-primary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <button className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 flex items-center">
          <Search className="mr-2 h-4 w-4" /> Suchen
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64">
              <Image
                src={hotel.image}
                alt={hotel.name}
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center">
                <Star className="text-yellow-400 mr-1 h-4 w-4" />
                <span className="font-semibold text-primary-800">{hotel.rating.toFixed(1)}</span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-primary-700 mb-2">{hotel.name}</h2>
              <p className="flex items-center text-primary-500 mb-4">
                <MapPin className="mr-1 h-4 w-4" /> {hotel.location}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {hotel.features.map((feature, index) => (
                  <span key={index} className="bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg transition-colors duration-300">
                Mehr erfahren
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPartnersPage;
