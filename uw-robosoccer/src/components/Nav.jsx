import { Link, useMatch, useResolvedPath } from "react-router-dom"
import LinkedInlogo from "../assets/LinkedIn.svg";
import Instagramlogo from "../assets/Instagram.svg";
import YouTubelogo from "../assets/YouTube.svg";
import GitHublogo from "../assets/GitHub.svg";
import uwrsLogo from "../assets/uwrsLogo.png";
import "./Nav.css"

const Navbar = () => {
  return (
    <nav className="navbar" style={{ backgroundColor: "#2B2C59", color: "white", padding: "10px"}}>
      
      <Link to="../"> <img src={uwrsLogo} className="uwrs" /></Link>
      <a href="https://www.linkedin.com/company/uw-robosoccer/" target="_blank"> <img src={LinkedInlogo} className="IN" /></a>
      <a href="https://www.instagram.com/uwrobosoccer/" target="_blank"> <img src={Instagramlogo} className="IG" /></a>
      <a href="https://www.youtube.com/@uwrobosoccer" target="_blank"> <img src={YouTubelogo} className="YT" /></a>
      <a href="https://github.com/UW-RoboSoccer" target="_blank"> <img src={GitHublogo} className="GH" /></a>
      <div className="links">
        <ul>
          <CustomLink to="../pages/Join">Join</CustomLink>
          <CustomLink to="../pages/Team">Team</CustomLink>
          <CustomLink to="../pages/Sponsors">Sponsors</CustomLink>
          <CustomLink to="../pages/Blog">Blog</CustomLink>
        </ul>
      </div>
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