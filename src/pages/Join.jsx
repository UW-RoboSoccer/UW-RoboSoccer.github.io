import "./Join.css"
import "@fontsource/jersey-10";
import "@fontsource/roboto";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import { useState } from "react";

const Join = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    return (
        <div className="join-wrapper">
            <div className="part3">
                <h1>UW ROBOSOCCER</h1>
                <h2>We are hiring soon</h2>
                <a href="https://github.com/UW-RoboSoccer" target="_blank">Join our discord</a>
                <p1>Joining the University of Waterloo's RoboCup team offers a unique chance to collaborate with a diverse and passionate group of individuals. We value every member, recognizing that every contribution—no matter the size—helps drive our success. Whether you're an expert or just starting out, you'll find a welcoming environment where your skills and ideas are appreciated. Applications open in Winter 2025, and we’re excited to welcome new members ready to innovate and compete on the global stage.</p1>
                <h3>WHY US</h3>
            </div>
            <div className="part4">
                <div className="subp1">
                    <div className="para1">
                        <h4>Unique Practical Experience</h4>
                        <p4>Our team offers a unique hands on experience on working with bipedal robots and complex RL algorithms, allowing you to polish and hone your skills in an new but increasingly demanding environment</p4>
                    </div>
                    <img src={image3} alt="Image three" className="image3"/>
                    <div className="para2">
                        <h5>Innovative Engineering Approach</h5>
                        <p5>Our team leverages the latest in mechatronic and AI advancements to build autonomous soccer-playing robots from the ground up. With a strong emphasis on robust engineering and problem-solving, we tackle real-world challenges with ingenuity and precision.</p5>
                    </div>
                </div>
                <div className="subp2">
                    <div className="para3">
                        <h6>Competitive and Collaborative Spirit</h6>
                        <p6>Competing in RoboCup fosters a sense of camaraderie and collaboration, both within our team and with others globally. We’re driven by a passion for competition and teamwork, and we continually push each other to excel, creating a supportive environment that empowers every member to contribute and grow.</p6>
                    </div>
                    <img src={image4} alt="Image four" className="image4"/>
                    <div className="para4">
                        <h7>Innovative Engineering Approach</h7>
                        <p7>Our team leverages the latest in mechatronic and AI advancements to build autonomous soccer-playing robots from the ground up. With a strong emphasis on robust engineering and problem-solving, we tackle real-world challenges with ingenuity and precision.</p7>
                    </div>
                </div>
            </div>
            <div className="part5">
                <h8>JOIN US</h8>
                <p8>The RoboCup team is looking for University of Waterloo students to represent the University of Waterloo in the RoboCup competition. We welcome individuals who are passionate about design and technology. Click on the buttons below to learn more about the application process of each subteam</p8>
            </div>
            <div className="buttons">
                <button onClick={() => setSelectedRole("software")}>Software</button>
                <button onClick={() => setSelectedRole("controls")}>Controls</button>
                <button onClick={() => setSelectedRole("mechanical")}>Mechanical</button>
                <button onClick={() => setSelectedRole("hardware")}>Hardware</button>
            </div>

            <div className="info-box">
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

export default Join;