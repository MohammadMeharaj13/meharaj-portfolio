const services = [
  {
    title: "Web Design",
    desc: "Modern and user-friendly UI design.",
  },
  {
    title: "Web Development",
    desc: "React and Next.js applications.",
  },
  {
    title: "API Integration",
    desc: "REST API integration and data handling.",
  },
  {
    title: "Performance",
    desc: "Optimized and scalable code.",
  },
];

const WhatImDoing = () => {
  return (
    <section className="bg-card rounded-2xl p-8 shadow-soft">
      <h2 className="text-xl font-semibold mb-6">What I’m Doing</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="bg-[#232323] rounded-xl p-5">
    <h3 className="text-sm font-medium text-yellow-400 mb-1">
      Web Design
    </h3>
    <p className="text-sm text-gray-400">
      Modern and user-friendly UI design.
    </p>
  </div>

  <div className="bg-[#232323] rounded-xl p-5">
    <h3 className="text-sm font-medium text-yellow-400 mb-1">
      Web Development
    </h3>
    <p className="text-sm text-gray-400">
      React and Next.js applications.
    </p>
  </div>
</div>

    </section>
  );
};

export default WhatImDoing;
