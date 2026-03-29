import { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaFile } from "react-icons/fa";
import { Typed } from "react-typed";
import UserImage from "../assets/image/user.png";

const Header = () => {
  const typedRef = useRef(null);
  const [hoveredButton, setHoveredButton] = useState(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "WordPress Developer",
          "Front-End Engineer",
          "Software Developer",
          "Web Application Developer",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
        loopCount: Infinity,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);
  return (
    <>
      <div className="header-top"></div>

      <header className="py-8 sm:py-12 lg:py-16">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Text Section */}
            <div className="w-full lg:w-3/5 text-center lg:text-left space-y-4 order-2 lg:order-1">
              <div className="space-y-2">
                <h1 className="text-2xl sm:text-3xl lg:text-[45px] font-[700] text-gray-900 dark:text-white leading-tight">
                  Masud Rana
                </h1>
                <h4 className="text-base sm:text-lg lg:text-[24px] font-semibold text-secondary-ur min-h-[1.5em]">
                  <span
                    ref={typedRef}
                    className="inline-block text-base sm:text-lg lg:text-[24px] font-semibold"
                  ></span>
                </h4>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg max-w-2xl lg:max-w-none mt-0">
                A results-oriented WordPress Developer with a passion for
                crafting innovative websites that prioritize user experience and
                functionality. Dedicated to delivering high-quality solutions
                that exceed expectations while staying abreast of the latest
                technologies. Committed to contributing effectively to project
                success and pursuing continual personal growth in the field.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                <a
                  href="#"
                  onMouseEnter={() => setHoveredButton("portfolio")}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`px-8 sm:px-10 py-3 font-semibold rounded-lg transition-all duration-200 transform flex items-center gap-2 justify-center ${
                    hoveredButton === "portfolio"
                      ? "bg-secondary-ur text-white shadow-lg -translate-y-1"
                      : hoveredButton === "resume"
                        ? "bg-secondary-ur text-white opacity-60"
                        : "bg-secondary-ur text-white hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  <FaBriefcase />
                  View Portfolio
                </a>

                <a
                  href="#"
                  onMouseEnter={() => setHoveredButton("resume")}
                  onMouseLeave={() => setHoveredButton(null)}
                  className={`px-8 sm:px-10 py-3 font-semibold rounded-lg transition-all duration-200 transform flex items-center gap-2 justify-center ${
                    hoveredButton === "resume"
                      ? "bg-primary-ur text-white shadow-lg -translate-y-1"
                      : hoveredButton === "portfolio"
                        ? "bg-primary-ur text-white opacity-60"
                        : "bg-primary-ur text-white hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-1"
                  }`}
                >
                  <FaFile />
                  View Resume
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-2/5 flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative w-full">
                <img
                  className="w-full h-auto object-cover shadow-2xl hover:shadow-2xl transition-shadow duration-300 border border-gray-300 dark:border-emerald-500 rounded-3xl ring-emerald-500/20 dark:ring-emerald-500/10"
                  src={UserImage}
                  alt="Masud Rana"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-secondary-ur/10 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
