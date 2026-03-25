import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-slate-900">
      <Sidebar />
      <main
        className={`flex-1 transition-all duration-300 ease-in-out overflow-y-auto 
        bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 text-black dark:text-gray-200`}
      >
        <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
          <Header />

          <Skills />
        </div>
      </main>
    </div>
  );
};

export default App;
