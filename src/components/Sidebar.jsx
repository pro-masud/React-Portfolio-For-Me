import { useEffect, useState } from "react";
import { CiLight } from "react-icons/ci";
import {
  FaBriefcase,
  FaFacebook,
  FaFileAlt,
  FaGithub,
  FaMoon,
  FaNewspaper,
  FaTools,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import { FaBars, FaCodepen, FaLinkedin } from "react-icons/fa6";
import { IoIosSearch, IoMdMail } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";
import UserImage from "./../assets/image/user.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark",
  );

  // Dark Mode Set
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarWidthClass = isSidebarOpen ? "w-[420px]" : "w-16";

  return (
    <>
      <aside
        className={`z-40 h-screen transition-all duration-300 ease-in-out ${sidebarWidthClass} 
        bg-primary-ur dark:bg-[#111827] p-4 flex flex-col shrink-0 hidden lg:flex`}
      >
        <div className="flex flex-col justify-between h-full items-start">
          <div className="site-top w-full">
            <div className="flex items-center justify-between">
              {/* Sidebar Button */}
              <FaBars
                color="#fff"
                fontSize="24px"
                onClick={handleSidebarOpen}
                style={{ cursor: "pointer" }}
                className={`${isSidebarOpen ? "mr-4" : "mx-auto"}`}
              />

              {/* Search Icon */}
              {isSidebarOpen && (
                <IoIosSearch
                  color="#fff"
                  fontSize="24px"
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>

            {/* User Profile */}
            <div className="user-profile ">
              {isSidebarOpen && (
                <div className="flex flex-col items-center mt-8">
                  <h2 className="text-3xl text-white dark:text-gray-200 font-bold">
                    Masud Rana
                  </h2>
                  <img
                    src={UserImage}
                    alt="User Avatar"
                    className="rounded-full mb-4 w-40 h-40 object-cover mt-5"
                  />

                  <p className="text-white dark:text-gray-300 font-medium text-sm text-center">
                    Hi, My name is Masud Rana. I'm a WordPress Developer.
                    Welcome to my Personal Website
                  </p>

                  {/* Social Icons */}
                  <div className="flex items-center justify-center gap-2">
                    <a
                      href="https://github.com/pro-masud"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-secondary-ur p-3 rounded-full mt-4 hover:bg-white transition-colors hover:text-secondary-ur"
                    >
                      <FaGithub fontSize="20px" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/masud-rana-574a7820b/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-secondary-ur p-3 rounded-full mt-4 hover:bg-white transition-colors hover:text-secondary-ur"
                    >
                      <FaLinkedin fontSize="20px" />
                    </a>

                    <a
                      href="https://leetcode.com/u/promasudbd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-secondary-ur p-3 rounded-full mt-4 hover:bg-white transition-colors hover:text-secondary-ur"
                    >
                      <SiLeetcode fontSize="20px" />
                    </a>

                    <a
                      href="https://www.facebook.com/profile.php?id=100071557525977"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-secondary-ur p-3 rounded-full mt-4 hover:bg-white transition-colors hover:text-secondary-ur"
                    >
                      <FaFacebook fontSize="20px" />
                    </a>

                    <a
                      href="https://twitter.com/masudrana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-secondary-ur p-3 rounded-full mt-4 hover:bg-white transition-colors hover:text-secondary-ur"
                    >
                      <FaTwitter fontSize="20px" />
                    </a>

                    <a
                      href="https://codepen.io/pro-masudbd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-secondary-ur p-3 rounded-full mt-4 hover:bg-white transition-colors hover:text-secondary-ur"
                    >
                      <FaCodepen fontSize="20px" />
                    </a>
                  </div>
                </div>
              )}

              {/* Navigation Menu */}
              <ul className="flex flex-col gap-2 mt-8 pb-4 text-lg text-white dark:text-gray-200">
                <li>
                  <Link
                    to="/about"
                    className={`flex items-center gap-2 rounded-md transition-all duration-200 ${
                      isSidebarOpen
                        ? "nav-link active-link px-3 py-1 hover:bg-secondary-ur hover:text-white"
                        : "p-1 justify-center hover:bg-secondary-ur"
                    } ${!isSidebarOpen && "active-link"}`}
                  >
                    <FaUser fontSize="20px" />
                    {isSidebarOpen && "About Me"}
                  </Link>
                </li>

                <li>
                  <a
                    href="#Portfolio"
                    className={`flex items-center gap-2 rounded-md transition-all duration-200 ${
                      isSidebarOpen
                        ? "nav-link px-3 py-1 hover:bg-secondary-ur hover:text-white"
                        : "p-1 justify-center hover:bg-secondary-ur"
                    }`}
                  >
                    <FaBriefcase fontSize="20px" />
                    {isSidebarOpen && "Portfolio"}
                  </a>
                </li>

                <li>
                  <a
                    href="#Resume"
                    className={`flex items-center gap-2 rounded-md transition-all duration-200 ${
                      isSidebarOpen
                        ? "nav-link px-3 py-1 hover:bg-secondary-ur hover:text-white"
                        : "p-1 justify-center hover:bg-secondary-ur"
                    }`}
                  >
                    <FaFileAlt fontSize="20px" />
                    {isSidebarOpen && "Resume"}
                  </a>
                </li>

                <li>
                  <a
                    href="#Price"
                    className={`flex items-center gap-2 rounded-md transition-all duration-200 ${
                      isSidebarOpen
                        ? "nav-link px-3 py-1 hover:bg-secondary-ur hover:text-white"
                        : "p-1 justify-center hover:bg-secondary-ur"
                    }`}
                  >
                    <FaTools fontSize="20px" />
                    {isSidebarOpen && "Service & Price"}
                  </a>
                </li>

                <li>
                  <a
                    href="#Blog"
                    className={`flex items-center gap-2 rounded-md transition-all duration-200 ${
                      isSidebarOpen
                        ? "nav-link px-3 py-1 hover:bg-secondary-ur hover:text-white"
                        : "p-1 justify-center hover:bg-secondary-ur"
                    }`}
                  >
                    <FaNewspaper fontSize="20px" />
                    {isSidebarOpen && "Blog"}
                  </a>
                </li>

                <li>
                  <a
                    href="#contact"
                    className={`flex items-center gap-2 rounded-md transition-all duration-200 ${
                      isSidebarOpen
                        ? "nav-link px-3 py-1 hover:bg-secondary-ur hover:text-white"
                        : "p-1 justify-center hover:bg-secondary-ur"
                    }`}
                  >
                    <IoMdMail fontSize="20px" />
                    {isSidebarOpen && "Contact"}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          <div className="site-bottom w-full flex items-center">
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <CiLight
                  color="#fff"
                  fontSize="24px"
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <FaMoon
                  color="#fff"
                  fontSize="24px"
                  style={{ cursor: "pointer" }}
                />
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
