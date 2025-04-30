import "./Footer.css"
import LinkedInlogo from "../assets/LinkedIn.svg";
import Instagramlogo from "../assets/Instagram.svg";
import YouTubelogo from "../assets/YouTube.svg";
import GitHublogo from "../assets/GitHub.svg";
import Discordlogo from "../assets/Discord.svg";

const Footer = () => {
    return(
        <footer className="Footer">
            <div className="footer-wrapper">
                <div className="subfooter1">
                    <h1>UWRS</h1>
                    <div className="social-media-icons">
                        <a href="https://www.linkedin.com/company/uw-robosoccer/" target="_blank"> <img src={LinkedInlogo} className="IN2" /></a>
                        <a href="https://www.instagram.com/uwrobosoccer/" target="_blank"> <img src={Instagramlogo} className="IG2" /></a>
                        <a href="https://www.youtube.com/@uwrobosoccer" target="_blank"> <img src={YouTubelogo} className="YT2" /></a>
                        <a href="https://github.com/UW-RoboSoccer" target="_blank"> <img src={GitHublogo} className="GH2" /></a>
                        <a href="" target="_blank"> <img src={Discordlogo} className="DS" /></a>
                    </div>
                </div>
                <div className="subfooter2">
                    <h2>UW Robosoccer</h2>
                    <p>200 University Avenue West Engineering 5 Waterloo, ON N2L 3G1</p>
                    <a href="mailto:uwrobosoccer@gmail.com">uwrobosoccer@gmail.com</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;