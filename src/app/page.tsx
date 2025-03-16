"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface Particle {
  initialX: number;
  initialY: number;
  scale: number;
  duration: number;
  positions: number[];
}

// Separate component for floating particles
function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  useEffect(() => {
    // Generate particles only on client side
    setParticles(
      [...Array(20)].map(() => ({
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 20 + 20,
        positions: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      }))
    );
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
          initial={{
            x: `${particle.initialX}%`,
            y: `${particle.initialY}%`,
            scale: particle.scale,
          }}
          animate={{
            x: particle.positions.map((p: number) => `${p}%`),
            y: particle.positions.map((p: number) => `${p}%`),
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.3
    }
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <div className="flex flex-col" ref={containerRef}>
      {/* Hero Section */}
      <motion.section 
        initial="initial"
        animate="animate"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale, y }}
      >
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-400/20 dark:via-purple-400/20 dark:to-pink-400/20"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />

        {/* Content Container */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10"
        >
          {/* Name with enhanced animation */}
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text"
          >
            Hi, I'm{" "}
            <motion.span 
              className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Gajendra
            </motion.span>
          </motion.h1>

          {/* Description with enhanced animation */}
          <motion.p 
            variants={fadeInUp}
            className="mt-6 text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl font-light leading-relaxed"
          >
            Welcome to my digital garden where I share my journey through technology,
            travel, and life experiences.
          </motion.p>

          {/* Buttons with matching style */}
          <motion.div 
            variants={fadeInUp}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/about"
              className="rounded-lg bg-gray-900 px-6 py-3 text-lg text-white transition-all hover:bg-gray-800 hover:scale-105 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              About Me
            </Link>
            <Link
              href="/blog"
              className="rounded-lg bg-gray-900 px-6 py-3 text-lg text-white transition-all hover:bg-gray-800 hover:scale-105 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              Read Blog
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Featured Sections with enhanced design */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Latest Blog Posts */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 p-8 transition-all hover:shadow-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
            >
              Latest Posts
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Thoughts and insights on technology, travel, and more.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/blog"
                className="mt-6 inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline group"
              >
                View all posts
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Featured Projects */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 p-8 transition-all hover:shadow-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
            >
              Projects
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Explore my work in Data Science, AI, and Machine Learning.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href="/projects"
                className="mt-6 inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline group"
              >
                View projects
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Travel Stories */}
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 p-8 transition-all hover:shadow-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-red-600 dark:from-pink-400 dark:to-red-400 bg-clip-text text-transparent"
            >
              Travel Stories
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              Join me on my adventures around the world.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Link
                href="/travel"
                className="mt-6 inline-flex items-center text-pink-600 dark:text-pink-400 hover:underline group"
              >
                Explore travels
                <motion.span
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced floating particles */}
      <FloatingParticles />
    </div>
  );
}
