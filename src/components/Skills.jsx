import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import {
  SiAdobephotoshop,
  SiAdobexd,
  SiAsana,
  SiExpress,
  SiFigma,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiNpm,
  SiPhp,
  SiPostman,
  SiSass,
  SiTailwindcss,
  SiWordpress,
  SiXampp,
} from "react-icons/si";

import { BsPlugin } from "react-icons/bs";
import { SiElementor, SiGutenberg } from "react-icons/si";

import skillData from "../json/skills.json";

// Icon mapping
const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJsSquare: FaJsSquare,
  FaReact: FaReact,
  FaNodeJs: FaNodeJs,
  FaGitAlt: FaGitAlt,
  FaGithub: FaGithub,
  FaBootstrap: FaBootstrap,
  SiSass: SiSass,
  SiTailwindcss: SiTailwindcss,
  SiWordpress: SiWordpress,
  SiPhp: SiPhp,
  SiMysql: SiMysql,
  SiMongodb: SiMongodb,
  SiExpress: SiExpress,
  SiNpm: SiNpm,
  SiPostman: SiPostman,
  SiFigma: SiFigma,
  SiAdobexd: SiAdobexd,
  SiAdobephotoshop: SiAdobephotoshop,
  SiAsana: SiAsana,
  SiJquery: SiJquery,
  SiXampp: SiXampp,
  SiElementor: SiElementor,
  SiGutenberg: SiGutenberg,
  BsPlugin: BsPlugin,
};

const Skills = () => {
  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 font-sans rounded-xl shadow-md">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillData.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-emerald-500 rounded-3xl p-8 flex flex-col justify-between transition duration-300 hover:shadow-2xl ring-2 ring-emerald-500/20 dark:ring-emerald-500/10"
            >
              <div className="flex flex-wrap justify-start gap-3 mb-6">
                {item.icons.slice(0, 5).map((iconKey, index) => {
                  const IconComponent = iconMap[iconKey];
                  return (
                    IconComponent && (
                      <span
                        key={`${item.id}-${index}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 dark:text-emerald-300"
                      >
                        <IconComponent className="text-xl" />
                      </span>
                    )
                  );
                })}
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
