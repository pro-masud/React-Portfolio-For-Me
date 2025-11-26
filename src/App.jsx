import { useState } from "react";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarWidth = isOpen ? "w-72" : "w-16";
  const mainContentMargin = isOpen ? "ml-72" : "ml-16";

  const menuItems = [
    { name: "About Me", icon: "👤" },
    { name: "Portfolio", icon: "💼" },
    { name: "Resume", icon: "📜" },
    { name: "Service & Pricing", icon: "💰" },
    { name: "Blog", icon: "✍️" },
    { name: "Contact", icon: "📞" },
  ];

  const socialIcons = [
    { icon: "f", color: "bg-blue-600" },
    { icon: "t", color: "bg-sky-400" },
    { icon: "i", color: "bg-pink-600" },
  ];

  return (
    <div className="flex h-screen bg-[#282828] text-white">
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out bg-[#1c1c1c] border-r border-gray-700 ${sidebarWidth} p-2 flex flex-col`}
      >
        <div className="py-2 px-2 border-b border-gray-700 mb-4">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-400 rounded-lg hover:bg-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <h1 className="text-xl font-bold tracking-wider text-green-400 mt-2 ml-1">
              Masud Rana
            </h1>
          )}
        </div>

        {isOpen && (
          <div className="text-center px-4 mb-6">
            <div className="mt-2 flex justify-center">
              <img
                src="/path/to/masud_rana_profile.jpg"
                alt="Masud Rana"
                className="w-20 h-20 rounded-full border-4 border-gray-700 object-cover"
              />
            </div>
            <p className="mt-4 text-xs text-gray-400">
              Hi, I'm A WordPress Developer.
            </p>
            <div className="flex justify-center space-x-2 mt-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-7 h-7 flex items-center justify-center rounded-full text-white text-xs ${social.color}`}
                >
                  {social.icon.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        )}

        <nav className="flex-grow space-y-1 py-4 border-y border-gray-700">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className={`flex items-center p-2 text-sm font-medium rounded-lg transition duration-150 
                                ${
                                  item.name === "Portfolio"
                                    ? "bg-green-600 text-white"
                                    : "text-gray-300 hover:bg-gray-800"
                                }`}
            >
              <span className="text-lg mx-2 opacity-70">{item.icon}</span>
              {isOpen && (
                <span className="ml-2 whitespace-nowrap">{item.name}</span>
              )}
            </a>
          ))}
          <a
            href="#"
            className="flex items-center p-2 text-sm font-medium text-gray-300 hover:bg-gray-800"
          >
            <span className="text-lg mx-2">⬇️</span>
            {isOpen && (
              <span className="ml-2 whitespace-nowrap">More Pages</span>
            )}
          </a>
        </nav>

        {isOpen && (
          <div className="mt-auto pt-6 border-t border-gray-700 px-4">
            <button className="w-full py-2 mb-4 text-sm font-semibold text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-200">
              <span className="mr-1">💼</span> Hire Me
            </button>
            <div className="flex justify-between items-center text-sm text-gray-300">
              <span>Dark Mode</span>
              <div className="flex items-center space-x-2">
                <span className="text-yellow-400">☀️</span>
                <div className="w-10 h-5 rounded-full bg-gray-700 relative p-[2px]">
                  <span className="block w-4 h-4 bg-white rounded-full transition-transform transform translate-x-0"></span>
                </div>
                <span className="text-gray-500">🌙</span>
              </div>
            </div>
          </div>
        )}
      </aside>

      <main
        className={`flex-1 transition-all duration-300 ease-in-out ${mainContentMargin} p-8 overflow-y-auto`}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Masud Rana</h2>
          <h3 className="text-xl text-gray-400 mb-8">WordPr</h3>
        </div>
      </main>
    </div>
  );
};

export default App;
