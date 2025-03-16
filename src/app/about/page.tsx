"use client";

import PageTransition, { AnimatedSection } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";

const timeline = [
  {
    year: "2023",
    title: "Data Science Lead",
    description: "Leading data science initiatives and machine learning projects.",
    icon: Briefcase,
  },
  {
    year: "2021",
    title: "Master's in Data Science",
    description: "Completed advanced studies in machine learning and AI.",
    icon: GraduationCap,
  },
  {
    year: "2019",
    title: "Senior Data Scientist",
    description: "Developed and deployed ML models for production.",
    icon: Briefcase,
  },
  {
    year: "2018",
    title: "Best Innovation Award",
    description: "Recognized for innovative ML solutions in healthcare.",
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Data Scientist and Machine Learning Engineer passionate about solving complex problems
            and creating impactful solutions.
          </p>
        </AnimatedSection>

        {/* Bio Section */}
        <AnimatedSection className="mb-16" delay={0.2}>
          <div className="prose dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <p className="text-gray-600 dark:text-gray-300">
                  With a strong foundation in mathematics and computer science, I've dedicated
                  my career to exploring the fascinating world of artificial intelligence and
                  data science.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <p className="text-gray-600 dark:text-gray-300">
                  I specialize in developing machine learning models and data-driven solutions
                  that help businesses make better decisions and improve their operations.
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection className="mb-16" delay={0.4}>
          <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience Timeline */}
        <AnimatedSection className="mb-16" delay={0.6}>
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className="flex flex-col md:flex-row gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all"
              >
                <div className="md:w-32 flex-shrink-0">
                  <span className="text-gray-500 dark:text-gray-400">{exp.period}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection delay={0.8}>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Interested in collaborating or just want to say hi? Feel free to reach out!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-all"
            >
              Get in Touch
            </motion.a>
          </div>
        </AnimatedSection>
      </div>
    </PageTransition>
  );
}

const skills = [
  {
    title: "Machine Learning",
    description: "Deep learning, NLP, Computer Vision, and Predictive Modeling"
  },
  {
    title: "Data Science",
    description: "Statistical Analysis, Data Visualization, and Feature Engineering"
  },
  {
    title: "Programming",
    description: "Python, R, SQL, TensorFlow, PyTorch, and Scikit-learn"
  },
  // Add more skills as needed
];

const experience = [
  {
    period: "2022 - Present",
    title: "Senior Data Scientist",
    description: "Leading machine learning projects and developing AI solutions."
  },
  {
    period: "2020 - 2022",
    title: "Machine Learning Engineer",
    description: "Developed and deployed ML models for production environments."
  },
  // Add more experience as needed
]; 