import { Code2, Database, Cloud, Terminal } from "lucide-react";

const techStack = {
  "Programming Languages": [
    {
      name: "Python",
      description:
        "My primary language for data science, machine learning, and backend development.",
      proficiency: "Expert",
      yearsOfExperience: 5,
    },
    {
      name: "R",
      description: "Used for statistical analysis and data visualization.",
      proficiency: "Advanced",
      yearsOfExperience: 3,
    },
    {
      name: "SQL",
      description: "For database querying and data manipulation.",
      proficiency: "Expert",
      yearsOfExperience: 5,
    },
    {
      name: "JavaScript/TypeScript",
      description: "For web development and interactive visualizations.",
      proficiency: "Intermediate",
      yearsOfExperience: 2,
    },
  ],
  "Machine Learning & AI": [
    {
      name: "TensorFlow",
      description: "Deep learning framework for building and training neural networks.",
      proficiency: "Expert",
      yearsOfExperience: 4,
    },
    {
      name: "PyTorch",
      description: "For research and prototyping deep learning models.",
      proficiency: "Advanced",
      yearsOfExperience: 3,
    },
    {
      name: "scikit-learn",
      description: "For traditional machine learning algorithms and preprocessing.",
      proficiency: "Expert",
      yearsOfExperience: 5,
    },
  ],
  "Data Processing & Analysis": [
    {
      name: "pandas",
      description: "Data manipulation and analysis library.",
      proficiency: "Expert",
      yearsOfExperience: 5,
    },
    {
      name: "NumPy",
      description: "Numerical computing and array operations.",
      proficiency: "Expert",
      yearsOfExperience: 5,
    },
    {
      name: "Apache Spark",
      description: "For big data processing and analytics.",
      proficiency: "Advanced",
      yearsOfExperience: 3,
    },
  ],
  "Cloud & DevOps": [
    {
      name: "AWS",
      description: "Cloud infrastructure and services.",
      proficiency: "Advanced",
      yearsOfExperience: 3,
    },
    {
      name: "Docker",
      description: "Containerization for reproducible environments.",
      proficiency: "Advanced",
      yearsOfExperience: 3,
    },
    {
      name: "Git",
      description: "Version control and collaboration.",
      proficiency: "Expert",
      yearsOfExperience: 5,
    },
  ],
};

function getProficiencyColor(proficiency: string) {
  switch (proficiency) {
    case "Expert":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
    case "Advanced":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300";
  }
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "Programming Languages":
      return Code2;
    case "Machine Learning & AI":
      return Terminal;
    case "Data Processing & Analysis":
      return Database;
    case "Cloud & DevOps":
      return Cloud;
    default:
      return Code2;
  }
}

export default function TechStackPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Tech Stack</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          An overview of the technologies, tools, and frameworks I use in my work.
        </p>

        <div className="space-y-16">
          {Object.entries(techStack).map(([category, tools]) => {
            const Icon = getCategoryIcon(category);
            return (
              <section key={category}>
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-2xl font-bold">{category}</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold">{tool.name}</h3>
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getProficiencyColor(
                            tool.proficiency
                          )}`}
                        >
                          {tool.proficiency}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {tool.description}
                      </p>

                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {tool.yearsOfExperience} years of experience
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
} 