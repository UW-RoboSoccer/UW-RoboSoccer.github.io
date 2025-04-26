import "./Team.css"
import "@fontsource/jersey-25";
import "@fontsource/roboto";
import "@fontsource/inter"
import image5 from "../assets/image.svg";
import image6 from "../assets/image-2.svg";
import image7 from "../assets/image-3.svg";
import image8 from "../assets/image-4.svg";
import image9 from "../assets/image-5.svg";
import image10 from "../assets/image-6.svg";
import image11 from "../assets/image-7.svg";
import { useState } from "react";

const Team = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    return (
        <div className="team-wrapper">
            <h1>MEET THE TEAM</h1>
            <div className="imageset1">
                <div className="sub1">
                    <img src={image5} alt="Image four" className="image5"/>
                    <h2>Ernest Wang</h2>
                    <p>Team Lead - Hardware</p>
                </div>
                <div className="sub2">
                    <img src={image6} alt="Image five" className="image6"/>
                    <h3>Ethan Ahn</h3>
                    <p>Team Lead - Controls</p>
                </div>
                <div className="sub3">
                    <img src={image7} alt="Image six" className="image7"/>
                    <h4>Camron Sabahi</h4>
                    <p>Team Lead - Controls</p>
                </div>
                <div className="sub4">
                    <img src={image8} alt="Image seven" className="image8"/>
                    <h5>Ali Elhor</h5>
                    <p>Team Lead - Software/AI</p>
                </div>
            </div>
            <div className="imageset2">
                <div className="sub5">
                    <img src={image9} alt="Image seven" className="image9"/>
                    <h2>Ali Elhor</h2>
                    <p>Team Lead - Hardware</p>
                </div>
                <div className="sub6">
                    <img src={image10} alt="Image seven" className="image10"/>
                    <h3>Ali Elhor</h3>
                    <p>Team Lead - Software/AI</p>
                </div>
                <div className="sub7">
                    <img src={image11} alt="Image seven" className="image11"/>
                    <h4>Ali Elhor</h4>
                    <p>Team Lead - Hardware</p>
                </div>
            </div>
            <div className="buttons2">
                <button onClick={() => setSelectedRole("software")}>Software</button>
                <button onClick={() => setSelectedRole("controls")}>Controls</button>
                <button onClick={() => setSelectedRole("mechanical")}>Mechanical</button>
                <button onClick={() => setSelectedRole("hardware")}>Hardware</button>
            </div>

            <div className="info-box2">
                {selectedRole === "software" && (
                    <p>Software engineers build our robots brain—image processing, strategy, and simulation.</p>
                )}
                {selectedRole === "controls" && (
                    <p>Controls team develops algorithms to make robots move with precision and speed.</p>
                )}
                {selectedRole === "mechanical" && (
                    <p>Mechanical engineers design, assemble, and optimize the robot's physical structure.</p>
                )}
                {selectedRole === "hardware" && (
                    <p>Hardware team works on PCBs, sensors, power systems—bringing the robot to life!</p>
                )}
            </div>
        </div>

    );
};

export default Team;