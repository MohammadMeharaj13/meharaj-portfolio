import avatar from "../assets/avatar.jpg";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Sidebar = ({ mobile = false }) => {
  return (
    <aside
      className={`bg-[#1a1a1a] shadow-lg rounded-2xl
      ${mobile ? "flex items-center gap-4 p-3" : "w-72 p-6 flex flex-col items-center"}`}
    >
      {/* Avatar */}
      <img
        src={avatar}
        alt="Avatar"
        className={`border-2 border-yellow-500 object-cover
        ${mobile ? "w-12 h-12 rounded-full" : "w-32 h-32 rounded-2xl mb-4"}`}
      />

      {/* Name & Role */}
      <div className={`${mobile ? "text-left" : "text-center"}`}>
        <h1 className={`text-yellow-500 font-bold ${mobile ? "text-base" : "text-2xl"}`}>
          Mohammad Meharaj
        </h1>
        <p className="text-gray-300 text-sm">Front-End Developer</p>
      </div>

      {/* Desktop-only Details */}
      {!mobile && (
        <div className="mt-6 flex flex-col gap-4 w-full">

          <div className="flex gap-3 p-3 bg-[#2a2a2a] rounded-lg">
            <FaEnvelope className="text-yellow-500 mt-1" />
            <div className="text-sm overflow-hidden">
              <p className="text-gray-400">EMAIL</p>
              <p
                className="text-gray-300 truncate max-w-[180px]"
                title="meharajmohammad00@gmail.com"
              >
                meharajmohammad00@gmail.com
              </p>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-[#2a2a2a] rounded-lg">
            <FaPhone className="text-yellow-500 mt-1" />
            <div className="text-sm">
              <p className="text-gray-400">PHONE</p>
              <p className="text-gray-300">+91 8978069208</p>
            </div>
          </div>

          <div className="flex gap-3 p-3 bg-[#2a2a2a] rounded-lg">
            <FaMapMarkerAlt className="text-yellow-500 mt-1" />
            <div className="text-sm">
              <p className="text-gray-400">RELOCATION</p>
              <p className="text-gray-300">
                Hyderabad, Bengaluru, Chennai
              </p>
            </div>
          </div>

        </div>
      )}
    </aside>
  );
};

export default Sidebar;
