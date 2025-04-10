import robologo from "../assets/robo.png";
import "./Home.css"
import "@fontsource/jersey-25";
import "@fontsource/jersey-10";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="part1">
        <h1>Welcom To Our Design Team</h1>
        <h2>UW ROBOSOCCER</h2>
        <img src={robologo} alt="UW RoboSoccer Logo" className="robo-logo" />
        <p>This is the homepage</p>
      </div>

      <div className="part2">
        <h3>ABOUT US</h3>
      </div>
    </div>
  );
};
  
export default Home;
  
  