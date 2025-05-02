import { Link, useMatch, useResolvedPath } from "react-router-dom"
import LinkedInlogo from "../assets/LinkedIn.svg";
import Instagramlogo from "../assets/Instagram.svg";
import YouTubelogo from "../assets/YouTube.svg";
import GitHublogo from "../assets/GitHub.svg";
import uwrsLogo from "../assets/uwrsLogo.png";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import "./Nav.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" >
      <div className="wrapper">
        <div className="left-icons">
          <Link to="../"> <img src={uwrsLogo} className="uwrs" /></Link>
          <a href="https://www.linkedin.com/company/uw-robosoccer/" target="_blank"> <img src={LinkedInlogo} className="IN" /></a>
          <a href="https://www.instagram.com/uwrobosoccer/" target="_blank"> <img src={Instagramlogo} className="IG" /></a>
          <a href="https://www.youtube.com/@uwrobosoccer" target="_blank"> <img src={YouTubelogo} className="YT" /></a>
          <a href="https://github.com/UW-RoboSoccer" target="_blank"> <img src={GitHublogo} className="GH" /></a>
        </div>
      
        <div className="links" >
          <ul>
            <CustomLink to="../Join">Join</CustomLink>
            <CustomLink to="../Team">Team</CustomLink>
            <CustomLink to="../Sponsors">Sponsors</CustomLink>
            <CustomLink to="../Blog">Blog</CustomLink>
          </ul>
        </div>
      </div>
      {/* Hamburger Button - Mobile Only */}
      <div className="hamburger-button mobile-only">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="left-icons">
            <Link to="../"> <img src={uwrsLogo} className="uwrs2" /></Link>
      </div>
      {isOpen && (
        <div className="mobile-menu mobile-only">
          <div className="links2">
            <ul>
              <CustomLink to="../Join" onClick={() => setIsOpen(false)}>Join</CustomLink>
              <CustomLink to="../Team" onClick={() => setIsOpen(false)}>Team</CustomLink>
              <CustomLink to="../Sponsors" onClick={() => setIsOpen(false)}>Sponsors</CustomLink>
              <CustomLink to="../Blog" onClick={() => setIsOpen(false)}>Blog</CustomLink>
            </ul>
          </div>
         </div>
      )};
    </nav>
  );
};
export default Navbar;
 

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}