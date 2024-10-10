import React, { useState } from "react";
import { subteam_apps, why_us_section } from "../constants";  // Ensure this is correctly imported
import { testbanner, test2, test } from "../assets";  // Ensure this is correctly imported
import Footer from '../components/Footer';

const Join = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index); // Toggle between open/closed
  };

  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="join-page">
      {/* Banner Section */}
      <section className="relative h-[50vh] bg-cover bg-center">
        <img src={testbanner} alt="Banner" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Recruitment</h1>
          <p className="text-base md:text-lg text-white mt-4 text-center">Join us on our journey</p>
        </div>
      </section>

      {/* About the Competition Section */}
      <section className="w-full bg-rsBack">
        <div className="px-4 md:px-24 py-10 md:py-20 flex flex-col lg:flex-row items-start">
          {/* Text Section */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold text-left">We are Hiring (soon)</h2>
            <h3 className="text-xl md:text-2xl font-semibold text-left mt-4">Become a Member</h3>
            <p className="text-left text-base md:text-lg my-4 text-gray-600">
              Joining the University of Waterloo's RoboCup team offers a unique chance to 
              collaborate with a diverse and passionate group of individuals.
              We value every member, recognizing that every contribution—no matter the size—helps 
              drive our success. Whether you're an expert or just starting out, you'll find a 
              welcoming environment where your skills and ideas are appreciated. <strong> Applications open 
              in Winter 2025</strong>, and we’re excited to welcome new members ready to innovate 
              and compete on the global stage.
            </p>
            <div className="text-center my-4">
              <a 
                href="https://discord.gg/YOUR_DISCORD_LINK" // Replace with your actual Discord invite link
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block py-2 px-24 m-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
              >
                Join Our Discord
              </a>
            </div>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2 lg:pr-12 mt-8 lg:mt-0">
            <img
              src={test} // Replace with the actual path to your image
              alt="RoboCup Competition"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="w-full bg-rsBack2">
        <div className="px-4 md:px-24 py-10">
          <h3 className="text-xl md:text-2xl font-semibold text-left">Why Us?</h3>
          <div className="mt-8 space-y-6">
            {why_us_section.map((section, index) => (
              <div key={index} className="border-t border-b">
                <button
                  className="w-full text-left py-3 px-4 flex items-center justify-between text-lg font-medium text-black focus:outline-none"
                  onClick={() => toggleSection(section.title)}
                >
                  <span>{section.title}</span>
                  <span>{openSections[section.title] ? "▲" : "▼"}</span>
                </button>
                {openSections[section.title] && (
                  <div className="px-4 pb-4 text-grey-600">
                    <p>{section.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subteam Section */}
      <section className="w-full bg-rsBack">
        <div className="px-4 md:px-24 py-10 md:py-20">
          <h3 className="text-xl md:text-2xl font-semibold text-left">Join us</h3>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            The RoboCup team is looking for University of Waterloo students to represent the 
            University of Waterloo in the RoboCup competition. We welcome individuals who are 
            passionate about design and technology. Click on the buttons below to learn more about the application 
            process of each subteam. 
          </p>

          {/* Inline Subteam Buttons */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
            {subteam_apps.map((subteam, index) => (
              <button
                key={index}
                className={`py-2 px-4 rounded shadow-md transition-colors duration-300 ${
                  activeTab === index
                    ? "bg-gray-100 text-black"   // Active state: blue background and white text
                    : "bg-white text-black hover:bg-gray-100" // Default state: white background, black text, and hover effect
                }`}
                onClick={() => toggleTab(index)} // Function to change active tab
              >
                {subteam.title}
              </button>
            ))}
          </div>

          {/* Subteam Descriptions */}
          {subteam_apps.map((subteam, index) => (
            <div key={index} className="mb-4">
              {activeTab === index && (
                <div className="bg-gray-100 px-6 py-4 text-gray-800 shadow-md rounded">
                  <p className="font-bold mb-2">Description</p>
                  <p>{subteam.description}</p>
                  <p className="font-bold mt-4 mb-2">Skills Used</p>
                  <ul className="list-disc list-inside">
                    {subteam.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                  <p className="font-bold mt-4 mb-2">How to Apply</p>
                  <p>{subteam.apply}</p>
                </div>
              )}
            </div>
          ))}
          <p className="mt-4 text-gray-600 text-base md:text-lg"> Don't fret if you don't have all the skills listed, you can learn them all the way as long 
          as you know at least a few! </p>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Join;