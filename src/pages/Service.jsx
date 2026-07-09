import { FaLaptopCode, FaPaintBrush, FaSearch } from "react-icons/fa";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      desc: "Responsive websites built with React and Tailwind CSS.",
      icon: FaLaptopCode,
    },
    {
      id: 2,
      title: "UI/UX Design",
      desc: "Clean interfaces and prototypes using modern design tools.",
      icon: FaPaintBrush,
    },
    {
      id: 3,
      title: "Performance & SEO",
      desc: "Speed optimizations and basic SEO to improve visibility.",
      icon: FaSearch,
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 px-4 sm:px-6 lg:px-8 py-8 rounded-xl shadow-md">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.id}
                className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-emerald-500 rounded-3xl p-8 flex flex-col justify-between transition duration-300 hover:shadow-2xl ring-2 ring-emerald-500/20 dark:ring-emerald-500/10 overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500 dark:text-emerald-300 border border-emerald-100">
                    <Icon className="text-xl" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {s.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {s.desc}
                </p>

                <div className="mt-auto flex gap-3">
                  <a
                    href="#"
                    className="px-5 py-2 rounded-full bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition"
                  >
                    Learn more
                  </a>

                  <a
                    href="#contact"
                    className="px-5 py-2 rounded-full border border-emerald-500 text-emerald-500 text-sm font-medium hover:bg-emerald-500 hover:text-white transition"
                  >
                    Hire me
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
