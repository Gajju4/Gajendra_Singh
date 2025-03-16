"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: Twitter,
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                  <Icon className="h-6 w-6" />
                </Link>
              );
            })}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Gajendra. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
} 