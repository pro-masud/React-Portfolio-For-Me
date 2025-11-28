import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="flex min-h-screen bg-white dark:bg-primary-ur">
      <Sidebar />
      <main
        className={`flex-1 transition-all duration-300 ease-in-out p-8 overflow-y-auto 
        bg-gray-50 dark:bg-[#0f172a] text-black dark:text-gray-200`}
      >
        <div className="max-w-8xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-secondary-ur dark:text-secondary-ur">
            Masud Rana
          </h2>
          <h3 className="text-xl text-gray-400 dark:text-gray-300 mb-8">
            WordPress Developer
          </h3>
          <p className="font-poppins">
            আপনার কাস্টম ফন্ট যদি কনফিগার করা থাকে, তবে এটি এখানে প্রদর্শিত হবে।
          </p>
        </div>
      </main>
    </div>
  );
};

export default App;
