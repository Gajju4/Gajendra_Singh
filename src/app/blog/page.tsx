"use client";

import PageTransition, { AnimatedSection } from "@/components/PageTransition";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

// This would typically come from your CMS or database
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Machine Learning: A Beginner's Guide",
    excerpt:
      "Learn the fundamentals of machine learning and how to start your journey in this exciting field.",
    date: "2024-03-15",
    readTime: "8 min read",
    slug: "getting-started-with-ml",
  },
  {
    id: 2,
    title: "Understanding Neural Networks: A Deep Dive",
    excerpt:
      "Explore the architecture and mathematics behind neural networks and their applications.",
    date: "2024-03-10",
    readTime: "12 min read",
    slug: "understanding-neural-networks",
  },
  {
    id: 3,
    title: "The Future of AI: Trends and Predictions",
    excerpt:
      "Analyzing current AI trends and making predictions about the future of artificial intelligence.",
    date: "2024-03-05",
    readTime: "10 min read",
    slug: "future-of-ai",
  },
];

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6">
            Blog Posts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Thoughts and insights on technology, data science, and more.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-all bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
              >
                <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                  <motion.a
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    Read more
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.a>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </PageTransition>
  );
} 