const Contact = () => {
  return (
    <section id="contact" className="bg-[#252525] bg-opacity-60 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-soft">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-2 text-white">Get In Touch</h2>
      <div className="w-12 h-[2px] bg-accent mb-4"></div>

      <p className="text-sm sm:text-base text-gray-300 mb-6">
        Feel free to reach out for collaborations, opportunities, or just a friendly chat.
      </p>

      <form className="grid gap-4">
        <input type="text" placeholder="Your name" className="text-sm sm:text-base p-4 rounded-lg bg-[#1f1f1f] border border-gray-700 text-gray-300"/>
        <input type="email" placeholder="your.email@example.com" className="text-sm sm:text-base p-4 rounded-lg bg-[#1f1f1f] border border-gray-700 text-gray-300"/>
        <textarea placeholder="Your message..." rows="4" className="text-sm sm:text-base p-4 rounded-lg bg-[#1f1f1f] border border-gray-700 text-gray-300"/>
        <button type="submit" className="text-sm sm:text-base py-3 px-6 bg-accent text-[#1a1a1a] rounded-lg hover:bg-accent/90 transition">Send a Message</button>
      </form>
    </section>
  );
};

export default Contact;
