"use client";

import PageTransition, { AnimatedSection } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { MapPin, Calendar, Globe2 } from "lucide-react";

const travels = [
  {
    title: "Exploring Japan",
    location: "Tokyo, Kyoto, Osaka",
    date: "March 2024",
    description:
      "Immersed in Japanese culture, from ancient temples to modern technology. Highlights included cherry blossoms in Kyoto and the bustling streets of Tokyo.",
    image: "/images/japan.jpg", // You'll need to add these images
    category: "Asia",
  },
  {
    title: "European Adventure",
    location: "Paris, Rome, Barcelona",
    date: "Summer 2023",
    description:
      "A journey through Europe's most iconic cities. Experienced art, history, and cuisine across three amazing countries.",
    image: "/images/europe.jpg",
    category: "Europe",
  },
  {
    title: "Himalayan Trek",
    location: "Nepal",
    date: "Spring 2023",
    description:
      "An unforgettable trek through the Himalayas, experiencing breathtaking views and local culture.",
    image: "/images/nepal.jpg",
    category: "Asia",
  },
];

const wishlist = [
  {
    destination: "New Zealand",
    reason: "For its stunning landscapes and outdoor adventures",
  },
  {
    destination: "Iceland",
    reason: "To see the Northern Lights and explore volcanic landscapes",
  },
  {
    destination: "Peru",
    reason: "To visit Machu Picchu and experience Incan culture",
  },
];

export default function TravelPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 dark:from-green-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-6">
            Travel Stories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Exploring the world one adventure at a time. Join me on my journey through different cultures and landscapes.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {travels.map((story, index) => (
            <AnimatedSection key={story.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{story.location}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4" />
                    <span>{story.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3">{story.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {story.description}
                  </p>
                  <motion.a
                    href={`/travel/${story.title.replace(/\s+/g, '-').toLowerCase()}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Travel Wishlist */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Travel Wishlist</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wishlist.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50"
              >
                <h3 className="text-xl font-semibold mb-2">{item.destination}</h3>
                <p className="text-gray-600 dark:text-gray-400">{item.reason}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageTransition>
  );
} 