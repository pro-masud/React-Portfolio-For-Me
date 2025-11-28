import { useState } from "react";
import { CiLight } from "react-icons/ci";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaBars, FaCodepen, FaLinkedin } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";
import UserImage from "./assets/image/user.png";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarOpen = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarWidthClass = isSidebarOpen ? "w-80" : "w-16";

  return (
    <div className="flex min-h-screen">
      {/* --- Sidebar Component --- */}
      <aside
        className={` z-40 h-screen transition-all duration-300 ease-in-out ${sidebarWidthClass} bg-primary-ur p-4 flex flex-col shrink-0`}
      >
        <div className="flex flex-col justify-between h-full items-start">
          <div className="site-top w-full">
            <div className="flex items-center justify-between">
              <FaBars
                color="#fff"
                fontSize="24px"
                onClick={handleSidebarOpen}
                style={{ cursor: "pointer" }}
                className={`${isSidebarOpen ? "mr-4" : "mx-auto"}`}
              />

              {isSidebarOpen && (
                <IoIosSearch
                  color="#fff"
                  fontSize="24px"
                  style={{ cursor: "pointer" }}
                />
              )}
            </div>

            <div className="user-profile ">
              {isSidebarOpen && (
                <div className="flex flex-col items-center mt-8">
                  <h2 className="text-3xl text-white font-bold">Masud Rana</h2>
                  <img
                    src={UserImage}
                    alt="User Avatar"
                    className="rounded-full mb-4 w-60 h-60 object-cover mt-5"
                  />
                  <p className="text-white font-medium text-sm">
                    Hi, My name is Masud Rana. I'm a WordPress Developer.
                    Welcome to my Personal Website
                  </p>
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
              <ul className=" flex flex-col gap-4 mt-4 pb-4 text-lg">
                <li>
                  <a href="#home" className="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="site-bottom">
            <CiLight
              color="#fff"
              fontSize="24px"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </aside>
      <main
        className={`flex-1 transition-all duration-300 ease-in-out p-8 overflow-y-auto bg-gray-50`}
      >
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-secondary-ur">
            Masud Rana
          </h2>
          <h3 className="text-xl text-gray-400 mb-8">WordPress Developer</h3>
          <p className="font-poppins">
            আপনার কাস্টম ফন্ট যদি কনফিগার করা থাকে, তবে এটি এখানে প্রদর্শিত হবে।
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
