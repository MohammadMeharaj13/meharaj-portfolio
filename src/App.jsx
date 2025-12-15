import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-[#121212] min-h-screen text-white font-sans">
      <Navbar />
      <div className="max-w-[1200px] mx-auto px-4">

        {/* Mobile Sidebar (hidden on desktop) */}
        <div className="md:hidden sticky top-0 z-20 bg-[#121212] py-2">
          <Sidebar mobile />
        </div>

        {/* Main Layout: stack content first on mobile, sidebar second */}
        <div className="flex flex-col-reverse md:flex-row gap-8 h-[calc(100vh-64px)]">

          {/* Desktop Sidebar */}
          <div className="hidden md:block sticky top-0 h-[100vh] overflow-y-auto">
            <Sidebar />
          </div>

          {/* Main Scroll Area */}
          <main className="flex-1 overflow-y-auto py-8 flex flex-col gap-12">
            <About />
            <Resume />
            <Portfolio />
            <Contact />
          </main>

        </div>
      </div>
    </div>
  );
}

export default App;
