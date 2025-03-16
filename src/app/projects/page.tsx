"use client";

import PageTransition, { AnimatedSection } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my work in data science, machine learning, and software development.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -5 }}
                className="rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"
              >
                {project.image && (
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-5 h-5 mr-2" />
                        Code
                      </motion.a>
                    )}
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-5 h-5 mr-2" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

const projects = [
  {
    title: "AI-Powered Image Analysis",
    description: "Deep learning model for real-time object detection and image classification.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Docker"],
    github: "https://github.com/yourusername/project1",
    demo: "https://demo.project1.com",
    image: "/projects/project1.jpg"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets and analytics.",
    technologies: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/project2",
    demo: "https://demo.project2.com",
    image: "/projects/project2.jpg"
  },
  // Add more projects as needed
]; 