const About = () => {
  return (
    <section
      id="about"
      className="bg-[#252525] bg-opacity-60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-soft"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-white">
        About Me
      </h2>
      <div className="w-12 h-[2px] bg-accent mb-4"></div>

      <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
        I'm a passionate Front-End Developer with over one year of professional experience building modern, responsive, and scalable web applications using React.js, TypeScript, JavaScript, and Tailwind CSS.
      </p>
      <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
        I specialize in transforming complex business requirements into clean, intuitive, and user-friendly interfaces. I focus strongly on component reusability, performance optimization, and maintainable code structures while following modern UI/UX best practices.
      </p>
      <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
        I have hands-on experience working in fintech and service-based applications, collaborating closely with backend developers, designers, and product teams to deliver reliable and high-quality solutions. I enjoy solving UI challenges and continuously improving application performance and accessibility.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
        What I'm Doing
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { title: "Web Design", desc: "Designing modern, clean, and user-friendly interfaces with a focus on usability and accessibility." },
          {
            title: "Web Development",
            desc: "Building responsive and scalable web applications using React.js, TypeScript, and modern JavaScript practices.",
          },
          {
            title: "API Integration",
            desc: "Integrating RESTful APIs, handling authentication flows, and managing application state effectively.",
          },
          {
            title: "Performance Optimization",
            desc: "Writing clean, modular, and optimized code to improve application performance and maintainability.",
          },
           {
            title: "Version Control & Collaboration",
            desc: "Working with Git and GitHub for version control, code reviews, and team collaboration.",
           },
           {
            title:"Continuous Learning",
            desc:"Actively learning and applying new front-end tools, frameworks, and best practices to stay up to date with industry trends.",
           },
        ].map((service, i) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-[#2a2a2a] shadow-md hover:scale-105 transition"
          >
            <h4 className="font-semibold text-accent text-lg">{service.title}</h4>
            <p className="text-sm sm:text-base text-gray-300 mt-2">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
