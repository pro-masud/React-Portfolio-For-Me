import { useState } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiElementor,
  SiMysql,
  SiPhp,
  SiTailwindcss,
  SiVite,
  SiWordpress,
} from "react-icons/si";
import portfolioData from "../json/portfolio.json";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const techIconMap = {
    React: FaReact,
    Vite: SiVite,
    "Tailwind CSS": SiTailwindcss,
    "React Router": FaReact,
    WordPress: SiWordpress,
    Elementor: SiElementor,
    PHP: SiPhp,
    MySQL: SiMysql,
  };

  const categoryLabels = {
    all: "All Projects",
    themeforest: "ThemeForest",
    "wp-theme": "WP Themes",
    "wp-plugin": "WP Plugins",
    "client-project": "Client Projects",
    "front-end": "Front-end",
    "back-end": "Back-end",
    "full-stack": "Full-stack",
  };

  const categories = [
    "all",
    ...new Set(portfolioData.map((item) => item.category)),
  ];
  const filteredPortfolio =
    activeCategory === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 lg:px-8 py-8 rounded-xl shadow-md">
      <div className="container mx-auto">
        <div className="mb-8 flex flex-col gap-4 border-b border-gray-200 pb-6 dark:border-gray-800 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Portfolio</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredPortfolio.length} project
              {filteredPortfolio.length === 1 ? "" : "s"}
            </p>
          </div>
          <div
            className="flex max-w-full gap-2 overflow-x-auto pb-1"
            role="group"
            aria-label="Filter portfolio by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition ${
                  activeCategory === category
                    ? "border-emerald-500 bg-emerald-500 text-white shadow-md"
                    : "border-gray-300 text-gray-600 hover:border-emerald-500 hover:text-emerald-500 dark:border-gray-700 dark:text-gray-300"
                }`}
              >
                {categoryLabels[category] || category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPortfolio.map((item) => (
            <article
              key={item.id}
              className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-emerald-500 rounded-3xl p-8 flex flex-col justify-between transition duration-300 hover:shadow-2xl ring-2 ring-emerald-500/20 dark:ring-emerald-500/10 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="absolute inset-0 bg-black/25 dark:bg-black/10"></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex flex-wrap justify-start gap-3 mb-6">
                  {item.technologies.slice(0, 5).map((tech, index) => {
                    const IconComponent = techIconMap[tech];
                    return (
                      IconComponent && (
                        <span
                          key={`${item.id}-${index}`}
                          className="icon-float flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 dark:text-emerald-300"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        >
                          <IconComponent className="text-xl" />
                        </span>
                      )
                    );
                  })}
                </div>

                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-3 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-100 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex gap-4 mt-auto">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={item.preview || item.live || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full border border-emerald-500 text-emerald-500 text-sm font-medium hover:bg-emerald-500 hover:text-white transition"
                  >
                    Review Site
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
