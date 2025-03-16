"use client";

import PageTransition, { AnimatedSection } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Camera, Filter } from "lucide-react";
import { useState } from "react";

// This would typically come from your CMS or database
const photos = [
  {
    title: "Mountain Sunrise",
    description: "A breathtaking sunrise captured from the peak of Mount Everest Base Camp.",
    image: "/gallery/mountain-sunrise.jpg",
    category: "Nature",
    location: "Nepal",
    date: "October 2023"
  },
  {
    title: "City Lights",
    description: "The vibrant nightlife of Tokyo captured in a single frame.",
    image: "/gallery/city-lights.jpg",
    category: "Urban",
    location: "Tokyo, Japan",
    date: "July 2023"
  },
  {
    title: "Street Life",
    description: "A candid moment of daily life in the streets of Hanoi.",
    image: "/gallery/street-life.jpg",
    category: "Street",
    location: "Hanoi, Vietnam",
    date: "May 2023"
  },
  {
    title: "Ancient Architecture",
    description: "The intricate details of a centuries-old temple in Kyoto.",
    image: "/gallery/ancient-architecture.jpg",
    category: "Architecture",
    location: "Kyoto, Japan",
    date: "July 2023"
  },
  {
    title: "Wildlife",
    description: "A rare sighting of a snow leopard in its natural habitat.",
    image: "/gallery/wildlife.jpg",
    category: "Nature",
    location: "Himalayas",
    date: "September 2023"
  },
  {
    title: "Cultural Festival",
    description: "Traditional dancers performing at a local festival.",
    image: "/gallery/cultural-festival.jpg",
    category: "Culture",
    location: "Bali, Indonesia",
    date: "August 2023"
  }
];

const categories = [
  "All",
  "Nature",
  "Urban",
  "Street",
  "Architecture",
  "Culture"
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPhotos = selectedCategory === "All"
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 dark:from-purple-400 dark:via-pink-400 dark:to-red-400 bg-clip-text text-transparent mb-6">
            Photography Gallery
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of moments captured through my lens, showcasing the beauty of places, people, and cultures.
          </p>
        </AnimatedSection>

        {/* Category Filter */}
        <AnimatedSection className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white dark:bg-blue-500"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Photo Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPhotos.map((photo, index) => (
            <AnimatedSection key={photo.title} delay={index * 0.2}>
              <motion.article
                whileHover={{ y: -5 }}
                className="group relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {photo.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {photo.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <Camera className="w-4 h-4" />
                        {photo.location}
                      </span>
                      <span>{photo.date}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </PageTransition>
  );
} 