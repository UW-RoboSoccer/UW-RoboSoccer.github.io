import { Link, useMatch, useResolvedPath } from "react-router-dom"
import robologo from "../assets/robo.png";
import "./Home.css"
import "@fontsource/jersey-25";
import "@fontsource/jersey-10";
import "@fontsource/roboto";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="part1">
        <h1>Welcome To Our Design Team</h1>
        <h2>UW ROBOSOCCER</h2>
        <img src={robologo} alt="UW RoboSoccer Logo" className="robo-logo" />
      </div>

      <div className="part2">
        <h3>ABOUT US</h3>
        <div className="subpart1">
          
          <p>Founded in 2024 by a group of UW Engineers, the heart of the UW RoboSoccer lies a passion for innovation and collaboration, as we  push the boundaries of autonomous robotics. We design, build, and program humanoid bipedal robots capable of playing soccer, an engineering challenge that demands both technical mastery and creativity. Competing in the prestigious RoboCup Humanoid League, our robots must autonomously navigate the field, locate, control, and score a soccer ball, and work together to achieve victory.</p>
          <img src={image1} alt="Image one" className="image1"/>
        </div>
        <h5>THE COMPETITION</h5>
        <div className="subpart2">
          <img src={image2} alt="Image one" className="image2"/>
          <p>The RoboCup Humanoid League is a global competition where teams of autonomous humanoid robots compete in soccer matches. UW Robosoccer is aiming to compete in the kid-sized humanoid league, where robots are limited to a height of between 40-100cm. It is a 4v4 autonomous soccer game, where a robot team works together to shoot, defend and score goals to win. To learn more, you can visit the official website of RoboCup </p>
        </div>
        <div className="subpart3">
          <h6>OUR WORK</h6>
          <p>Here are some of our recent accomplishments and milestones we've reached as we continue on our path to competition in 2026! Click on the see all blog post button to learn more about each post.</p>
        </div>
        <div className="blog-part">
          <p>blog post region</p>
        </div>
        <CustomLink className="seemore" to="../Blog" onClick={() => setIsOpen(false)}>
        See more
        </CustomLink>
      </div>
    </div>
  );
};
  
export default Home;
  
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