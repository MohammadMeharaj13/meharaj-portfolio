import {
  FaBriefcase,
  FaCode,
  FaAward,
  FaBook,
  FaDownload,
} from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="bg-[#252525] bg-opacity-60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-soft"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-accent mb-3">
          Resume
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          A comprehensive overview of my front-end development journey
        </p>

        {/* Download Button */}
        <a
          href="/M_Meharaj_Resume_FrontEnd.pdf"
          download
          className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full bg-accent text-black font-medium hover:opacity-90 transition"
        >
          <FaDownload />
          Download Resume
        </a>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="bg-[#2a2a2a] rounded-xl p-5 text-center">
          <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-accent/10 text-accent">
            <FaBriefcase />
          </div>
          <h3 className="text-white font-semibold mb-1">
            1+ Years Experience
          </h3>
          <p className="text-gray-400 text-sm">
            Professional front-end development in fintech
          </p>
        </div>

        <div className="bg-[#2a2a2a] rounded-xl p-5 text-center">
          <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-accent/10 text-accent">
            <FaCode />
          </div>
          <h3 className="text-white font-semibold mb-1">
            10+ Modules Built
          </h3>
          <p className="text-gray-400 text-sm">
            Core application modules using React.js
          </p>
        </div>

        <div className="bg-[#2a2a2a] rounded-xl p-5 text-center">
          <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-accent/10 text-accent">
            <FaAward />
          </div>
          <h3 className="text-white font-semibold mb-1">
            Industry Exposure
          </h3>
          <p className="text-gray-400 text-sm">
            Mutual fund & visa application platforms
          </p>
        </div>

        <div className="bg-[#2a2a2a] rounded-xl p-5 text-center">
          <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-full bg-accent/10 text-accent">
            <FaBook />
          </div>
          <h3 className="text-white font-semibold mb-1">
            Continuous Learning
          </h3>
          <p className="text-gray-400 text-sm">
            Modern web technologies & best practices
          </p>
        </div>

      </div>
    </section>
  );
};

export default Resume;
