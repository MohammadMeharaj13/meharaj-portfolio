import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("about");

  const links = [
    { name: "About", id: "about" },
    { name: "Resume", id: "resume" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
  ];

  const handleClick = (id) => {
    setActive(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:flex fixed top-0 right-0 bg-[#1a1a1a] p-4 rounded-l-xl shadow-lg z-50 flex-col gap-3">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleClick(link.id)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              active === link.id
                ? "bg-accent text-[#1a1a1a]"
                : "text-gray-300 hover:bg-gray-800"
            }`}
          >
            {link.name}
          </button>
        ))}
      </nav>

      {/* ================= MOBILE NAVBAR ================= */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-[#1a1a1a] shadow-lg z-50 flex justify-around py-2">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleClick(link.id)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
              active === link.id
                ? "bg-accent text-[#1a1a1a]"
                : "text-gray-300"
            }`}
          >
            {link.name}
          </button>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
