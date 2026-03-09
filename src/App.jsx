import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-primary-ur">
      <Sidebar />
      <main
        className={`flex-1 transition-all duration-300 ease-in-out overflow-y-auto 
        bg-gray-50 dark:bg-[#0f172a] text-black dark:text-gray-200`}
      >
        <div className="max-w-8xl mx-auto">
          <Header />
        </div>
      </main>
    </div>
  );
};

export default App;
