"use client";

import PageTransition, { AnimatedSection } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { BookOpen, Star } from "lucide-react";

export default function BooksPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-amber-600 via-red-600 to-purple-600 dark:from-amber-400 dark:via-red-400 dark:to-purple-400 bg-clip-text text-transparent mb-6 drop-shadow-sm">
            My Bookshelf
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A curated collection of books that have shaped my thinking and inspired my journey.
          </p>
        </AnimatedSection>

        {/* Currently Reading Section */}
        <AnimatedSection className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Currently Reading</h2>
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 p-6"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/4">
                <motion.img
                  src={currentlyReading.image}
                  alt={currentlyReading.title}
                  className="w-full h-auto rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="w-full md:w-3/4">
                <h3 className="text-2xl font-bold mb-2">{currentlyReading.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  by {currentlyReading.author}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {currentlyReading.description}
                </p>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Currently on page {currentlyReading.currentPage} of {currentlyReading.totalPages}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Read Books Section */}
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-8">Books I've Read</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book, index) => (
              <AnimatedSection key={book.title} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                      by {book.author}
                    </p>
                    <div className="flex items-center gap-1 mb-4">
                      <RatingStars rating={book.rating} />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {book.review}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
}

const currentlyReading = {
  title: "Thinking, Fast and Slow",
  author: "Daniel Kahneman",
  description:
    "A groundbreaking work that explores the two systems that drive the way we think—the fast, intuitive, and emotional system; and the slow, more deliberative, and logical system.",
  image: "/books/thinking-fast-and-slow.jpg",
  currentPage: 156,
  totalPages: 499
};

const books = [
  {
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
    image: "/books/deep-learning.jpg",
    rating: 5,
    review: "A comprehensive guide to the fundamentals of deep learning. Essential reading for anyone in AI."
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "/books/clean-code.jpg",
    rating: 4,
    review: "Transformed how I think about writing maintainable and efficient code."
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt, David Thomas",
    image: "/books/pragmatic-programmer.jpg",
    rating: 5,
    review: "Invaluable insights into software development best practices and philosophy."
  }
];

function RatingStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? "text-yellow-400 fill-current"
              : "text-gray-300 dark:text-gray-600"
          }`}
        />
      ))}
    </div>
  );
} 