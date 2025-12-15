const projects = [
  {
    title: "Mutual Fund Transaction Platform",
    type: "Web Application",
    description:
      "A fintech web application for managing mutual fund investments with secure transactions and real-time portfolio updates.",
    tech: ["React.js", "TypeScript", "REST API", "Azure"],
    highlights: [
      "Real-time NAV updates",
      "Transaction history & portfolio view",
      "Secure authentication & authorization",
      "Deployed on Microsoft Azure",
    ],
  },
  {
    title: "Visa Application Dashboard",
    type: "Admin Dashboard",
    description:
      "An admin panel to manage visa applications, users, and document verification processes.",
    tech: ["React.js", "Django", "JWT", "Figma"],
    highlights: [
      "Role-based access control",
      "Visa application tracking",
      "Document upload & verification",
      "UI built from Figma designs",
    ],
  },
  {
    title: "Responsive Portfolio Website",
    type: "Personal Project",
    description:
      "A responsive personal portfolio showcasing skills, experience, and projects with optimized performance.",
    tech: ["React.js", "Tailwind CSS", "Vite"],
    highlights: [
      "Mobile-first responsive design",
      "Reusable UI components",
      "Smooth scrolling experience",
      "Performance optimized build",
    ],
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="bg-[#252525] bg-opacity-60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-soft"
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Portfolio
        </h2>
        <div className="w-12 h-[2px] bg-accent mt-2"></div>
        <p className="text-gray-400 text-sm sm:text-base mt-4 max-w-2xl">
          A selection of projects demonstrating my experience in building
          scalable, responsive, and user-focused web applications.
        </p>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#2a2a2a] rounded-xl p-6 flex flex-col lg:flex-row gap-6 hover:bg-[#303030] transition"
          >
            {/* Left Section */}
            <div className="flex-1">
              <span className="text-xs uppercase tracking-wide text-accent">
                {project.type}
              </span>

              <h3 className="text-xl font-semibold text-white mt-2">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm sm:text-base mt-3 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Right Section */}
            <div className="flex-1">
              <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-1 mb-4">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#1f1f1f] rounded-full text-xs sm:text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
