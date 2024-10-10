import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for hamburger and close

const Navbar = () => {
  // State to handle the mobile menu toggle
  const [isOpen, setIsOpen] = useState(false);

  // State to handle the navbar transparency on scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Effect to handle scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true); // When user scrolls more than 50px, make navbar semi-transparent
      } else {
        setIsScrolled(false); // Otherwise, keep it opaque
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup on component unmount
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-black bg-opacity-85" : "bg-black"
      } text-rs-purple py-4 px-4 md:px-8 fixed top-0 w-full flex justify-between items-center z-20 transition-all duration-300`}
    >
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">UW RoboSoccer</Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 lg:space-x-8">
        <Link to="/join" className="hover:text-custom-hover text-lg py-2 px-2 lg:px-4 font-bold">
          Join
        </Link>
        <Link to="/team" className="hover:text-custom-hover text-lg py-2 px-2 lg:px-4 font-bold">
          Team
        </Link>
        <Link to="/sponsors" className="hover:text-custom-hover text-lg py-2 px-2 lg:px-4 font-bold">
          Sponsors
        </Link>
        <Link to="/blog" className="hover:text-custom-hover text-lg py-2 px-2 lg:px-4 font-bold">
          Blog
        </Link>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden">
          <Link
            to="/join"
            className="hover:text-custom-hover text-lg py-2 px-4 font-bold"
            onClick={() => setIsOpen(false)}
          >
            Join
          </Link>
          <Link
            to="/team"
            className="hover:text-custom-hover text-lg py-2 px-4 font-bold"
            onClick={() => setIsOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/sponsors"
            className="hover:text-custom-hover text-lg py-2 px-4 font-bold"
            onClick={() => setIsOpen(false)}
          >
            Sponsors
          </Link>
          <Link
            to="/blog"
            className="hover:text-custom-hover text-lg py-2 px-4 font-bold"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
